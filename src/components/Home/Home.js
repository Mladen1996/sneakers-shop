import React ,{useState}from 'react';
import ProductList from '../ProductList/ProductList';



function Home(){

    const [template, setTemplate] = useState('');

    function saveData(){
        
       


        var data = {
            "name": 'mladen',
            "desc": 'test'
         }

       /* fetch("http://localhost:8000/api/formSubmit",{
            method:'POST',
            body:JSON.stringify(data),
           
        }).then(function(response){ 
            return response.json();   
           })
           .then(function(data){ 
               setTemplate(data);
           console.log(data)
           });;*/

        alert('Data has been saved.');

        
    }
    
    
        return(
            <>
           {/* <p onClick={saveData}>test</p>*/}
        
            {/* template.path!="" ? <iframe src={'http://localhost:8000'+template.path}></iframe> : null*/}

            
        <ProductList />
        </>
        )
    }




export default Home;