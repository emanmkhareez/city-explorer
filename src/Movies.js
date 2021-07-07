import React  from 'react'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'

class Movies extends React.Component{


  
    
    render(){


        
        return(
            <>
            <div>movies</div>
              {
        this.props.movies.map(items=>{
return(
         
    <Card style={{ width: '18rem' ,display:'inline-block' }}>
  <Card.Img variant="top" src={items.image_url} />
  <Card.Body>
    <Card.Title>{items.title}</Card.Title>
    <Card.Text>
      <p>{items.overview}</p><br></br>
      <p>{items.average_votes}</p><br></br>
      <p>{items.total_votes}</p><br></br>
      <p>{items.total_votes}</p><br></br>
      <p>{items.popularity}</p><br></br>
      <p>{items.released_on}</p><br></br>

      
    </Card.Text>
    
  </Card.Body>
</Card>)
        })
    }
      
            </>
        )
    }
}
export default Movies