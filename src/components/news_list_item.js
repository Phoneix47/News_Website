import React from "react";

const combine = {
    backgroundColor:'grey'
}
const feed ={
    fontSize: '27px',
    
}
const head = {
    textAlign: "center"

}
const NewsItem = ({item}) =>{
    return(
        <div style={combine}>

<h1 style={head}> {item.title} </h1>
<div style={feed}> {item.feed}</div>

    
        </div>

    )
}
export default NewsItem;
