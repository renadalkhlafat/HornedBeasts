import React, { Component } from 'react';
import Data from './assets/data.json';
import  {Col,Container,Row}  from 'react-bootstrap';
import HornedBeast from './HornedBeasts';

class Main extends Component {
  state = {
    numberOfVotes: 0,
  };
  increaseNoOfVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };

  render() {
    return (
      <main>
          <Container fluid>
            <Row>
            {Data.map(({ image_url, title, description, keyword, horns }) => (
                <Col key={title} >
              <HornedBeast
                image_url={image_url}
                title={title}
                description={description}
                keyword={keyword}
                horns={horns}
              ></HornedBeast>
              </Col>
            ))}
            </Row>
          </Container>
       
      </main>
    );
  }
}
export default Main;
