import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryContainer from './GalleryContainer';
import FrontFeaturedContainer from './FrontFeaturedContainer';
import CollectionsContainer from './CollectionsContainer'
import ArtistPage from './ArtistPage'
import PresentationContainer from './PresentationContainer';
import PageHeader from './PageHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About'
import './Page.css'

class Page extends Component {

    render(){
        return (
            
            <div className="page-container">
                <BrowserRouter>
                    <div>
                    <PageHeader fetchUserImages={this.props.fetchUserImages} />
                        <Switch>
                        <Route exact path="/gallery" component={() => <GalleryContainer userImages={this.props.userImages} />}/>
                        <Route exact path={`/gallery/:imgId`} component={(routerProps) => <PresentationContainer userImages={this.props.userImages} {...routerProps}/>}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/collections" component={CollectionsContainer}/>
                        <Route exact path="/artists/:artistId" component={(routerProps) => <ArtistPage {...routerProps} />}/>
                        <Route exact path="/" component={FrontFeaturedContainer}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userImages: state.userImages.allUserImages,
        firstThree: state.userImages.threeUserImages
    }
}


export default connect(mapStateToProps)(Page)