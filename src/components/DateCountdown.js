import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'react-circular-progressbar/dist/styles.css';
import moment from "moment";

class DateCountdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      final: new moment('2020-09-13T18:00:00'),
      date: new moment()
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
    this.setState({
      date: new moment()
    });
  }

  render() {
    const duration = moment.duration(this.state.final.diff(this.state.date))
    const day = duration.days();
    const hour = duration.hours();
    const minute = duration.minutes();
    const seconds = duration.seconds();
    return <Container className="center">
      <Row xs={4} md={8} lg={16}>
        <Col>
          <p className="timeHead">Dias</p>
          <CircularProgressbar value={day} maxValue={30} text={`${day}`}/>
        </Col>
        <Col>
          <p className="timeHead">Horas</p>
          <CircularProgressbar value={hour} maxValue={24} text={`${hour}`}/>
        </Col>
        <Col>
          <p className="timeHead">Minutos</p>
          <CircularProgressbar value={minute} maxValue={60} text={`${minute}`}/>
        </Col>
        <Col>
          <p className="timeHead">Segundos</p>
          <CircularProgressbar value={seconds} maxValue={60} text={`${seconds}`}/>
        </Col>
      </Row>
    </Container>
  }
}

export default DateCountdown;
