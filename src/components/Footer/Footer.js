import React from 'react';
import styled from 'styled-components';


const Container=styled.div` 
background-color:black;

p{
    text-align:center;
    color:white;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 20px 0;
}

@media only screen and (max-width: 768px) {
    font-size:14px;
  }
`;




class Footer extends React.Component{
    render(){
        return(
            <Container>
               <p>Copyright © 2022 Sneakers shop Design by Mladen Živojinović</p>
            </Container>
        )
    }
}

export default Footer;