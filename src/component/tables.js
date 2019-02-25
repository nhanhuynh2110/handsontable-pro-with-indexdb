import React from 'react'
import { HotTable } from '@handsontable-pro/react'

export default class handsontableRender extends React.PureComponent {
  constructor (props) {
    super(props)
    this.data = []
  }
  componentDidMount () {
    this.props.dataSource.query((err, result) => {
      if (err) return
      this.data = result.map((element) => Object.keys(element).map(k => element[k]))
      this.forceUpdate()
    })
  }

  render () {
    return (
      <React.Fragment>
        <HotTable data={this.data} colHeaders rowHeaders height={600} width={800} stretchH='all' />
      </React.Fragment>
    )
  }
}
