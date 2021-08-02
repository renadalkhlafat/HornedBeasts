import React, {Component } from 'react';

class Header extends Component {
    state = {
        background: '#B2B1B9',
        color:'#FFD523'
      }
    
    render() { 
        return ( 
            <header className="App-header"
            style={{ background: this.state.background,
                color:this.state.color,
              }}
              onClick={()=>{this.setState({background: this.state.color,
                color:this.state.background})}}> <h1>Horned Beasts</h1></header>
         );
    }
}
export default Header;