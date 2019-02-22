import '../public/style.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { HotTable } from '@handsontable-pro/react'
import data from '../public/data.json'


import todoAdapter from './indexDB/adapter/dexie/todoAdapter'

console.log('todoAdapter', new todoAdapter('database').get())
// import dbModule from './indexDB'
// var db = dbModule()
// console.log(db.Todos.addData((err, todo) => console.log('111', err, todo)))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.data = data
  }

  render() {
    return (
      <div id="hot-app" className='my-container'>
        <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="600" height="300" stretchH="all" />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))











