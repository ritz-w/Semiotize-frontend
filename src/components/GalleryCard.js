import React from 'react';
import './GalleryCard.css'

const GalleryCard = (props) => {

    const handleClick = () => {
        props.setUserImage(props.userImage)
        props.changePage("Presentation")
    }
    return (
        <div className="gallery-card-container" onClick={handleClick}>
            <div className="gallery-card-image-container">
                <img src={props.userImage.user_image_url} alt={props.userImage.image_title} />
            </div>
            <div className="gallery-card-caption">
                <h5>{props.userImage.image_title}</h5>
                <p>Submitted by {props.userImage.user_name} ({props.userImage.user_location}, {props.userImage.created_at.slice(5, 10) + "-" + props.userImage.created_at.slice(0, 4)})</p>
            </div>
            <div className="gallery-card-tags">
                <p><b>Tags: </b>{props.userImage.user_image_motifs.map (uimotif => uimotif.motif.name).join(", ")} </p>
            </div>
        </div>
    )
}

export default GalleryCard;
