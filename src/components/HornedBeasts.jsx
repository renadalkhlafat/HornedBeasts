import React, { Component } from 'react';

class HornedBeasts extends Component {
    render() {
        return (
                    <section id='beast' key={this.props.title}>
                        <img src={this.props.image_url} alt={this.props.title} ></img>
                        <div className='info'>
                            <h1> Title : {this.props.title}</h1>
                            <p> Description :{this.props.description}</p>
                            <p> Keyword : {this.props.keyword}</p>
                            <p> Horns : {this.props.horns}</p>
                        </div>
                    </section>
                )
            };
    }
export default HornedBeasts;