import React from 'react';
import {InputGroup, FormControl, Button, Alert, Row, Col, Jumbotron} from 'react-bootstrap';

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
          <Jumbotron fluid>
            <p className="sec">a 	&#x2192; n</p>
            <p className="prim">yrvin</p>
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
              <FormControl onChange={this.handleChange} value={this.state.solution} placeholder="Solucion"/>
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
    if (this.state.solution === 'leiva') {
      this.setState({success: true})
      this.props.history.push('dateCountdown')
    } else {
      this.setState({failed: true})
    }
  }
}

export default Caesar;
