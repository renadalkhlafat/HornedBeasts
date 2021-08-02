import React, { Component } from 'react';
import Data from './assets/data.json';
import  {CardDeck}  from 'react-bootstrap';
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
        <div id='wrapper' >
          <CardDeck>
            {Data.map(({ image_url, title, description, keyword, horns }) => (
                <div key={title} >
              <HornedBeast
                image_url={image_url}
                title={title}
                description={description}
                keyword={keyword}
                horns={horns}
              ></HornedBeast>
              </div>
            ))}
          </CardDeck>
        </div>
      </main>
    );
  }
}
export default Main;
