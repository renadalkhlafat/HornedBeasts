import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  state = {
    numberOfVotes: 0,
  };
updateVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };

  render() {
    return (
          <Card  style={{ width: '18rem' }} >
            <Card.Img
              variant='top'
              src={this.props.image_url}
              onClick={this.updateVotes}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>Click my Image to Vote For me !</Card.Text>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>{this.props.keyword}</Card.Text>
              <Card.Text>
                <Button onClick={this.updateVotes}>❤️</Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <small> {this.state.numberOfVotes}</small>
            </Card.Footer>
          </Card>
    );
  }
}

export default HornedBeast;
