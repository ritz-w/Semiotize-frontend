import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react'
import { changePage, setUserImage } from '../actions/userImageActions'
import './GalleryContainer.css'
import GalleryCard from '../components/GalleryCard'

class GalleryContainer extends Component {

    renderGalleryCards = () => {
        return this.props.userImages.map( userImage => {
            return (
                <GalleryCard userImage={userImage} setUserImage={this.props.setUserImage} changePage={this.props.changePage}/>
            )
        })
    }
    render() {
        return (
            <div>
                <Divider />
                <div className="gallery-container">
                    {this.renderGalleryCards()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userImages: state.userImages.allUserImages,
        currentUserImage: state.userImages.currentImage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (currentPage) => dispatch(changePage(currentPage)),
        setUserImage: (currentUserImage) => dispatch(setUserImage(currentUserImage))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer)