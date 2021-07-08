import React from 'react'
import WeatherDay from './WeatherDay'
class  Weather extends React.Component{
    render(){
        return(
            <>
          <WeatherDay
          data={this.props.desc}
          />

            </>
        )
    }
}
export default Weather
