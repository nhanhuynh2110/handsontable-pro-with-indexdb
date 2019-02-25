import directional from './directional'

// import TodoApdapter from './indexDB/adapter/dexie/todoAdapter'

const todoConfig = {
  adapter: 'dexie',
  name: 'todoAdapter'
}

function todoApi () {}

todoApi.prototype = new directional(todoConfig)

export default todoApi
