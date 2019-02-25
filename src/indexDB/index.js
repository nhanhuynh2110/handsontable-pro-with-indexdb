import dexieModule from './connections/dexie'

import tables from './tables'
import Todos from './api/todos'
class MyDb extends dexieModule {
  constructor () {
    super('auvenir', tables)
  }
}

function init () {
  new MyDb()
  return {
    Todos: new Todos()
  }
}

export default init
