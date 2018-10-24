import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Input, Dropdown } from 'semantic-ui-react'
import './GalleryContainer.css'
import GalleryCard from '../components/GalleryCard'
import Spinner from '../components/Spinner'
import { fetchMotifs } from '../actions/motifsActions'

const searchByOptions = [{key: "tag", value: "Tag", text: "Search By Tag"}, 
{key: "title", value: "Title", text: "Search By Title"},
{key: "userLocation", value: "User Location", text: "Search By User Location"},
{key: "userName", value: "User Name", text: "Search By User Name"},
{key: "all", value: "All", text: "Show All"}]

class GalleryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: "",
            selectedRange: "All",
            displayedUserImages: props.userImages,
            allMotifs: []
        }
    }

    componentDidMount() {
        let allMotifs = []
        const onlyUnique = (value, index, self) => { 
            return self.indexOf(value) === index;
        }
        this.props.userImages.map(userImage => {
            let allImageMotifs = userImage.user_image_motifs.map(userimgmotif => userimgmotif.motif.name)
            return allMotifs.push(allImageMotifs)
        })
        let lastAllMotifs = allMotifs.flat(1).filter(onlyUnique)
        this.setState({allMotifs: lastAllMotifs})
    }

    filterByTag = (tag) => {
        this.setState({selectedRange: "Tag"}, () => this.handleChangeCriteria(tag))
    } 

    handleChangeCriteria = (criteria) => {
        if (this.state.selectedRange === "User Name" ) {
            this.setState({displayedUserImages: this.props.userImages.filter(userImage => userImage.user_name.toLowerCase().includes(criteria.toLowerCase()))})
        } else if (this.state.selectedRange === "User Location") {
        this.setState({displayedUserImages: this.props.userImages.filter(userImage => userImage.user_location.toLowerCase().includes(criteria.toLowerCase()))}, () => console.log(this.state.displayedUserImages)) 
        } else if (this.state.selectedRange === "Title") {
            this.setState({displayedUserImages: this.props.userImages.filter(userImage => userImage.image_title.toLowerCase().includes(criteria.toLowerCase()))}) 
        } else if (this.state.selectedRange === "Tag") {
            this.setState({displayedUserImages: this.props.userImages.filter(userImage => {
                const motifsList = userImage.user_image_motifs.map(userimgmotif => userimgmotif.motif.name)
                const updatedMotifsList = motifsList.filter(motif => motif.includes(criteria))
                console.log(updatedMotifsList)
                return updatedMotifsList.length > 0 ? true : false 
            })})
        } else {
            this.setState({displayedUserImages: this.props.userImages}) 
        }
    }


    handleSearchInput = (e, data) => {
        this.setState({searchInput: data.value}, () => this.handleChangeCriteria(this.state.searchInput))
    }

    handleSelectRange = (e, data) => {
        this.setState({selectedRange: data.value}, () => this.handleChangeCriteria(this.state.searchInput))
    }


    renderGalleryCards = () => {
        return this.state.displayedUserImages.map( userImage => {
            return (
                <GalleryCard filterByTag={this.filterByTag} userImage={userImage} key={`gallery-card-${userImage.id}`} setUserImage={this.props.setUserImage} changePage={this.props.changePage}/>
            )
        }) 
    }

    render() {
        return (
            <div>
                <Divider />
                <div className="gallery-search-box">
                <Dropdown text={this.state.selectedRange === "All" ? "Show All" : `Search By ${this.state.selectedRange}`} options={searchByOptions} className="search-by-dropdown" value={this.state.selectedRange} onChange={this.handleSelectRange} />
                <Input list={this.state.selectedRange === "Tag" ? "motifs" : null} size='small' disabled={this.state.selectedRange === "All" ? true : false} icon='search' placeholder={this.state.selectedRange === "All" ? "Select a Criteria" :`Search by ${this.state.selectedRange}`} onChange={this.handleSearchInput}  />
                    <datalist id="motifs">
                    {this.state.allMotifs.map(motif => <option key={`datalist-motif-${motif}`} value={motif} />)}
                    </datalist>
                </div>
                {this.props.userImages.length > 0 ? (
                    <div className="gallery-container">
                        {this.renderGalleryCards()}
                    </div>
                ) : (
                    <Spinner message="Loading Submissions..." />
                )}

        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userImages: state.userImages.allUserImages,
        allMotifs: state.motifs.allMotifs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMotifs: () => dispatch(fetchMotifs()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer)