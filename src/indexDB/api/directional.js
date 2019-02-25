import todoAdapter from '../adapter/dexie/todoAdapter'
let adapters = {
  todoAdapter
}
function directional(config) {
  let _adapter = new adapters[config.name]()
  return _adapter
}
export default directional
