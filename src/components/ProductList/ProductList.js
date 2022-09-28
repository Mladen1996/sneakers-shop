import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import {setShoesData} from '../Store/Actions/DataActions';
import { addToCart } from '../Store/Actions/CartActions';
import { setCounter } from '../Store/Actions/CounterActions';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';

const RootDiv=styled.div` 
padding-bottom:100px;
background-color:#f4f8fd;
.shop-title{
    text-align:center;
    font-size:35px;
    margin:40px 0;
}
`;

const Container=styled.div` 
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 6%;
    flex-wrap:wrap;

img{
    width:90%;
    height:200px;
    object-fit:cover;
}



`;

const ProductCard=styled.div` 
width:29%;
background-color:white;
margin-bottom:25px;
padding: 20px 15px;
font-family: 'Poppins', sans-serif;
text-align:center;

h3{
    margin-top:0px;
}

@media only screen and (max-width: 768px) {
    width:100%;
  }
`;

const CartButton=styled.button` 
background-color:#00a1f1;
border: none;
padding: 12px;
color: white;
cursor:pointer;
font-family: 'Poppins', sans-serif;
border:1px solid white;
border-radius:10px;

&:hover{
    color:#00a1f1;
    background-color:white;
    border:1px solid #00a1f1;
}
`;


class ProductList extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            allShoes:[],
            size:42,
            id:0
        }

    }
    componentDidMount(){
        console.log(this.props.allShoes);
        if(this.props.allShoes){
            this.setState({
                allShoes:this.props.allShoes
            })
        }
        
    }

    addToCart=(item)=>{
        console.log(item.name);
        this.setState({
            id:this.state.id+1
        });
        const itemData={
            id:this.state.id,
            name:item.name,
            price:item.price,
            image:item.image,
            size:this.state.size
        };

        this.props.addtoCart(itemData);


        /*if(localStorage.getItem('product-info')){
            const items=JSON.parse(localStorage.getItem('product-info'));
            const itemData1={
                name:item.name,
                price:item.price,
                image_path:item.image_path,
            };
            console.log(items);
            items.push(itemData1);
            localStorage.setItem('product-info',JSON.stringify(items));
        }
        else{
            localStorage.setItem('product-info',JSON.stringify(itemData));
        }*/

        console.log(this.props.counter);
        this.props.setNewCounter(this.props.counter + 1);
        alert(item.name + ' added to cart');
    }

    changeSize=(e)=>{
        console.log(e.target.value);
        this.setState({
            size:e.target.value
        })
    }

    render(){
        console.log(this.state.allShoes);
        return(
            <RootDiv>
            <Header />
            <Banner />
            <h2 className='shop-title'>Shop</h2>
            <Container>
           
            {
               this.state.allShoes.map((item)=>
               <ProductCard key={item.id}>
                   <img src={item.image} alt={item.name} />
                   <h3>{item.name}</h3>
                   <p>{item.price} RSD</p>
                   <p>Size : <input type="number"  min="36"  max="45" defaultValue={"42"} onChange={(e)=>this.changeSize(e)}/></p>
                    <CartButton onClick={()=>this.addToCart(item)}>Add to cart</CartButton>
               </ProductCard>
            
               )
            }
            </Container>
            </RootDiv>
        )
    }
}
/*function ProductList(){
    const [data,setData]=useState([]);
    const [counter,setCounter]=useState(0);

    useEffect(()=>{

        getData();
    },[])

    async function getData(){
        let result=await fetch("http://localhost:8000/api/list");
        result=await result.json();
        console.log(result);
        setData(result);
    }

    function addToCart(item){
        console.log(item.name);
        const itemData=[{
            name:item.name,
            price:item.price,
            image_path:item.image_path,
        }];

        if(localStorage.getItem('product-info')){
            const items=JSON.parse(localStorage.getItem('product-info'));
            const itemData1={
                name:item.name,
                price:item.price,
                image_path:item.image_path,
            };
            console.log(items);
            items.push(itemData1);
            localStorage.setItem('product-info',JSON.stringify(items));
        }
        else{
            localStorage.setItem('product-info',JSON.stringify(itemData));
        }

        setCounter(counter => counter + 1);
        alert(item.name + ' added to cart');
        
    }

    
}*/


const mapStateToProps = (state) => ({
    allShoes: state.allShoes,
    cart:state.cart,
    counter:state.counter
})

const mapDispatchToProps = dispatch => {
    return {
        addShoe: (shoe) => { dispatch(setShoesData(shoe)) },
        addtoCart:(item)=>{dispatch(addToCart(item))},
        setNewCounter:(counter)=>{dispatch(setCounter(counter))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


