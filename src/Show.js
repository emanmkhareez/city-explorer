import React from 'react';
class Show extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.desc}</p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}
export default Show;