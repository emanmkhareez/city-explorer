
import React from 'react'
import axios from 'axios'//npm i axios
import Movies from './components/Movies'
import Weather from './components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {Form,Button, NavItem} from 'react-bootstrap/'


class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      cityData:{},
      cityName:'',
      showMap:false,
      errorMessage:false,
      weatherData:[],
      movieaData:[]


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
  console.log('after location');
  //class7
  let weatherURl=`${process.env.REACT_APP_SERVER}weather?cityName=${this.state.cityName}
  
  `

  console.log(weatherURl);
  let weatherRequst= await axios.get(weatherURl)
   await this.setState({
    weatherData:weatherRequst.data
  })
  console.log(this.state.weatherData);
  //class 8
// http:localhost:3008/movies?city=Amman
  let moviesURL=`${process.env.REACT_APP_SERVER}movies?city=${this.state.cityName}`
  let moviesRequst= await axios.get(moviesURL)
   await this.setState({
    movieaData:moviesRequst.data
    
  })
  console.log('addd',this.state.movieaData);

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
{this.state.showMap&&<img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_Key}&center=${this.state.cityData.lat},${this.state.cityData.lon}`} style={{width:'400px',height:'400px'}} />
}
{this.state.errorMessage&&<div style={{color:'red'}}>Error in getting the data</div>}



{
    this.state.weatherData.map((item)=>{
      return(
        <Weather
    
        desc={item}
    
        
        />
      )

    })}

 <Movies
    movies={this.state.movieaData}
    />
   
      </>
    )
  }
}
    

  export default  App