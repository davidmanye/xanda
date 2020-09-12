import React from 'react';
import {Alert, Button, Col, FormControl, InputGroup, Jumbotron, Row} from 'react-bootstrap';

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
    if (this.state.solution.toLowerCase() === 'leiva') {
      this.setState({success: true, failed: false})
      setTimeout(() => this.props.history.push('song'), 1000);
    } else {
      this.setState({failed: true})
    }
  }
}

export default Caesar;
