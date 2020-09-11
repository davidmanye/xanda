import React from 'react';
import {InputGroup, Container, FormControl, Button, Alert, Row, Col, Jumbotron} from 'react-bootstrap';

class LastKey extends React.Component {

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
        <Jumbotron fluid>
          <p className="prim">Ya solo os falta la última clave.</p>
          <p className="prim">¿La habéis encontrado?</p>
        </Jumbotron>
        <Row>
          <Alert variant='danger' show={this.state.failed} dismissible={true}
                 onClose={() => this.setState({failed: false})}>
            Prueba otra vez
          </Alert>
          <Alert variant='success' show={this.state.success}>
            Correcto!
          </Alert>
          <InputGroup className="mb-3">
            <FormControl onKeyPress={(e) => {if (e.key === 'Enter') { this.validate()}}} onChange={this.handleChange} value={this.state.solution} placeholder="Solución"/>
            <InputGroup.Append>
              <Button  onClick={this.validate}>Validar</Button>
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
    if (this.state.solution.toLowerCase() === 'girona') {
      this.setState({success: true, failed: false})
      setTimeout(() => this.props.history.push('selva'), 1000);
    } else {
      this.setState({failed: true})
    }
  }
}

export default LastKey;
