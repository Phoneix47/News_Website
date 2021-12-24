import React from "react";
const Header = (props) =>{
    const header = {
        background: 'yellow',
        textAlign: 'center',
        color: 'black'
        
      }
    const Heading = {
        textAlign: 'center',
        fontSize: '50px',
        fontStyle: 'italic',
        color: 'Red',
        textDecoration: 'Underline'
      }

      
    return(
        <>
        <header style = {header}>
    <h1 style = {Heading}> Today Head_Lines </h1>
    <input type="text" placeholder="Capital Letters Only" onChange = {props.keywords} />
    </header>
        </>
    )
}
export default  Header;