import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

export default class CollectionArtistCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLoading: true
        }
    }
    render() {
        return (
            <Link to={`/artists/${this.props.artist.id}`}>
                <div className="collection-artist-card">
                    {this.state.imageLoading ? <div className="image-placeholder" /> : null}
                    <img src={this.props.artist.artworks[0].image_url} onLoad={() => this.setState({imageLoading: false})} alt={this.props.artist.name} />
                    <h2>{this.props.artist.name}</h2>
                </div>
            </Link>
        )
    }
}

