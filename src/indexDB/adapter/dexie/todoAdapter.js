import Iadapter from '../Iapdater'
function todoAdapter (db) {
  this.db = db
}
todoAdapter.prototype = Iadapter
todoAdapter.prototype.get = function () {
  return this.db[name].where({name: 'todos1'}).first(todo => todo).catch(error => { throw error.toString() })
}


export default todoAdapter


