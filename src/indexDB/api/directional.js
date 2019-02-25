import todoApdapter from '../adapter/dexie/todoAdapter'
let adapter = {
  todoApdapter
}
function directional(config) {
  this.config = config
}
directional.prototype = new adapter['todoApdapter']()
export default directional
