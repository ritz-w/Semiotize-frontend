import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtist } from '../actions/artistsActions'
import { Grid, Divider, Container, Progress } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ArtistPage.css'


class ArtistPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            motifAvgs: [],
            displayedArtist: ""
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchArtist(parseInt(this.props.match.params.artistId))
        .then(() => this.analyseMotifs())
    }

    renderSlides = () => {
        return this.props.displayedArtist.artworks.map(artwork => {
            return (
                <div>
                    <img className="slider-image" src={artwork.image_url} alt={artwork.title}/>
                    <div className="legend">
                    <p>{`"${artwork.title}"`}{artwork.date !== 0 && !!artwork.date ? `, ${artwork.date}` : ""}</p>
                    <p>{artwork.collection}</p>
                    </div>
                </div>
            )
        })
    }

    analyseMotifs = () => {
        const allMotifs = this.props.displayedArtist.artworks.map(artwork => artwork.artwork_motifs)
        let motifCounter = {}
        allMotifs.flat(1).map(motif => motifCounter[motif.motif.name] = [])
        allMotifs.flat(1).map(motif => motifCounter[motif.motif.name].push(motif.percent))
        let motifArrays = Object.entries(motifCounter)
        let motifWithAvgs = motifArrays.map(array => [...array, array[1].reduce((a, b) => a + b, 0) / array[1].length])
        motifWithAvgs.sort(function(a, b){return b[1].length - a[1].length})
        this.setState({motifAvgs: motifWithAvgs})
    }

    renderMotifs = () => {
        return this.state.motifAvgs.map(motifAvg => {
            return (
                <div>                   
                    <p>{motifAvg[0]}</p>
                    <Progress percent={motifAvg[2] * 100} size="small" progress color="black" />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Divider />
                {this.props.displayedArtist ? (
                    <div>
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                <h2>{this.props.displayedArtist.name}</h2>
                                <p>{this.props.displayedArtist.nationality ? `Culture: ${this.props.displayedArtist.nationality}` : null}</p>
                                <br />
                                <p>{this.props.displayedArtist.bio ? this.props.displayedArtist.bio : "No bio yet..."}</p>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Carousel>
                                        {this.renderSlides()}
                                    </Carousel>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Container text>
                            <h2>Motif Analysis</h2>
                            <p>Most commonly used motifs by this artist, in the artworks included in this database, are as follows. Percentage indicates accuracy of the reading: </p>
                            <div className="motif-container">
                                {this.renderMotifs()}
                            </div>
                        </Container>
                    </div>
            ) : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayedArtist: state.artists.currentArtist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)