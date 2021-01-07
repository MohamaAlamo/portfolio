import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>I have graduated with a bachelor's degree in Software Engineering. I have a strong inclination towards frontend development but my knowledge and expertise are not limited to it.</p>

            <p>I am currently residing in Malaysia and working remotely as QA Tester for National Informatics</p>

            <p>I am constantly learning new things. currently those things include gaining more experience with MongoDB, React, and Node JS</p>

            
            </Content>
        </div>
    );

}

export default AboutPage;




  