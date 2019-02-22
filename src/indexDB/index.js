import dexieModule from './dexie'

import tables from './tables'
import Todos from './api/todos'


class MyDb extends dexieModule {
  constructor () {
    super('auvenir', tables)
  }
}

function init () {
  let db = new MyDb().database
  return {
    Todos: new Todos(db)
  }
}

export default init
