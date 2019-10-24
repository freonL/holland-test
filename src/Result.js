import React from "react";
import { Card, Button, ButtonToolbar,ButtonGroup  } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Result extends React.Component {

  data = [
    {
      "code": "Realistic",
      "interest": "Building",
      "desc": "involve the use of tools, machines, or physical skill. Builders like working with their hands and bodies, working with plants and animals, and working outdoors.",
      "icon":"job/icon_R.jpg"
    },

    {
      "code": "Investigative",
      "interest": "Thinking",
      "desc": "involve theory, research, and intellectual inquiry. Thinkers like working with ideas and concepts, and enjoy science, technology, and academia",
      "icon":"job/icon_I.png"
    },

    {
      "code": "Artistic",
      "interest": "Creating",
      "desc": " involve art, design, language, and self-expression. Creators like working in unstructured environments and producing something unique.",
      "icon":"job/icon_A.png"
    },
    {
      "code": "Social",
      "interest": "Helping",
      "desc": "involve assisting, teaching, coaching, and serving other people. Helpers like working in cooperative environments to improve the lives of others.",
      "icon":"job/icon_S.jpg"
    },

    {
      "code": "Enterprising",
      "interest": "Persuading",
      "desc": "involve leading, motivating, and influencing others. Persuaders like working in positions of power to make decisions and carry out projects.",
      "icon":"job/icon_R.jpg"
    },

    {
      "code": "Conventional",
      "interest": "Organizing",
      "desc": "involve managing data, information, and processes. Organizers like to work in structured environments to complete tasks with precision and accuracy.",
      "icon":"job/icon_C.png"
    },
  ]


  render () {
    let scores = [this.props.scoreR,this.props.scoreI,this.props.scoreA,this.props.scoreS,this.props.scoreE,this.props.scoreC]
    let count = -1;
    let index = -1;
    scores.map((score,i) => {
      if (count < score) {
        count = score;
        index = i;
      }
    })
    console.log(this.data[index]);
    return (
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <h1>You're {this.data[index].code}</h1>
              <p>Your </p>
              <p>{this.data[index].desc}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      );
  }
}

export default Result;