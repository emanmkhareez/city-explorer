import React from  'react'


class WeatherDay extends React.Component{
    render(){
        return(
            <>

            {this.props.data.map((item)=>{
             return(
                 <ul>
                     <li>
                         {item.date}
                     </li>
                     <li>
                         {item.description}
                     </li>
                 </ul>
             )   
            })}
            
            </>
        )
    }
}
export default WeatherDay ;