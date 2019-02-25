import Dexie from 'dexie'

export default class DexieModule {
  constructor (dbName, tables) {
    window.dexiedb = new Dexie(dbName)
    window.dexiedb.version(1).stores(tables)
  }
}
