import React, { Component } from 'react';
import './FeaturedCard.css'
import ExifOrientationImg from 'react-exif-orientation-img'
import { Grid, Image } from 'semantic-ui-react'



export default class FeaturedCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orientation: undefined
        }
    }

    renderArtworks = () => {
        return this.props.userImage.artworks.slice(0, 5).map(artwork => {
            return (
                <Grid.Row divided>
                <Grid.Column>
                    <Image size="small" src={artwork.image_url} alt={artwork.title} />
                </Grid.Column>
                <Grid.Column>
                    <div className="artwork-caption">
                        <h5>{artwork.title}</h5>
                        <p>{artwork.artist.name}{artwork.date ? ", " + artwork.date : null}</p>
                    </div>
                </Grid.Column>
              </Grid.Row>
            )
        })
    }

    render() {
        return (
        <div className="featured-card">
        <div className="featured-image-container">
            <ExifOrientationImg src={this.props.userImage.user_image_url} style={{ transformOrigin: '10% 100% 10px' }} className="featured-image" id={`featured-image-${this.props.userImage.id}`} />
        </div>
            <div className="image-caption">
                <h4>{this.props.userImage.image_title}</h4>
                <p>Submitted by {this.props.userImage.user_name}, {this.props.userImage.user_location}</p>
            </div>
            <Grid celled='internally' columns='two' className="artworks-panel">
                {this.renderArtworks()}
          </Grid>
        </div>
        )
    }
}

