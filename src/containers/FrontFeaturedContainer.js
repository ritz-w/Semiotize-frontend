import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Divider } from 'semantic-ui-react'
import FeaturedCard from '../components/FeaturedCard'
import Spinner from '../components/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEye } from '@fortawesome/free-solid-svg-icons'
import { setUserImage, changePage } from '../actions/userImageActions'

class FrontFeaturedContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            introShowing: true
        }
    }


    renderSampleThree = () => {
        return this.props.userImages.slice(this.props.userImages.length - 3, this.props.userImages.length).map( userImage => {
            return (
                <Grid.Column>
                  <FeaturedCard userImage={userImage} setUserImage={this.props.setUserImage} changePage={this.props.changePage} />
                </Grid.Column>
            )
        })
    }
    render() {
        return (
            <div>
                <Divider />
                <h2 className="section-header">
                    {this.state.introShowing ? <FontAwesomeIcon icon={faTimesCircle} onClick={() => this.setState({introShowing: false})} /> : <FontAwesomeIcon icon={faEye} onClick={() => this.setState({introShowing: true})} />}
                    <span> Introduction </span>
                </h2>
                    {this.state.introShowing ? 
                    (<div className="intro-box">
                        <h3>Semiotics is the study of signs and symbols and their use or interpretation.</h3>
                        <p>This project was inspired by the importance of semiotics in understanding the history of photography.</p><br />
                        <p>It allows you to upload a photograph, and using image recognition technology, matches it to a database of 300 works of contemporary and historic photography, finding similar signs and symbols that have been used. In doing so, you can compare how the objects and motifs in your photograph have been used by other photographers through different expressive means, styles, and time periods.</p>
                        <br />
                        <p>We invite you to welcome the generative spontaneity of artificial intelligence - even when it returns an unexpected result, can you see a connection? </p>
                    </div>)
                    : null }
                <h2 className="section-header">Most Recent Uploads</h2>
            <Grid stackable columns='three'>
                <Grid.Row>
                {this.props.isLoading ? <Spinner message="Loading Images..."/> : this.renderSampleThree()}
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userImages: state.userImages.allUserImages,
      currentImage: state.userImages.currentImage,
      isLoading: state.userImages.isLoading
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        setUserImage: (currentImage) => dispatch(setUserImage(currentImage)),
        changePage: (currentPage) => dispatch(changePage(currentPage))
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(FrontFeaturedContainer)