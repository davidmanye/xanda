import React from 'react';
import {InputGroup, FormControl, Button, Image, Alert, Row, Col} from 'react-bootstrap';
import square from '../magico.png'

class Square extends React.Component {

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
      <Row className="m-auto">
        <Col><Image src={square} className='square'/></Col>

      </Row>
      <Row className="m-auto">
        <Col>
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
        </Col>
      </Row>

    </div>;
  }

  handleChange = (event) => {
    this.setState({solution: event.target.value})
  }

  validate = () => {
    if (this.state.solution === '13') {
      this.setState({success: true})
      setTimeout(() => this.props.history.push('caesar'), 2000);
    } else {
      this.setState({failed: true})
    }
  }

}


export default Square;
