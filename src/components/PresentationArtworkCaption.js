import React, { Component } from 'react'
import { Manager, Reference, Popper } from 'react-popper';


export default class PresentationArtworkCaption extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameHovered: false
        }
    }

    renderBio = () => {
        const shortenedBio = this.props.artwork.artist.bio.split(" ").slice(0, 100).join(" ")
        return shortenedBio !== this.props.artwork.artist.bio ? shortenedBio + " [...]" : shortenedBio
    }

    render() {
        return (
            <div>
                {this.props.artwork.artist.bio ? (
                                <Manager>
                                <Reference>
                                {({ ref }) => (
                                    <div ref={ref} onMouseEnter={() => this.setState({nameHovered: true})} onMouseLeave={() => this.setState({nameHovered: false})}>
                                        <h5>{this.props.artwork.title} {this.props.artwork.date > 0 ? `(${this.props.artwork.date})` : null} </h5>
                                        <p>{this.props.artwork.artist.name}{this.props.artwork.artist.nationality ? ` (${this.props.artwork.artist.nationality})` : null}</p>
                                        <p>{this.props.artwork.collection ? this.props.artwork.collection : null} </p>
                                    </div> 
                                )}
                                </Reference>
                                    {this.state.nameHovered ? (
                                        <Popper placement="bottom" >
                                        {({ ref, style, placement, arrowProps }) => (
                                            <div ref={ref} style={{...style, zIndex: 1}} data-placement={placement}>
                                            <div className="bio-popper">
                                                <p>{this.renderBio()}</p>
                                            </div>
                                            <div ref={arrowProps.ref} style={arrowProps.style} />
                                            </div>
                                        )}
                                        </Popper>
                                    ) : null }
                                </Manager>
                ) : (
                    <div>
                        <h5>{this.props.artwork.title} {this.props.artwork.date > 0 ? `(${this.props.artwork.date})` : null} </h5>
                        <p>{this.props.artwork.artist.name}{this.props.artwork.artist.nationality ? ` (${this.props.artwork.artist.nationality})` : null}</p>
                        <p>{this.props.artwork.collection ? this.props.artwork.collection : null} </p>
                    </div>
                )}
            </div>

        )
    }
}