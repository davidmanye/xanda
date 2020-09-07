import React from 'react';
import {Button} from 'react-bootstrap';

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
    this.props.history.push('/square')
  }
}

export default Caesar;
