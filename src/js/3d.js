//init 3d

let world, mass, body, shape, timeStep=1/60,
  camera, scene, renderer, light;

const makeTsiri = () => {
  const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(5, 3, 70, 12),
    new THREE.MeshLambertMaterial({color: 0xffffff}),
  )
  return cylinder
}

const initCannon = () => {
  world = new CANNON.World()
  world.gravity.set(0,0,0)
  world.broadphase = new CANNON.NaiveBroadphase()
  world.solver.iterations = 10

  shape = new CANNON.Box(new CANNON.Vec3(1,1,1))
  mass = 1
  body = new CANNON.Body({
    mass: 1
  })
  body.addShape(shape)
  body.angularVelocity.set(0,10,0)
  body.angularDamping = 0.5
  world.add(body)
}

const initThree = () => {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 )
  camera.position.z = 100
  // camera.position.y = 0
  // camera.position.x = 0
  scene.add(camera)

  scene.add(makeTsiri())

  renderer = new THREE.WebGLRenderer({antialias: true})
  renderer.setClearColor('#707887')
  renderer.setSize(window.innerWidth, window.innerHeight)

  light = new THREE.PointLight(0xffffff, 2, 500)
  light.position.set(10, 0, 25)
  scene.add(light);

  document.body.appendChild(renderer.domElement)
}

const animate = () => {
  requestAnimationFrame(animate)
  updatePhysics()
  render()
}

const updatePhysics = () => {

  // Step the physics world
  world.step(timeStep);

  // Copy coordinates from Cannon.js to Three.js
  mesh.position.copy(body.position);
  mesh.quaternion.copy(body.quaternion);

}

// document.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   camera.aspect = window.innerWidth/window.innerHeight
// })

// camera.updateProjectionMatrix()

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera)
}

initCannon()
initThree()
render()