import React from 'react'

class  Weather extends React.Component{
    render(){
        return(
            <>
          
            <ul>
            <li>{this.props.desc.date}</li>
                <li>{this.props.desc.description}</li>
            </ul>

            </>
        )
    }
}
export default Weather