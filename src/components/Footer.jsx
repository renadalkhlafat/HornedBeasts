import React, {Component } from 'react';

class Footer extends Component {
    state = {
        background: '#B2B1B9',
        color:'#FFD523'
      }
    
    render() { 
        return ( 
            <footer 
            style={{ background: this.state.background,
                color:this.state.color,
                bottom: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent:' center',
                fontSize: 'calc(10px + 2vmin)',
                width: '100%',
              }}
              onClick={()=>{this.setState({background: this.state.color,
                color:this.state.background})}}>&copy; Renad Al-Khlafat @ ASAC</footer>
         );
    }
}
export default Footer;