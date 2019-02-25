import directional from './directional'

const todoConfig = {
  adapter: 'dexie',
  name: 'todoAdapter'
}

function todoApi () {
  let direc = new directional(todoConfig)
  return direc
}

export default todoApi
