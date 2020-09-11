import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Alert, Button, FormControl, InputGroup, Jumbotron} from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import countDownSound from '../countdown_sound_cutted.mp3'

const questions = [
  {
    question: "¿Cuántos animales metió Moisés en el arca?",
    answers: [
      "0",
      "ninguno",
      "no fue moises",
      "fue noe",
      "noe"
    ]
  },
  {
    question: "La palabra todo comienza con t y termina con t también, ¿Verdadero o Falso?",
    answers: [
      "verdadero",
      "verdad",
      "si"
    ]
  },
  {
    question: "¿En qué posición te colocas si adelantas al que va segundo?",
    answers: [
      "segundo",
      "2"
    ]
  },
  {
    question: "Hay meses que tienen 30 días y otros 31. ¿Cuántos meses tienen 28?",
    answers: [
      "todos",
      "12",
      "doce"
    ]
  },
  {
    question: "El padre de Jose tiene cinco hijos: Pata, Peta, Pita, Pota y...",
    answers: [
      "jose"
    ]
  }
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

const READ_SECONDS_MAX = 2;
const SECONDS_MAX = 5;

class QuickQuestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      started: false,
      seconds: SECONDS_MAX,
      readSeconds: READ_SECONDS_MAX,
      remainingQuestions: questions,
      currentQuestionIndex: getRandomIndex(questions.length),
      solution: '',
      failed: false,
      success: false
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.started) {
      if (this.state.readSeconds > 0) {
        this.setState({readSeconds: this.state.readSeconds - 1})
      } else if (this.state.seconds <= 0) {
        this.nextQuestion(this.state.remainingQuestions);
      } else {
        const seconds = this.state.seconds;
        this.setState({seconds: seconds - 1});
      }
    }
  }

  render() {
    if (this.state.started) {
      if (this.state.remainingQuestions.length > 0) {
        return this.renderQuestions();
      } else {
        return this.renderFinishQuestions();
      }
    }
    return this.renderBeginning();
  }



  renderBeginning() {
    return <Container className="center">
      <Jumbotron fluid>
        <p className="prim">Seguid atentos... Para continuar debeis contestar todas las preguntas bien</p>
        <p className="prim">Solo teneis 5 segundos para dar la respuesta correcta</p>
      </Jumbotron>
      <Row>
        <Col className="text-center"> <Button onClick={this.continue}>Continuar</Button></Col>
      </Row>
    </Container>;
  }

  renderFinishQuestions() {
    return <Container className="center">
      <Jumbotron fluid>
        <p className="prim">Bien hecho!</p>
        <p className="prim">Ya queda menos, para llegar a vuestro regalo...</p>
      </Jumbotron>
      <Row>
        <Col className="text-center"> <Button onClick={this.nextPage}>Continuar</Button></Col>
      </Row>
    </Container>;
  }

  renderQuestions() {
    const question = this.getCurrentQuestion();
    const audio = <audio autoPlay>
      <source src={countDownSound} type="audio/mpeg"/>
    </audio>;
    const successQuestions = 5 - this.state.remainingQuestions.length;
    return <Container className="center">
      {this.state.readSeconds === 0 && !this.state.failed && !this.state.success ? audio : null}
      <p className="prim">{successQuestions} / {questions.length}</p>
      <Jumbotron fluid>
        <p className="prim">{question.question}</p>
      </Jumbotron>
      <Row>
        <Alert variant='danger' show={this.state.failed} dismissible={true}
               onClose={() => this.setState({failed: false})}>
          Otra vez será...
        </Alert>
        <Alert variant='success' show={this.state.success}>
          Correcto!
        </Alert>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text variant="danger">{this.state.seconds}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.validate()
            }
          }} onChange={this.handleChange} value={this.state.solution} placeholder="Solución"/>
          <InputGroup.Append>
            <Button onClick={this.validate} disabled={this.state.failed || this.state.success}>Validar</Button>
          </InputGroup.Append>
        </InputGroup>
      </Row>
    </Container>;
  }

  getCurrentQuestion() {
    return this.state.remainingQuestions[this.state.currentQuestionIndex];
  }

  continue = () => {
    this.setState({started: true})
  }

  handleChange = (event) => {
    this.setState({solution: event.target.value})
  }

  nextQuestion = (questions) => {
    this.setState({
      solution: '',
      failed: false,
      success: false,
      seconds: SECONDS_MAX,
      readSeconds: READ_SECONDS_MAX,
      remainingQuestions: questions,
      currentQuestionIndex: (this.state.currentQuestionIndex + 1) % questions.length
    })
  }

  nextPage = () => {
    this.props.history.push('catpone');
  }

  validate = () => {
    const answers = this.getCurrentQuestion().answers;
    console.log("Answers: ", answers);
    console.log("Solution:", this.state.solution)
    if (answers.includes(this.state.solution.toLowerCase())) {
      this.setState({
        success: true,
        failed: false,
        readSeconds: READ_SECONDS_MAX,
        seconds: SECONDS_MAX
      });
      const questions = this.state.remainingQuestions;
      const indexQuestion = this.state.currentQuestionIndex;
      setTimeout(() => {
        const newQuestions = questions.filter((value, index) => index !== indexQuestion);
        console.log("New questions:", newQuestions);
        this.nextQuestion(newQuestions);
      }, 2000);
    } else {
      this.setState({
        failed: true,
        success: false,
        readSeconds: READ_SECONDS_MAX,
        seconds: SECONDS_MAX
      });
      setTimeout(() => {
        this.nextQuestion(this.state.remainingQuestions);
      }, 2000);
    }
  }


}

export default QuickQuestions;
