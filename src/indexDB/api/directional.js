

// class Directional {
//   constructor (config) {

//   }
// }

function directional(config) {
  this.config = config
}
directional.prototype = require(this.config.adapter)

export default directional
