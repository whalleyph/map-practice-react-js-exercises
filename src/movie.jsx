import React from "react";

export default function Movie(props) {
    return (
        <div className="movie">
            <h2>{props.title}</h2>
            <p>Star: {props.star}</p>
            <p>Genre: {props.genre}</p>
            <blockquote>{props.quote}</blockquote>
        </div>
    );
}
