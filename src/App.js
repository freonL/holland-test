import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import MyTable from './MyTable';
import Result from './Result';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreR:0,
      scoreI:0,
      scoreA:0,
      scoreS:0,
      scoreE:0,
      scoreC:0,

      data: [],
      sect_i: 0,
      ques_i: 0,
      total:0,
      progress:1,
    };


    axios.get("./holland_data.json")
    .then((result) => {
      console.log(result.data);
      this.setState({
        data: result.data
      });

      result.data.map((data) => {
        this.setState({
          total: this.state.total + data.entry.length
        });
        return true;
      })

    })

  }

  createElements(low, high){
    var elements = [];
    for(let i = low; i <= high; i++){
      elements.push(i);
    }
    return elements;
  }

  updateTable = (answer) => {
    let cat = this.state.data[this.state.sect_i].entry[this.state.ques_i].category;
    let val = Number(answer);
    switch (cat) {
      case "R":
        this.setState({
          scoreR: this.state.scoreR + val
        })
        break;
      case "I":
        this.setState({
          scoreI: this.state.scoreI + val
        })
        break;
      case "A":
        this.setState({
          scoreA: this.state.scoreA + val
        })
        break;
      case "S":
        this.setState({
          scoreS: this.state.scoreS + val
        })
        break;
      case "E":
        this.setState({
          scoreE: this.state.scoreE + val
        })
        break;
      case "C":
        this.setState({
          scoreC: this.state.scoreC + val
        })
        break;
      default:
        break;
    }

    if (this.state.data[this.state.sect_i].entry.length-1 === this.state.ques_i ) {
      this.setState((state) => ({
        ques_i: 0,
        sect_i: state.sect_i + 1,
      }) );
    } else {

      this.setState((state) => ({
        ques_i: state.ques_i + 1
      }) );
    }

    this.setState((state) => ({
      progress: this.state.progress + 1,
    }) );
  }
  render () {

    if (this.state.data.length === 0 || this.state.total < this.state.progress) {
      return (<Container>
        <Row><Col>
          <ProgressBar now={this.state.progress/this.state.total *100} />
        </Col></Row>
        <Row><Col>
          <MyTable scoreR={this.state.scoreR} scoreI={this.state.scoreI} scoreA={this.state.scoreA} scoreS={this.state.scoreS} scoreE={this.state.scoreE} scoreC={this.state.scoreC}></MyTable>
        </Col></Row>

        <Result scoreR={this.state.scoreR} scoreI={this.state.scoreI} scoreA={this.state.scoreA} scoreS={this.state.scoreS} scoreE={this.state.scoreE} scoreC={this.state.scoreC} />

      </Container>)

    } else {
      return (<Container>
        <Row><Col>
          <ProgressBar now={this.state.progress/this.state.total *100} />
        </Col></Row>
        <Row><Col>
          <MyTable scoreR={this.state.scoreR} scoreI={this.state.scoreI} scoreA={this.state.scoreA} scoreS={this.state.scoreS} scoreE={this.state.scoreE} scoreC={this.state.scoreC}></MyTable>
        </Col></Row>

        <Question
          sect={this.state.data[this.state.sect_i]}
          question={this.state.data[this.state.sect_i].entry[this.state.ques_i]}
          onAnswerSelect={ (answer) => {
            this.updateTable(answer)
          }}
        ></Question>
        

      </Container>)

    }
  }
}

export default App;
