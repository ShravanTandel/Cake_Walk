import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {height:24, width:24,[theme.breakpoints.down("xs")]: {
        height:20, width:20,
      }},
}));

const Rating = (props) => {

    const classes = useStyle();
    if(Number(props.rating) === 5.00){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) > 4.00 && Number(props.rating) < 5.00){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarHalfIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) === 4){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) > 3 && Number(props.rating) < 4){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarHalfIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) === 3 || Number(props.rating) > 2.5){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) > 2 && Number(props.rating) < 3){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarHalfIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) === 2){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) > 1 && Number(props.rating) < 2){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarHalfIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) === 1){
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
    if(Number(props.rating) > 0 && Number(props.rating) < 1){
    return (
        <>
            <StarHalfIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
            <StarBorderIcon className={classes.root}/>
        </>
    )
}
else{
    return (
        <>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
            <StarIcon className={classes.root}/>
        </>
    )
}
}

export default Rating
