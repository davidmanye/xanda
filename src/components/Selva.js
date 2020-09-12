import React from 'react';
import {Col, Row} from 'react-bootstrap';
import YouTube from 'react-youtube';

class Selva extends React.Component {

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
    return <div className="center">
      <Col>
        <Row className="m-auto" fluid>
          <YouTube
            videoId='_sAW6P4T5zE'                  // defaults -> null
            opts={opts}                            // defaults -> {}
            onEnd={this.onEnd}                     // defaults -> noop
          />
        </Row>
      </Col>
    </div>;
  }

  handleChange = (event) => {
    this.setState({solution: event.target.value})
  }

  onEnd = () => {
    // this.setState({videoEnded: true})
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

export default Selva;
