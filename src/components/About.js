import React from 'react';
import { Container } from 'semantic-ui-react'

const About = (props) => {
    return (
        <Container>
            <h3>Semiotize is powered by the following generous open sources:</h3>
            <br />
            <h4>Art Collections</h4> 
            <p>National Network of Museums - Grand Palais (La Réunion des musées nationaux - Grand Palais (Rmn-GP))</p>
            <p>San Francisco Museum of Modern Art</p>
            <p>Brooklyn Museum</p>
            <p>Finnish National Gallery</p>
            <p>Harvard Art Museums</p>
            <p>San Francisco Museum of Modern Art</p>
            <br />
            <h4>Feature APIs</h4> 
            <p>Clarifai (Image recognition)</p>
            <p>Cloudinary</p>
            <br />
            <h4>Information</h4> 
            <p>Wikipedia</p>

        </Container>
    )
}

export default About;