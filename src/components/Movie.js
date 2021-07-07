import React from  'react'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'

class Movie extends React.Component{
    render(){
        return(
            <>
             <div key={this.props.idx} style={{display:'inline-block'}}> 

  {  this.props.dataMovie.map(items=>{
return(
        
    <Card style={{ width: '18rem' ,display:'inline-block' }}>
  <Card.Img style={{display:'inline-block',width:'200px',height:"200px"}} variant="top" src={items.image_url} />
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
</Card>

)

        })
    }
    </div>
            
            
            </>
        )
    }
}
export default Movie ;