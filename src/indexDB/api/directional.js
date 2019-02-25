import TodoApdapter from '../adapter/dexie/todoAdapter'
function directional(config) {
  this.config = config
}
directional.prototype = new TodoApdapter()
export default directional
