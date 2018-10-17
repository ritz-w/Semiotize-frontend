import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Image, Divider, Progress } from 'semantic-ui-react'
import './PresentationContainer.css'
import '../components/PresentationArtworkImage'
import PresentationArtworkImage from '../components/PresentationArtworkImage';
import PresentationArtworkCaption from '../components/PresentationArtworkCaption'


// style={{background: `url(${this.props.currentImage.user_image_url})`, backgroundSize: 'contain', imageOrientation: 'none'}}

class PresentationContainer extends Component {

    generateMotifBars = () => {
        return this.props.currentImage.user_image_motifs.map(imgmotif => {
            return (
                <Grid.Row>
                    <p>{imgmotif.motif.name}</p>
                    <Progress percent={imgmotif.percent * 100} size="small" progress color="black" />
                </Grid.Row>
            )
        })
    }

    generateArtworks = () => {
        return this.props.currentImage.artworks.map (artwork => {
            return (
                    <Grid.Row columns={2} className="artworks-grid">
                        <Grid.Column width={6}>
                            <div className="artwork-caption">
                                <PresentationArtworkCaption artwork={artwork}/>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <PresentationArtworkImage artwork={artwork} currentUserImage={this.props.currentImage} />
                        </Grid.Column>
                    </Grid.Row>
            )
        })
    }
    render() {
        return (
            <div className="presentation-container">
                <Divider />
                <Grid stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column className="table" width={6}>
                            <div className="presentation-main-image-container">
                                <Image centered className="presentation-main-image" src={this.props.currentImage.user_image_url} />
                            </div>
                            <div className="presentation-main-caption">
                                
                                <h3>{this.props.currentImage.image_title}</h3>
                                <p>Submitted by {this.props.currentImage.user_name}, {this.props.currentImage.user_location}</p>

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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      currentImage: state.userImages.currentImage
    }
  }

  export default connect(mapStateToProps)(PresentationContainer)