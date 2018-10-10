import React from "react";

const AddContact= (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            name:document.getElementById('name').value,
            loyalty:document.getElementById('loyalty').value,
            connection:document.getElementById('connection').value,
            favor:document.getElementById('favor').value
        })
    }}>
    <b>Name:</b><input id='name'></input>
    <b>Loyalty:</b><input id='loyalty'></input>
    <b>Connection:</b><input id='connection'></input>
    <b>Favor:</b><input id='favor'></input>
    <input type="submit"></input>
    </form>

);

export default AddContact;