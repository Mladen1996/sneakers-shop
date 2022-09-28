import React from 'react';
import styled from 'styled-components';


const Container=styled.div` 
position:relative;

img{
    width:100%;
    height: 600px;
    object-fit: cover;
}

h2{
    position:absolute;
    top:30%;
    left:0%;
    transform:translate(10%,-40%);
    font-size:70px;
    text-transform:uppercase;
    font-family: 'Poppins', sans-serif;
}

@media only screen and (max-width: 768px) {
    h2{
        font-size:54px;
    }
  }
`;




class Banner extends React.Component{
    render(){
        return(
            <Container>
                <img src="images/banner.jpg" alt="banner"/>
                <h2>Best sneakers <br></br>in the city</h2>
            </Container>
        )
    }
}

export default Banner;