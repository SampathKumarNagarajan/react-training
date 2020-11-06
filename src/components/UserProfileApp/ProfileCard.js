import React from 'react';

const ProfileCard = (props) => {
    return (
        <div class="card profile_card">
            <div class="row no-gutters">
                <div class="col-md-13">
                    <img src={props.user.avatar} class="card-img profile_card_image" alt="..."/>
                </div>
                <div class="col-md-13">
                    <div class="card-body">
                        <p class="card-title">{props.user.first_name + ' ' + props.user.last_name}</p>
                        <p class="card-text">{props.user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;