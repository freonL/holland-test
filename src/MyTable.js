import React from "react";
import Table from 'react-bootstrap/Table'

class MyTable extends React.Component {
  render() {
    return (<Table striped bordered hover>
      <thead>
        <tr>
          <th>R</th><th>I</th><th>A</th>
          <th>S</th><th>E</th><th>C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.scoreR}</td>
          <td>{this.props.scoreI}</td>
          <td>{this.props.scoreA}</td>
          <td>{this.props.scoreS}</td>
          <td>{this.props.scoreE}</td>
          <td>{this.props.scoreC}</td>
        </tr>
      </tbody>
    </Table>)
  }

}

export default MyTable;