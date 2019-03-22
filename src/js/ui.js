/*--------------- SLIDERS --------------*/
const tzivana = document.getElementById('tzivana')

document.getElementsByName('tzivana').forEach((radio) => {
  radio.addEventListener('change', ({target}) => {
    if (target.checked) {
      tzivana.value = target.value
      tzivana.dispatchEvent(new Event('input'))
    }
  })
})

const xartakia = document.getElementById('xartakia')

document.getElementsByName('xartakia').forEach((radio) => {
  radio.addEventListener('change', ({target}) => {
    if (target.checked) {
      xartakia.value = target.value
      xartakia.dispatchEvent(new Event('input'))
    }
  })
})

const ui = {
  fou: document.getElementById('fou'),
  kapnos: document.getElementById('kapnos'),
  xartakia: document.getElementById('xartakia'),
  tzivana: document.getElementById('tzivana'),
  petato: document.getElementById('petato'),
}

// init
ui.fou.addEventListener('input', ({target}) => {
  document.getElementById('demo1').innerHTML = target.value
})

ui.kapnos.addEventListener('input', (event) => {
  document.getElementById('demo2').innerHTML = event.target.value
})

export default ui