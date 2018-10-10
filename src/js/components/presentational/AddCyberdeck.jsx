import React from "react";

const AddCyberdeck = (props) => (
    <form className = {props.className} onSubmit={(event)=>{
        event.preventDefault()
        props.addAction({
            model:document.getElementById('model').value,
            attack:document.getElementById('attack').value,
            sleaze:document.getElementById('sleaze').value,
            rating:document.getElementById('rating').value,
            processing:document.getElementById('processing').value,
            firewall:document.getElementById('firewall').value,
            programs:document.getElementById('programs').value

        })
    }}>
    <b>Model:</b><input id='model'></input>
    <b>Attack:</b><input id='attack'></input>
    <b>Sleaze:</b><input id='sleaze'></input>
    <b>Device Rating:</b><input id='rating'></input>
    <b>Data Processing:</b><input id='processing'></input>
    <b>Firewall:</b><input id='firewall'></input>
    <b>Programs:</b><input id='programs'></input>


    <input type="submit"></input>
    </form>

);

export default AddCyberdeck;