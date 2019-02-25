import '../public/style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import DbModule from './indexDB'
import Table from './component/tables'

window.api = DbModule()

import dataSource from './datasource'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.dataSource = new dataSource({
      query: (cb) => {
        return window.api.Todos.get((err, data) => {
          return cb(err, data)
        })
      }
    })
  }

  render () {
    return (
      <div id="hot-app" className='my-container'>
        <Table dataSource={this.dataSource}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))











