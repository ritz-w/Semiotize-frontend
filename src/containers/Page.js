import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from './PageHeader';
import GalleryContainer from './GalleryContainer';
import FrontFeaturedContainer from './FrontFeaturedContainer';
import PresentationContainer from './PresentationContainer';
import About from '../components/About'
import { changePage, setUserImage, fetchUserImages } from '../actions/userImageActions'
import './Page.css'

class Page extends Component {


    renderPage = () => {
        return this.props.currentPage === "Front" ? <FrontFeaturedContainer /> : this.props.currentPage === "Gallery"  ? <GalleryContainer /> : this.props.currentPage === "About" ? <About /> : <PresentationContainer />
    }

    render(){
        return (
            <div className="page-container">
                <PageHeader changePage={this.props.changePage} setUserImage={this.props.setUserImage} fetchUserImages={this.props.fetchUserImages} />
                {this.renderPage()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.userImages.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserImages: () => dispatch(fetchUserImages()),
        changePage: (currentPage) => dispatch(changePage(currentPage)),
        setUserImage: (currentUserImage) => dispatch(setUserImage(currentUserImage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)