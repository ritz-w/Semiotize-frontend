import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Divider } from 'semantic-ui-react'
import FeaturedCard from '../components/FeaturedCard'
import Spinner from '../components/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class FrontFeaturedContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            introShowing: true,
            isBigScreen: false
        }
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
    updatePredicate = () => {
        this.setState({ isBigScreen: window.innerWidth > 1600 });
      }


    renderSample = (numToRender) => {
        return this.props.userImages.slice(this.props.userImages.length - numToRender, this.props.userImages.length).map( userImage => {
            return (
                <Grid.Column>
                  <Link to={`/gallery/${userImage.id}`}><FeaturedCard userImage={userImage} /></Link>
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
                     <span> Introduction</span>
                </h2>
                    {this.state.introShowing ? 
                    (<div className="intro-box">
                        <h3>Semiotics is the study of signs and symbols and their use or interpretation.</h3>
                        <p>This project was inspired by the role of semiotics in understanding the history of photography.</p><br />
                        <p>It takes a photograph that you upload, and using image recognition technology, matches it to over 500 works of contemporary and historic photography, finding common signs and symbols that have been used. In doing so, you can compare how the objects and motifs in your photograph have been used by other photographers in different styles, time periods, and contexts.</p>
                        <br />
                        <p>The project invites users to consider the generative spontaneity of artificial intelligence - even when unexpected results are returned, can you see a connection? </p>
                    </div>)
                    : null }
                <h2 className="section-header">Most Recent Uploads</h2>
                {this.props.isLoading ? <Spinner message="Loading Images..."/> : (
                    <Grid stackable columns={this.state.isBigScreen ? 'four' : 'three'}>
                        <Grid.Row>
                        {this.state.isBigScreen ? this.renderSample(4) : this.renderSample(3)}
                        </Grid.Row>
                    </Grid>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userImages: state.userImages.threeUserImages,
      isLoading: state.userImages.threeLoading
    }
  }


  export default connect(mapStateToProps)(FrontFeaturedContainer)