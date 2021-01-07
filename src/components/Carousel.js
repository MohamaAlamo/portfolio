import React from 'react';

import Card from '../components/Card';

import pic1 from '../assets/images/pic1.png';
import mohammed from '../assets/images/mohammed.png';
import pic2 from '../assets/images/pic2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Resume',
                    subTitle: 'Here is my Resume ',
                    imgSrc: pic1,
                    link: 'https://drive.google.com/file/d/12icQ5IfnrkMnri7zwkUQO3ohDJN8IRky/view?usp=sharing',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mohammed Alamo',
                    subTitle: 'About Me',
                    imgSrc: mohammed,
                    link: '/about',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Linkedin Profile',
                    subTitle: 'A social network specifically designed for career',
                    imgSrc: pic2,
                    link: 'https://www.linkedin.com/in/mohamad-alamo-30a23016a',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;