import React from 'react';
import {Container, Alert, Button, Col, FormControl, Image, InputGroup, Row} from 'react-bootstrap';
import YouTube from 'react-youtube';
import StepsImage from "../1_0_steps.png";

class Crespo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      solution: '',
      failed: false,
      success: false,
      videoEnded: false
    }
  }

  render() {
    let element;
    if (!this.state.videoEnded) {
      const opts = {
        playerVars: {
          autoplay: 1,
          controls: 0,
          end: 115,
          rel: 0,
          showinfo: 0,
          modestbranding: 1
        }
      };
      element = <Container className="align-middle">
        <Row>
          <Col className="embed-responsive embed-responsive-16by9">
            <YouTube
              className="embed-responsive-item"
              videoId='LfSA5voxyI0'                  // defaults -> null
              opts={opts}                        // defaults -> {}
              onEnd={this.onEnd}                      // defaults -> noop
            />
          </Col>

        </Row>
        <Row>
          <Col className="text-center">
            <Button variant="outline-danger" onClick={this.onEnd}>Saltar</Button>
          </Col>
        </Row>
      </Container>;
    } else {
      element = <div className="center">
        <Row className="m-auto">
          <p className="prim">¿Que paso (del 1 al 5) rompe la igualdad?</p>
        </Row>
        <Row className="m-auto">
          <Col><Image src={StepsImage} className='square' fluid/></Col>
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
              <InputGroup.Prepend>
                <Button variant="outline-secondary" onClick={this.showVideo}>Volver</Button>
              </InputGroup.Prepend>
              <FormControl onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.validate()
                }
              }} onChange={this.handleChange} value={this.state.solution} placeholder="Solución"/>
              <InputGroup.Append>
                <Button onClick={this.validate}>Validar</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>

      </div>;
    }

    return element;
  }

  handleChange = (event) => {
    this.setState({solution: event.target.value})
  }

  onEnd = () => {
    this.setState({videoEnded: true})
  }

  showVideo = () => {
    this.setState({videoEnded: false})
  }

  validate = () => {
    if (this.state.solution.toLowerCase() === '4') {
      this.setState({success: true, failed: false})
      setTimeout(() => this.props.history.push('quickquestions'), 1000);
    } else {
      this.setState({failed: true})
    }
  }
}

export default Crespo;
