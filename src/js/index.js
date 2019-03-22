 //'use strict'

import Tsiri from './tsiri.js'
import './ui-functions.js'


//init 3d
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 100
camera.position.y = 30
camera.position.x = 40
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setClearColor('#707887')
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

document.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth/window.innerHeight
})

camera.updateProjectionMatrix()

const geometry = new THREE.CylinderGeometry(5, 3, 70, 12);
const material = new THREE.MeshLambertMaterial({color: 0xffffff});
const cylinder = new THREE.Mesh(geometry,material);

cylinder.rotation.set(45,0,10)
cylinder.position.set(5,5,5)

scene.add(cylinder);

const light = new THREE.PointLight(0xffffff, 2, 500)
light.position.set(10, 0, 25)
scene.add(light);

const render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera)
}

render();

const initialTsiri = {
  tzivana: 1,
  xartakia: 1,
  fou: 1,
  kapnos: 1,
};

const pososto = 2;

const currentTsiri = new Tsiri(initialTsiri);

export {currentTsiri, pososto};
