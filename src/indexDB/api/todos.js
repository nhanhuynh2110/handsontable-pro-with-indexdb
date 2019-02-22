const name = 'todo'
const todoConfig = {
  adapter: 'dexie'
}


export default class Todos {
  constructor (db) {
    this.db = db
  }

  addData (cb) {
    let self = this
    this.db.todo.add({name: 'todos1', description: 'des todo1'}).then(function(err, data) {
      return self.db[name].where({name: 'todos1'}).first(todo => todo).catch(error => { throw error.toString() })
    }).then(function (todo) {
      return cb(null, todo)
    }).catch(function (e) {
        console.log('Error: ' + e);
        return cb(e)
    });
  }
}
