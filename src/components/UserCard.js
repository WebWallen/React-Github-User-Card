import React from "react";
import Search from "./Search";

export default function UserCard (props) {

    return (
        <div className="user-card">
            <h1>{props.user.name}</h1>
            <img src={props.user.avatar_url} />
            <h2>Username: {props.user.login}</h2>
            <p>Bio: {props.user.bio}</p>
            <p>Location: {props.user.location}</p>
            <div className="followers">
                Followers: 
                {props.followers.map(follower => <div key={follower.id}>{follower.login}</div>)}
            </div>
        </div>
    )
}