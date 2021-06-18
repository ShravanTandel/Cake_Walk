import React from 'react'
import {NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});

export default function Products(props) {
    const classes = useStyles();
    
    return (
        <div className="col-md-3 col-10 mx-auto">
    <Card className={classes.root}>
      <CardActionArea>
        <NavLink to={`products/${props.id}`}>
        <CardMedia
          className={classes.media}
          image={props.imageurl}
          title="Contemplative Reptile"
          />
          </NavLink>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <NavLink to={`products/${props.id}`}>
        <Button size="small" color="primary">
          Order Now
        </Button>
          </NavLink>
       <Rating rating={props.rating}/>
      </CardActions>
    </Card>
    </div>
  );
}


// const Products = (props) => {
//     return (
//         <>
//              <div className="col-md-3 col-10 mx-auto">
//           <div className="card">
//   <img src={web} className="card-img-top" alt="..." height="300px"/>
//   <div className="card-body">
//     <h5 className="card-title">{props.name}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
//   </div>
// </div>
//       </div>
//         </>
//     )
// }

//export default Products