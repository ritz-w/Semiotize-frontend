import React, { Component } from 'react';
import { Image, Modal } from 'semantic-ui-react'


export default class PresentationArtworkImage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isHovered: false,
            allMotifs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/motifs')
        .then(res => res.json())
        .then(data => this.setState({allMotifs: data}))
    }
    renderOverlay = () => {
        const userMotifIds = this.props.currentUserImage.user_image_motifs.map(usermotif => usermotif.motif.id)
        const matchingMotifs = this.props.artwork.artwork_motifs.filter(artmotif => userMotifIds.includes(artmotif.motif_id))
        return (
            this.state.isHovered ? 
            <div className="overlay" id="style-8" style={{opacity: 1}}> 
            <h5>Shared Motifs:</h5>
        {matchingMotifs.map(artmotif => <p>{this.state.allMotifs.find(motif => motif.id === artmotif.motif_id).name} ({(artmotif.percent.toFixed(3) * 100)}%)</p>)}
            </div> : null
        )
    }
    render() {
        return(
            <Modal basic trigger={<div onMouseEnter={() => setTimeout(this.setState({isHovered: true}), 1000)} onMouseLeave={() => this.setState({isHovered: false})}>
                <Image src={this.props.artwork.image_url} />
                {this.renderOverlay()}
            </div>
            }>  
            <Image size='huge' centered src={this.props.artwork.image_url} />
            </Modal>
        )
    }
}