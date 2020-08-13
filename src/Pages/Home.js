import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox' ;
import Carousel from 'react-bootstrap/Carousel';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
           <CarouselBox />
           <Container>
               <h2 className="text-center m-4">Our Team</h2>
               <CardDeck className="m-4">
                   <Card bg="info" border="success" text="light">
                       <Card.Img 
                       variant="top" 
                       src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                       />
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>Some team developers which are working...</Card.Text>
                           <Button variant="primary">About team</Button>
                       </Card.Body>
                   </Card>

                   <Card>
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>Some team developers which are working...</Card.Text>
                           <Button variant="primary">About team</Button>
                       </Card.Body>
                       <Card.Img 
                       variant="bottom" 
                       src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                       />
                   </Card>

                   <Card bg="info" border="success" text="light">
                       <Card.Img 
                       variant="top" 
                       src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                       />
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>Some team developers which are working...</Card.Text>
                           <Button variant="primary">About team</Button>
                       </Card.Body>
                   </Card>
                   
               </CardDeck>
           </Container>
           </>
        )
    }
}
