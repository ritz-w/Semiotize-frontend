import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists } from '../actions/artistsActions'
import './CollectionsContainer.css'
import CollectionArtistCard from '../components/CollectionArtistCard'
import Spinner from '../components/Spinner'


class CollectionsContainer extends Component {
    componentDidMount() {
        // this.props.fetchArtists()
    }

    render() {
        return (
            <div>
                {this.props.collections.isLoading || this.props.userImages.isLoading ?  
                <Spinner message="Loading Collections..." /> :
                (
                <div>
                    <h3 className="collection-title">San Francisco Museum of Modern Art</h3>
                    <div className="collection-container" id="style-7">
                        {this.props.collections.sfmoma.map(artist => <CollectionArtistCard key={`sfmoma-${artist.id}`} artist={artist} />)}
                    </div>
                    <h3 className="collection-title">Kiasma, Finnish National Gallery</h3>
                    <div className="collection-container" id="style-7">
                        {this.props.collections.kiasma.map(artist => <CollectionArtistCard key={`kiasma-${artist.id}`} artist={artist} />)}
                    </div>
                    <h3 className="collection-title">Harvard Art Museums</h3>
                    <div className="collection-container" id="style-7">
                        {this.props.collections.harvard.map(artist => <CollectionArtistCard key={`harvard-${artist.id}`} artist={artist} />)}
                    </div>
                    <h3 className="collection-title">RMN-GP (National Network of Museums - Grand Palais)</h3>
                    <div className="collection-container" id="style-7">
                        {this.props.collections.rmngp.map(artist => <CollectionArtistCard key={`rmngp-${artist.id}`} artist={artist} />)}
                    </div>
                    <h3 className="collection-title">Brooklyn Museum</h3>
                    <div className="collection-container" id="style-7">
                        {this.props.collections.brooklyn.map(artist => <CollectionArtistCard artist={artist} />)}
                    </div>
                </div>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.artists,
        userImages: state.userImages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtists: () => dispatch(fetchArtists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer)