import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeasts from './SelectedBeasts';
class HornedBeast extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfVotes: 0,
      show: false,
    };
  }
  updateVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };
  handelShow = () => {
    this.setState({ show: true })
  }
  handelClose = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} >
          <Card.Img
            variant='top'
            src={this.props.image_url}
            onClick={this.handelShow}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Click my Image to Vote For me !</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.keyword}</Card.Text>
            <Card.Text>
              <Button onClick={this.updateVotes} variant='outline-danger'>❤️<small> {this.state.numberOfVotes}</small></Button>
            </Card.Text>
          </Card.Body>
      
        </Card>

        <SelectedBeasts
          title={this.props.title}
          description={this.props.description}
          image_url={this.props.image_url}
          show={this.state.show}
          onClose={this.handelClose}
        />
      </>
    );
  }
}

export default HornedBeast;
