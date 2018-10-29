import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Page from './containers/Page'
import { fetchUserImages, fetchFirstThree } from './actions/userImageActions'
import { fetchArtists } from './actions/artistsActions'



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
