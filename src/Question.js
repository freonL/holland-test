import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, ButtonToolbar,ButtonGroup  } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Question extends React.Component {

  createElements(low, high){
    var elements = [];
    for(let i = low; i <= high; i++){
      elements.push(i);
    }
    return elements;
  }

  handleSelect = (event) => {

    this.props.onAnswerSelect(event.target.value)
  }

  render () {
    let els = this.createElements(
      this.props.sect.scale.low.val,
      this.props.sect.scale.high.val);
    return (<div>
      <Row>
        <Col>
          <h1>{this.props.sect.title}</h1>
          <p>{this.props.sect.desc}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>

            <Row>
              <Col className="text-center">
                <h2>{this.props.question.question}</h2>
              </Col>
            </Row>
                <Row>
                  <Col className="text-right pt-1">{this.props.sect.scale.low.label}</Col>
                  <Col className="text-center" md="auto">

                    {
                      els.map(el => {
                        return  <Button className="mx-1" variant="outline-secondary" value={el} key={el} onClick={this.handleSelect}>{el}</Button>
                      })
                    }

                  </Col>
                  <Col className="text-left pt-1">{this.props.sect.scale.high.label}</Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>)
  }
}

export default Question;