import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Rating = (props) => {
    if(Number(props.rating) === 5.00){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
        </>
    )
}
    if(Number(props.rating) > 4.00 && Number(props.rating) < 5.00){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
        </>
    )
}
    if(Number(props.rating) === 4){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) > 3 && Number(props.rating) < 4){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) === 3 || Number(props.rating) > 2.5){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) > 2 && Number(props.rating) < 3){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) === 2){
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) > 1 && Number(props.rating) < 2){
    return (
        <>
            <StarIcon/>
            <StarHalfIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) === 1){
    return (
        <>
            <StarIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </>
    )
}
    if(Number(props.rating) > 0 && Number(props.rating) < 1){
    return (
        <>
            <StarHalfIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </>
    )
}
else{
    return (
        <>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
        </>
    )
}
}

export default Rating
