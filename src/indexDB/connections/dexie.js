import Dexie from 'dexie'

export default class DexieModule {
  constructor (dbName, tables) {
    this.dbName = dbName
    this.database = new Dexie(this.dbName)
    this.database.version(1).stores(tables)
  }
}
