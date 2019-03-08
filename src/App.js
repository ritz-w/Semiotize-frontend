import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Page from './containers/Page'
import { fetchUserImages, fetchFirstThree } from './actions/userImageActions'
import { fetchArtists } from './actions/artistsActions'
import MetaTags from 'react-meta-tags';


class App extends Component {

  componentDidMount() {
    this.props.fetchFirstThree()
    .then(() => this.props.fetchUserImages())
    .then(() => this.props.fetchArtists()
    )
  }

  render() {
    return (
      <div className="App">
            <MetaTags>
            <title>Semiotize</title>
            <meta name="description" content="An app that uses image recognition technology to match your photo to over 500 works of contemporary and historic photography from Kiasma, SFMOMA, Harvard Art Museums, and more." />
            <meta property="og:title" content="Semiotize: See your photographs differently" />
            <meta property="og:image" content="http://kokoelmat.fng.fi/app?action=image&profile=CC0&iid=H0014500" />
          </MetaTags>
        <Page fetchUserImages={this.props.fetchUserImages} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userImages: state.userImages.allUserImages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserImages: () => dispatch(fetchUserImages()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchFirstThree: () => dispatch(fetchFirstThree())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
