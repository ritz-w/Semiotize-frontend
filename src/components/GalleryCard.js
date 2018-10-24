import React from 'react';
import { Link } from 'react-router-dom'
import './GalleryCard.css'

const GalleryCard = (props) => {

    return (
        <div className="gallery-card-container">
            <Link to={`/gallery/${props.userImage.id}`} key={`gallery-card-link-${props.userImage.id}`}>
            <div className="gallery-card-image-container">
                <img src={props.userImage.user_image_url} alt={props.userImage.image_title} />
            </div>
            </Link>
            <div className="gallery-card-caption">
                <h5>{props.userImage.image_title}</h5>
                <p>Submitted by {props.userImage.user_name} ({props.userImage.user_location}, {props.userImage.created_at.slice(5, 10) + "-" + props.userImage.created_at.slice(0, 4)})</p>
            </div>
            <div className="gallery-card-tags">
                <p><b>Tags: </b>{props.userImage.user_image_motifs.map((uimotif, index) => <span onClick={() => props.filterByTag(uimotif.motif.name)}><span className="tag-link">{uimotif.motif.name}</span>{index + 1 === props.userImage.user_image_motifs.length ? "" : ", "}</span>)} </p>
            </div>
        </div>
    )
}

export default GalleryCard;
