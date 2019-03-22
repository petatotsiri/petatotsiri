import {variance} from './math.js'

export default class {
  constructor(preset) {
    this.tzivana
    this.xartakia
    this.fou
    this.kapnos
    Object.assign(this, preset)
  }

  get mix() {
    return this.fou + this.kapnos
  }

  get poiotita() {
    const q = variance([this.mix, ...[this.tzivana, this.xartakia].map((a) => a * 100 / 3)]) / 900
    return 1 - (q > 1 ? 1 :
                q < 0 ? 0 :
                q)
  }

  petato(){
    return this.poiotita > Math.random()
  }
}
