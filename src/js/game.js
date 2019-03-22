import {currentTsiri, pososto} from './index.js'
import game from './game-ui.js'

const diaolos = () => {
  if (pososto / 100 > Math.random() && currentTsiri.poiotita > 0.7) {
    alert('Ο διάολος έσπασε το ποδάρι του!')
    return false
  }
  return true
}

const petato = () => {
  game.tsiri.classList.add('animation')
  setTimeout(() => game.tsiri.classList.remove('animation'), 1000)
  return currentTsiri.petato()
}

export {diaolos, petato}