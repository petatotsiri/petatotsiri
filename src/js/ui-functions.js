import ui from './ui.js'
import {currentTsiri} from './index.js'
import {diaolos, petato} from './game.js'

['fou', 'kapnos', 'tzivana', 'xartakia'].forEach((name) => {
  ui[name].addEventListener('input', ({target}) => {
    currentTsiri[name] = Number(target.value)
  })
})

ui.petato.addEventListener('click', ({target}) => {
  console.log(petato() && diaolos());
})

