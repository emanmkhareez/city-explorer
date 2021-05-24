import React from 'react';
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      Query: '',
      locationData:'',
      show:false,
      error:false,
    }
  }
 
changeLoc = (event) =>{
 

  this.setState({
   
    Query:event.target.value
  });
  
}
  getLoc = async (event) => {
    event.preventDefault();
    let locUrl = `https://us1.locationiq.com/v1/reverse.php?key=pk.0070e91c94da8e671b4a2f75afb0072a=${this.state.Query}=LONGITUDE&format=json`;
    
    let req = await axios.get(locUrl);
    console.log(req[0]);
this.setState({
  locationData:locUrl[0],
  show:true
})
console.log(this.state.Query);
  }
  render() {
    return (
      <>
        <h2>city-exploer</h2>

        <form onSubmit={this.getLoc}>
          <label>enter city name</label>

          <input type="text" onChange={this.changeLoc} />

          <input type="submit" value="GetLocation" />
          <p>{this.state.locationData.display_name}</p>
        </form>
        {this.state.show &&
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.0070e91c94da8e671b4a2f75afb0072a&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt=''/>
        }

      </>
    )
  }
}
export default App;
