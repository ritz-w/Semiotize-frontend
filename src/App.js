import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Page from './containers/Page'
import { fetchUserImages } from './actions/userImageActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchUserImages()
  }

  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userImages: state.userImages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserImages: () => dispatch(fetchUserImages())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
