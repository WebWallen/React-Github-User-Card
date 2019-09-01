import React from "react";
import "../App.css";

export default function UserCard (props) {

    return (
        <>
        <div className="user-card">
            <h1>{props.user.name}'s Profile</h1>
            <img className="user-image" src={props.user.avatar_url} />
            <div className="user-box">
            <h2>{props.user.login}</h2>
            <p>{props.user.bio}</p>
            <p>{props.user.location}</p>
            </div>
        </div>
        
        <h2>Followers:</h2> 
        <div className="followers">
                {props.followers.map(follower => (
                    <div className="follower-cards"
                        key={follower.id}>
                        <h3>{follower.login}</h3>
                        <img className="follower-card-image" src={follower.avatar_url} />
                    </div>))}
            </div>
       </>
    )
}