import React from "react";

export default function UserCard (props) {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <img src={props.user.avatar_url} />
            <h2>Username: {props.user.login}</h2>
            <p>Bio: {props.user.bio}</p>
            <p>Location: {props.user.location}</p>
        </div>
    )
}