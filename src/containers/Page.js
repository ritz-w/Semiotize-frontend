import React, { Component } from 'react';
import PageHeader from './PageHeader';
import GalleryContainer from './GalleryContainer';
import FrontFeaturedContainer from './FrontFeaturedContainer';
import PresentationContainer from './PresentationContainer';
import About from '../components/About'
import './Page.css'

export default class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "Front"
        }
    }

    changePage = (pageName) => {
        this.setState({currentPage: pageName})
    }

    renderPage = () => {
        return this.state.currentPage === "Front" ? <FrontFeaturedContainer /> : this.state.currentPage === "Gallery"  ? <GalleryContainer /> : this.state.currentPage === "About" ? <About /> : <PresentationContainer />
    }

    render(){
        return (
            <div className="page-container">
                <PageHeader changePage={this.changePage} />
                {this.renderPage()}
            </div>
        )
    }
}