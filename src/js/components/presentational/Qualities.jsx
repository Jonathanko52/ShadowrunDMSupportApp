import React from "react";

const Qualities = (props) => (
    <form className = {props.className}>
    <b>Quality:</b><input>{props.Quality}</input>
    <b>Notes:</b><input>{props.notes}</input>
    <b>Type:</b>
    Positive:<input type="radio" name="quality" value="positive"></input>
    Negative:<input type="radio" name="quality" value="negative"></input>


   </form>
);

export default Qualities;