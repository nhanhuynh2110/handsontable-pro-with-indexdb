import Iadapter from '../Iapdater'
import $ from 'jquery'
import Dexie from 'dexie'

function todoAdapter() {}

todoAdapter.prototype = Iadapter
todoAdapter.prototype.set = function () { return 'todoApdapter set' }
todoAdapter.prototype.udpate = function () { return 'todoApdater update' }

todoAdapter.prototype.get = function (cb) {
  new Promise (function (resolve, reject) {
    window.dexiedb.todo.filter((t) => t.id <= 100000).toArray().then((data) => {
      resolve(data)
    }).catch(err => {
      reject(err.toString())
    })
  }).then(data => {
    return cb(null, data)
  })

}

todoAdapter.prototype.bulkAdds = function (cb) {
  $.getJSON('data.json', function (json) {
    window.dexiedb.todo.bulkAdd(json).then((lastKey) => {
    }).catch(Dexie.BulkError, function (e) {
      console.error ("Some raindrops did not succeed. However, " +
        100000-e.failures.length + " raindrops was added successfully")
    })
  })
}
export default todoAdapter


