import React from 'react';
import {InputGroup, FormControl, Button, Alert, Row, Col, Jumbotron} from 'react-bootstrap';
import song1 from '../el-senor-don-gato.mp3'
import song2 from '../la-pegatina-gat-rumberu-con-letra.mp3'
import song3 from '../SKA-P-El Gato Lopez..mp3'

class Caesar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      solution: '',
      failed: false,
      success: false
    }
  }

  render() {
    return <div className="center">

      <Col>
        <Row>
          <audio controls autoPlay>
            <source src={song1} type="audio/mpeg"/>
          </audio>
        </Row>
        <Row>
          <audio controls autoPlay>
            <source src={song2} type="audio/mpeg"/>
          </audio>
        </Row>
        <Row>
          <audio controls autoPlay>
            <source src={song3} type="audio/mpeg"/>
          </audio>
        </Row>
        <Row>
          <Jumbotron fluid>
            <p className="prim">La solución esta en una de las canciones</p>
          </Jumbotron>
        </Row>
        <Row>
          <Alert variant='danger' show={this.state.failed} dismissible={true}
                 onClose={() => this.setState({failed: false})}>
            Prueba otra vez
          </Alert>
          <Alert variant='success' show={this.state.success}>
            Correcto!
          </Alert>
          <InputGroup className="mb-3">
            <FormControl onKeyPress={(e) => {if (e.key === 'Enter') { this.validate()}}}  onChange={this.handleChange} value={this.state.solution} placeholder="Solución"/>
            <InputGroup.Append>
              <Button onClick={this.validate}>Validar</Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
      </Col>
    </div>;
  }

  handleChange = (event) => {
    this.setState({solution: event.target.value})
  }

  validate = () => {
    if (this.state.solution.toLowerCase() === 'lopes') {
      this.setState({success: true, failed: false})
      setTimeout(() => this.props.history.push('dateCountdown'), 1000);
    } else {
      this.setState({failed: true})
    }
  }
}

export default Caesar;
