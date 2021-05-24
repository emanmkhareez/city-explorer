import React from 'react';
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      Query: ''
    }
  }
 
changeLoc = (e) =>{
  e.preventDefault()

  this.setState({
   
    Query:e.target.value
  });
  console.log(this.state.Query);
}
  getLoc = async () => {

    let locUrl = `https://us1.locationiq.com/v1/reverse.php?key=pk.0070e91c94da8e671b4a2f75afb0072a=${this.state.Query}=LONGITUDE&format=json`;
    let req = await axios.get(locUrl);
    console.log(req);

  }
  render() {
    return (
      <>
        <h2>city-exploer</h2>

        <form onSubmit={this.getLoc}>
          <label>enter city name</label>

          <input type="text" onChange={this.changeLoc} />

          <input type="submit" value="GetLocation" />
        </form>

      </>
    )
  }
}
export default App;
