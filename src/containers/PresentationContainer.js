import React, { Component } from 'react';
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { Grid, Image, Divider, Progress } from 'semantic-ui-react'
import './PresentationContainer.css'
import '../components/PresentationArtworkImage'
import PresentationArtworkImage from '../components/PresentationArtworkImage';
import PresentationArtworkCaption from '../components/PresentationArtworkCaption'


class PresentationContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayedImage: props.userImages.find(userimg => userimg.id === parseInt(props.match.params.imgId))
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    generateMotifBars = () => {
        return this.state.displayedImage.user_image_motifs.map(imgmotif => {
            return (
                <Grid.Row>
                    <p>{imgmotif.motif.name}</p>
                    <Progress percent={imgmotif.percent * 100} size="small" progress color="black" />
                </Grid.Row>
            )
        })
    }

    generateArtworks = () => {
        return this.state.displayedImage.artworks.map (artwork => {
            return (
                    <Grid.Row columns={2} className="artworks-grid">
                        <Grid.Column width={6}>
                            <div className="sub-artwork-caption">
                                <Link to={`/artists/${artwork.artist.id}`}><PresentationArtworkCaption artwork={artwork}/></Link>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <PresentationArtworkImage artwork={artwork} currentUserImage={this.state.displayedImage} />
                        </Grid.Column>
                    </Grid.Row>
            )
        })
    }
    render() {
        return (
            <div className="presentation-container">
            <Divider />
            {this.state.displayedImage ? 
                (
                <Grid stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column className="table" width={6}>
                            <div className="presentation-main-image-container">
                                <Image centered className="presentation-main-image" src={this.state.displayedImage.user_image_url} />
                            </div>
                            <div className="presentation-main-caption">
                                
                                <h3>{this.state.displayedImage.image_title}</h3>
                                <p>Submitted by {this.state.displayedImage.user_name}, {this.state.displayedImage.user_location}</p>

                            </div>
                            <div className="motif-percentage-bars-container" >
                            {this.generateMotifBars()}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10} >
                            <Grid stackable>
                                {this.generateArtworks()}
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            ) : <Spinner message="Loading Image and Matches..." />}
        </div>
        )
    }
}

  export default PresentationContainer