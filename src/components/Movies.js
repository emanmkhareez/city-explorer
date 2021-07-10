import React  from 'react'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import Movie from'./Movie'
class Movies extends React.Component{


  
    
    render(){


        
        return(
            <>

            <Movie

            dataMovie={this.props.movies}
            />
            <div>movies</div>
              
    
      
            </>
        )
    }
}
export default Movies