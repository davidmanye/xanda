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
      <Button onClick={this.validate} size="large">Comenzar</Button>
    </div>;
  }

  validate = () => {
    this.props.history.push('square')
  }
}

export default Caesar;
