import React, { Component } from 'react';
import { connect } from 'react-redux'

class PresentationContainer extends Component {
    render() {
        return (
            <div>Presentation Container</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userImages: state.userImages
    }
  }

  export default connect(mapStateToProps)(PresentationContainer)