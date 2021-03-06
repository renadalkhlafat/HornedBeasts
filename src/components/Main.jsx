import React, { Component } from 'react';
import Data from './assets/data.json';
import { Col, Container, Row, Navbar, Form, FormControl, Nav,DropdownButton ,Dropdown} from 'react-bootstrap';
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

  filterBasedOnHornNum = (value) => {
    if (value) {
      this.hornsNumFilter(value)
    } else {
      this.setState({ data: Data });
    }
    this.render();
  }

  hornsNumFilter = (input) => {
    if (input === "all") {
      this.setState({ data: Data })
    } else {
      let filteredData = Data.filter((el) => el.horns === +input)
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
      <>
        <Container fluid>
          <Row >
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
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
                    <DropdownButton id="dropdown-basic-button" title="Number of horns" variant='Secondary' onSelect={this.filterBasedOnHornNum}>
                      <Dropdown.Item eventKey='1' href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item eventKey='2' href="#/action-2">2</Dropdown.Item>
                      <Dropdown.Item eventKey='3' href="#/action-3">3</Dropdown.Item>
                      <Dropdown.Item eventKey='100' href="#/action-3">100</Dropdown.Item>
                      <Dropdown.Item eventKey='all' href="#/action-3">All</Dropdown.Item>
                    </DropdownButton>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
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

      </>
    );
  }
}
export default Main;
