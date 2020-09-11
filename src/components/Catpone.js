import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Alert, Button, Card, FormControl, InputGroup, Jumbotron} from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import Alcatpone from '../alcatpone.jpg'

const numbers = {
  "1": "uno",
  "2": "dos",
  "3": "tres",
  "4": "cuatro",
  "5": "cinco",
  "6": "seis",
  "7": "siete",
  "9": "nueve",
  "10": "diez",
  "11": "once",
  "12": "doce",
  "13": "trece",
  "15": "quince",
  "16": "dieciséis",
  "17": "diecisiete",
  "19": "diecinueve",
  "20": "veinte"
}

const numbersList = Object.keys(numbers).map(number => {
  return {
    question: number,
    answer: numbers[number].length
  };
})

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

class Catpone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      started: false,
      currentQuestionIndex: getRandomIndex(numbersList.length),
      solution: '',
      failed: false,
      success: false
    };
  }

  render() {
    const number = this.getCurrentNumber();
    return <Container fluid>
      <Row>
        <Col>
          <Jumbotron fluid>
            <p className="prim">Él es Al Catpone!</p>
            <p className="m-2 text-primary text-center">Para que os deje pasar, le deberéis contestar almenos una vez correctamente.</p>
            <p className="prim">
              Algunos ya lo han intentado y no han vivido para contarlo. ¿Estáis listos? :
            </p>
            <div className="text-center">
              <p className="text-success">Al Catpone dice: 18 &#x2192; respuecta correcta 8</p>
              <p className="text-success">Al Catpone dice: 8 &#x2192; respuecta correcta 4</p>
              <p className="text-success">Al Catpone dice: 14 &#x2192; respuecta correcta 7</p>
              <p className="text-danger">Al Catpone dice: 0 &#x2192; respuecta incorrecta 0</p>
              <p className="text-danger">Al Catpone dice: 6 &#x2192; respuecta incorrecta 3</p>
            </div>
          </Jumbotron>
        </Col>
        <Col>
          <Row>
            <Card className="mx-auto" style={{width: '18rem'}}>
              <Card.Img variant="top" src={Alcatpone} thumbnail/>
              <Card.Body>
                <Card.Text className="text-center">
                  <h1>{number.question}</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <br/>
          <Row className="mx-auto" style={{width: '18rem'}}>
            <Alert variant='danger' show={this.state.failed} dismissible={true}
                   onClose={() => this.setState({failed: false})}>
              Prueba otra vez
            </Alert>
            <Alert variant='success' show={this.state.success}>
              Correcto!
            </Alert>
            <InputGroup className="mb-3">
              <FormControl onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.validate()
                }
              }} onChange={this.handleChange} value={this.state.solution} placeholder="Solución"/>
              <InputGroup.Append>
                <Button onClick={this.validate}>Validar</Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>
        </Col>
      </Row>
    </Container>;
  }

  continue = () => {
    this.setState({started: true})
  }

  handleChange = (event) => {
    this.setState({solution: event.target.value})
  }

  validate = () => {
    const number = this.getCurrentNumber();
    if (this.state.solution.toLowerCase() == number.answer) {
      this.setState({success: true, failed: false})
      setTimeout(() => this.props.history.push('lastkey'), 1000);
    } else {
      this.setState({
        failed: true
      });
      setTimeout(() => this.setState({
        failed: false,
        solution: '',
        currentQuestionIndex: getRandomIndex(numbersList.length)
      }), 1000);
    }
  }

  getCurrentNumber() {
    return numbersList[this.state.currentQuestionIndex];
  }
}

export default Catpone;
