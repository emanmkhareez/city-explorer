
import React from 'react'
import axios from 'axios'//npm i axios

import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {Form,Button} from 'react-bootstrap/'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      cityData:{},
      cityName:'',
      showMap:false,
      errorMessage:false

    }
  }

//function to get city from API locationIQ
 getloc= async(e)=>{
   e.preventDefault()
    await this.setState({
     cityName:e.target.city.value,
     showMap:true

   })
   console.log(this.state.cityName);

   try{let location=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_Key}&q=${this.state.cityName}&format=json`;

    let  sendReq= await axios.get(location)

   console.log(sendReq.data);
   this.setState({
     cityData:sendReq.data[0]

   })
  }catch{
    this.setState({
      errorMessage:true
    })
    

  }

 }


 
  render(){
    return(
      <>
      <br></br>

       <h1 style={{textAlign:'center'}}>City Explorer</h1>

{/* form to enter city  */}

       <Form onSubmit={this.getloc}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Enter city name" name="city" placeholder="enter city Name" style={{width:'200px'}} />
    <Button variant="primary" type="submit" style={{float:'right',marginRight:'75em',marginTop:'-36px'}} >
    Submit
  </Button>
  </Form.Group>

  
</Form>



<br></br>
<br></br>
<br></br>





{/* 
table to render info to city */}


       <Table striped bordered hover>
  <thead>
    <tr>
      <th>City Name</th>
      <th>latitude</th>
      <th>longitude</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{this.state.cityData.display_name}</td>
      <td>{this.state.cityData.lat}</td>
      <td>{this.state.cityData.lon}</td>
     
    </tr>
    
    
  </tbody>
</Table>
{/* render map to the city */}
{this.state.showMap&&<img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=pk.0070e91c94da8e671b4a2f75afb0072a&center=${this.state.cityData.lat},${this.state.cityData.lon}`} style={{width:'400px',height:'400px'}} />
}
{this.state.errorMessage&&<div style={{color:'red'}}>Error in getting the data</div>}



    
      </>
    )
  }
}
    

  export default  App