import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import {setShoesData} from '../Store/Actions/DataActions';
import { setOrder } from '../Store/Actions/OrderActions';
import { addToCart } from '../Store/Actions/CartActions';
import { connect } from 'react-redux';

const RootDiv = styled.div` 
min-height:89.6vh;

@media only screen and (min-width: 1400px) {
    min-height:95vh;
  }
`;

const Container = styled.div` 
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5% 10%;

img{
    width:100px;
}

@media only screen and (max-width: 768px) {
    overflow:scroll;
}
`;

const ProductsTable = styled.table`
width:100%;
border-collapse: collapse;

td{
border: 1px solid #ddd;
  padding: 8px;
}

thead td, tfoot td:first-child{
    background-color:#00a1f1;
    color:white;
}

@media only screen and (max-width: 768px) {
    td{
        min-width:150px;
    }

    td:first-child{
        min-width:80px;
    }
  }
`;

const Heading=styled.h1`
text-align:center;
`;

function OrderHistory(props){

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        console.log(props.order);
       // const orders = JSON.parse(localStorage.getItem('order-history'));
        setOrders(props.order);
    }, [])


    return(
        <RootDiv>
        <Header />
        <Heading>Order history</Heading>
        <Container>
            

            {
                orders.length>0 ?
                <ProductsTable>
                <thead>
                <tr>
                    <td>Order id</td>
                    <td>Date and time</td>
                    <td>Items</td>
                    <td>Delivery details</td>
                    <td>Total price</td>
                    
                </tr>
            </thead>
        <tbody>
        {           
                   
                    orders.map((order,index) =>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{order.dateAndTime}</td>
                            <td>{
                                order.items.map((product)=>
                                    <p>{product.name} <br></br> Size : {product.size} <br></br> <span>Price : {product.price} RSD</span></p>
                                )
                                
                                }</td>
                            <td>
                                <p>{ order.billingInformation.firstName}</p>
                                <p>{ order.billingInformation.lastName}</p>
                                <p>{ order.billingInformation.email}</p>
                                <p>{ order.billingInformation.postalCode}</p>
                                <p>{ order.billingInformation.city}</p>
                                <p>{ order.billingInformation.address}</p>
                                <p>{ order.billingInformation.note}</p>
                                
                            </td>
                            <td>{order.totalPrice} RSD</td>
                        </tr>

                    ) 
                }
        </tbody>  </ProductsTable> :
            <h3>No orders</h3>
            }
           
                
           
        </Container>       
 </RootDiv>
    )
}


const mapStateToProps = (state) => ({
    allShoes: state.allShoes,
    cart:state.cart,
    order:state.order,
   
})

const mapDispatchToProps = dispatch => {
    return {
        addShoe: (shoe) => { dispatch(setShoesData(shoe)) },
        addtoCart:(item)=>{dispatch(addToCart(item))},
        addOrder:(item)=>{dispatch(setOrder(item))},
        

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);