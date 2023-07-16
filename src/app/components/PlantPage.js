import React from 'react';

export default function PlantPage() {
    return (
        <div className="columns body-columns">
            <div className="column is-half is-offset-one-quarter">
                <div className="card">
                    <div className="header">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png" alt="small placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://cdn.pixabay.com/photo/2023/05/14/02/15/squirrel-7991828_1280.jpg" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="level is-mobile">
                            <div className="level-left">
                                <div className="level-item has-text-centered">
                                    <a href="">
                                        <i className="material-icons">favorite_border</i>
                                    </a>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <a href="">
                                            <i className="material-icons">chat_bubble_outline</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                <strong>32 Likes</strong>
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a>@bulmaio</a>.
                            <a href="#">#css</a>
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2018-01-01">11:09 PM - 1 Jan 2023</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
