import React, { Component } from 'react';
import Data from './assets/data.json';
import { Col, Container, Row, Navbar, Form, FormControl } from 'react-bootstrap';
import HornedBeast from './HornedBeasts';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      numberOfVotes: 0,
      data: [],
    };
  }

  increaseNoOfVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };

  componentDidMount = () => {
    this.start('all');
  };
  filtering = (text) => {
    if (text) {
      this.start(text.toLowerCase().trim())
    } else {
      this.setState({ data: Data });
    }
    this.render();
  }

  start = (input) => {
    if (input === "all") {
      this.setState({ data: Data })
    } else {
      let filteredData = Data.filter((el) => (el.keyword).startsWith(input))
      console.log(filteredData);
      if (filteredData.length > 0) {
        this.setState({
          data: filteredData
        })
      }
    }
  }

 
  render() {
    return (
      <main>
        <Navbar>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='mr-2'
              aria-label='Search'
              autoComplete='on'
              onChange={(e) => { this.filtering(e.target.value) }}
            />
          </Form>
        </Navbar>
        <Container fluid>
          <Row>
            {this.state.data.map(({ image_url, title, description, keyword, horns }) => (
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
