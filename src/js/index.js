 //'use strict'

import Tsiri from './tsiri.js'
import './ui-functions.js'
import './3d.js'

const initialTsiri = {
  tzivana: 1,
  xartakia: 1,
  fou: 1,
  kapnos: 1,
};

const pososto = 2

const currentTsiri = new Tsiri(initialTsiri)

export {currentTsiri, pososto}
