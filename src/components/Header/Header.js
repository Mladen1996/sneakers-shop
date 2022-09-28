import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { setCounter } from '../Store/Actions/CounterActions';
import { connect } from 'react-redux';

const Container=styled.div` 
background-color:#00a1f1;
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
    font-family: 'Poppins', sans-serif;

    @media only screen and (max-width: 768px) {
        flex-direction:column;
      }
`;
const Logo=styled.div` 
h1{
    color:white;
    padding-left:10px;
}
a{
    text-decoration:none;
}

.logo-box{
    display:flex;
    align-items:center;
}
`;
const Nav=styled.div` 
display:flex;
align-items:center;
a{
    text-decoration: none;
    padding: 15px;
    color: white;
}
span{
    background-color: black;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    vertical-align: top;
    margin-left: 2px;
}
`;


function Header(props){

    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('product-info'));
        if(products!=null){
            setTotalItems(products.length);
        }
        else{
            setTotalItems(0);
        }

    }, [totalItems])

    return(
        <Container>
        <Logo>
            <NavLink to="/">
            <div className="logo-box">
            <img src='images/shoe.png' alt="shoe-logo"/>
            <h1> Sneakers shop</h1>
            </div>
            
            </NavLink>
        </Logo>
        <Nav>
        <NavLink to="/">Home</NavLink>
        
        <NavLink to="/order-history">Order history</NavLink>

        <NavLink to="/user-checkout">
            <img src="images/shopping-cart.png" alt="cart-icon"/>
            <span>{props.counter}</span>
        </NavLink>
        </Nav>
        
        </Container>

    )
}

const mapStateToProps = (state) => ({
    counter:state.counter
})

const mapDispatchToProps = dispatch => {
    return {
        
        setNewCounter:(counter)=>{dispatch(setCounter(counter))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

