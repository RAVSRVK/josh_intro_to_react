import {Card, CardBody, CardHeader, CardText, CardTitle, Button, CardFooter} from 'reactstrap'
const Cards = props =>{
    const {data} = props
    const  {id, category,price, stocked, name,description} = data
    console.log(id);
    return (
        <div className='col-md-6'> 
<Card>
            <CardHeader>
            <h3>{name}</h3>
            {stocked ? "In Stock" : "Out of Stock"}

            </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        {`Category ${category}`}
      </CardTitle>
      <CardText>{description}      </CardText>
      <Button>{'Add to Cart'}</Button>
    </CardBody>
    <CardFooter>
      {`Price ${price}`}
    </CardFooter>
    <br />

  </Card>
        </div>
       
//   <br />

    )
}
export default Cards



