import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom';
import {setShoesData} from '../Store/Actions/DataActions';
import { setOrder } from '../Store/Actions/OrderActions';
import { addToCart,removeCart,removeItemCart} from '../Store/Actions/CartActions';
import { setCounter } from '../Store/Actions/CounterActions';
import { connect } from 'react-redux';

const RootDiv = styled.div` 
min-height:89.6vh;

@media only screen and (min-width: 1400px) {
    min-height:95vh;
  }
`;


const Container = styled.div` 
font-family: 'Poppins', sans-serif;
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5% 10%;

img{
    width:100px;
}

@media only screen and (max-width: 768px) {
    padding:5% 2%;
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

tbody tr td:last-child{
    border:none;
    text-align:center;
}
tbody tr td:last-child img{
    width:32px;
    cursor:pointer;
}

`;

const BillingContainer = styled.div`
padding: 5% 10%;

h2{
    text-align:center;
    margin-bottom:40px;
}
input{
    width:100%;
    height:40px;
    margin-bottom:15px;
    padding:5px;
}

.button-group{
    text-align:center;
}

p{
    color:red;
}
`;

const Heading=styled.h1`
text-align:center;
`;

const ConfirmButton=styled.button`
background-color:#00a1f1;
border: none;
padding: 12px;
color: white;
cursor:pointer;
`;



function UserCheckout(props) {

    const [data, setData] = useState([]);
    const [total,setTotal]=useState(0);

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [postalCode,setPostalCode]=useState("");
    const [city,setCity]=useState("");
    const [note,setNote]=useState("");
    const [deliveryData,setDeliveryData]=useState(true);

    const history=useHistory();

    useEffect(() => {

        console.log(props.cart);

        const products = props.cart;

        console.log(products);
        setData(products);
    
        console.log(products.length);

        console.log(data);

        if(products.length>0){
            console.log('total if');
            var total=0;
        const totals=products.map((item)=>{
        total=total+parseInt(item.price);
        return total;
        });
        console.log(totals);
        console.log(totals[totals.length-1]);
        setTotal(totals[totals.length-1]);
        }
        
    }, [total,props.cart])

    

    

    function confirmTheOrder(){

        if(firstName!="" && lastName!="" && email!="" && address!="" && postalCode!="" && city!=""){
            setDeliveryData(true);

            props.removeCartItems();

        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var currentDateTime=date+' '+time;


            const billingInformation={
                firstName:firstName,
                lastName:lastName,
                email:email,
                address:address,
                postalCode:postalCode,
                city:city,
                note:note
            }
            const orderData={
                items:data,
                totalPrice:total,
                dateAndTime:currentDateTime,
                billingInformation:billingInformation
            };
    
            props.setNewCounter(0);
    
            props.addOrder(orderData);
    
            history.push("/order-history");
            alert('The order has been confirmed');
        }
        else{
            setDeliveryData(false);
        }

       
    }


    function removeItem(id){
        console.log(id);

        props.removeItemcart(id);

       props.setNewCounter(props.counter - 1);
    }
    

    return (
        <RootDiv>
            <Header />
            <Heading>User Checkout</Heading>

            {
                    data.length>0 ?
                    <>
                     <Container>
                
                <ProductsTable>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Size</td>
                            <td>Price</td>
                        </tr>
                    </thead>

                    <tbody>

                        {
                           
                            data.map((item) =>
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.size}</td>
                                    <td>{item.price} RSD</td>
                                    <td><img src='images/remove.png' onClick={()=>removeItem(item.id)}/></td>
                                </tr>

                            )
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3"> Total </td>
                            <td>{total} RSD</td>
                        </tr>
                    </tfoot>

                </ProductsTable>
                </Container>
                
                <BillingContainer>
                    <h2>Delivery details</h2>

                   

                    <input type="text" placeholder="First name *" onChange={(e)=>setFirstName(e.target.value)}/>
                   
                    <input type="text" placeholder="Last name *"  onChange={(e)=>setLastName(e.target.value)}/>
                   
                    <input type="text" placeholder="Email *" onChange={(e)=>setEmail(e.target.value)}/>
                 
                    <input type="text" placeholder="Address *" onChange={(e)=>setAddress(e.target.value)}/>
                   
                    <input type="text" placeholder="Postal code *" onChange={(e)=>setPostalCode(e.target.value)}/>
                   
                    <input type="text" placeholder="City *" onChange={(e)=>setCity(e.target.value)}/>
                   
                    <input type="text" placeholder="Note" onChange={(e)=>setNote(e.target.value)}/>

                    {
                        deliveryData ?  null : <p>Fields with star are required.</p>
                    }
                   
                    <div className="button-group">
                    <ConfirmButton  onClick={confirmTheOrder}>Confirm the order</ConfirmButton>
                    </div>
                    
                </BillingContainer>
                    </> :
                    <Container>
                        <h3>No items in cart</h3>
                    </Container>
                    

            }

           
            
        </RootDiv>
    )
}


const mapStateToProps = (state) => ({
    allShoes: state.allShoes,
    cart:state.cart,
    order:state.order,
    counter:state.counter
})

const mapDispatchToProps = dispatch => {
    return {
        addShoe: (shoe) => { dispatch(setShoesData(shoe)) },
        addtoCart:(item)=>{dispatch(addToCart(item))},
        removeCartItems:(item)=>{dispatch(removeCart(item))},
        removeItemcart:(id)=>{dispatch(removeItemCart(id))},
        addOrder:(item)=>{dispatch(setOrder(item))},
        setNewCounter:(counter)=>{dispatch(setCounter(counter))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCheckout);