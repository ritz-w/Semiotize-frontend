import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer'
import PageHeader from './containers/GalleryContainer'
import About from './components/About'
import FrontFeaturedContainer from './containers/FrontFeaturedContainer';

export default () => {
 return (
   <BrowserRouter>
      <div>
      <PageHeader />
        <Switch>
          <Route exact path="/gallery" component={GalleryContainer}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={FrontFeaturedContainer}/>
        </Switch>
      </div>
   </BrowserRouter>
 )
}