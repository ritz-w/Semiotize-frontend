import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import FeaturedCard from '../components/FeaturedCard'

class FrontFeaturedContainer extends Component {
    renderSampleThree = () => {
        return this.props.userImages.slice(this.props.userImages.length - 3, this.props.userImages.length).map( userImage => {
            return (
                <Grid.Column>
                  <FeaturedCard userImage={userImage} />
                </Grid.Column>
            )
        })
    }
    render() {
        return (
            <div>
                <h2 className="section-header">Most Recent Uploads</h2>
            <Grid stackable columns='three'>
                <Grid.Row>
                {this.renderSampleThree()}
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userImages: state.userImages
    }
  }

  export default connect(mapStateToProps)(FrontFeaturedContainer)