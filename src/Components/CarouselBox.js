import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dogImg from '../assets/dog.jpg';
import heardImg from '../assets/heard.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ dogImg }
                        alt="dog"
                        />
                        <Carousel.Caption>
                            <h3>Dog</h3>
                            <p>Some text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ heardImg }
                        alt="dog"
                        />
                        <Carousel.Caption>
                            <h3>Dog</h3>
                            <p>Some text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={ dogImg }
                        alt="dog"
                        />
                        <Carousel.Caption>
                            <h3>Dog</h3>
                            <p>Some text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        )
    }
}
