import React from 'react';
import axios from 'axios';//npm i axios 

import 'bootstrap/dist/css/bootstrap.min.css';//npm i bootstrap
import Image from 'react-bootstrap/Image';
import Show from './Show'
let weatherMap=[]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      weatherInfo:[]
      
    }
  }
  
      
    

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     Query: '',
  //     locationData:'',
  //     show:false,
  //     error:false,
  //   }
  // }
 
// changeLoc = (event) =>{
 

//   this.setState({
   
//     Query:event.target.value
//   });
  
// }



  getLoc = async () => {
    // event.preventDefault();
    
let serverRout=process.env.REACT_APP_SERVER
let locUrl=`${serverRout}/weather?cityName=Seattle&lon=-122.33207&lat=47.60621`;

let req = await axios.get(locUrl);

this.setState({
  weatherInfo:req.data
})

    
   console.log(req.data);
 console.log(this.state.weatherInfo);

  }
  
    // let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.0070e91c94da8e671b4a2f75afb0072a&q=${this.state.Query}&format=json`

//     try {

//     let req = await axios.get(locUrl);
    
//    console.log(req[0]);
   
// this.setState({
//   locationData:req.data[0],
//   show:true
// });
// console.log(this.state.locationData);


//     }
//     catch{
//       this.setState({
//         show:false,
//         error:true
//       })
//     }

  


  render() {


    
    return (

      <>
      <button onClick={this.getLoc}>weather</button>
        



{this.state.weatherInfo.map((item,idx)=>{
    return(
        <Show
        desc={item.description}
                    date={item.date}
                  
                    />
    )
})
    }







     
     
       

        {/* <form onSubmit={this.getLoc}>
          <label>enter city name</label>

          <input type="text" onChange={this.changeLoc} />

          <input type="submit" value="GetLocation" />
          <p>{this.state.locationData.display_name}</p>
        </form>
        {this.state.show &&


<Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.0070e91c94da8e671b4a2f75afb0072a&center=${this.state.locationData.lat},${this.state.locationData.lon}`}  fluid />

       
        }

{this.state.error &&
  
        <p>error in getting thr data</p>
      }  */}


      </>
    )
  }
}
export default App;
