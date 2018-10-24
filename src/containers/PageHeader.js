import React, { Component } from 'react';
import { Modal, Divider } from 'semantic-ui-react'
import './PageHeader.css'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import Spinner from '../components/Spinner'


class PageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            userName: "",
            userLocation: "",
            userImageTitle: "",
            userImageURL: "",
            userFilePath: "",
            uploadedFileCloudinaryUrl: "",
            isLoading: false,
            redirectId: "",
            uploadingMessage: ""
        }
    }

    handleClose = () => this.setState({ modalOpen: false })

    handleOpen = () => this.setState({ modalOpen: true })

    handleChange = (e, attributeName) => {
        this.setState({
            [attributeName]: e.target.value
        }, console.log(this.state))
    }

    handleFileChange = (e) => {
        this.setState({
            userFilePath: e.target.files[0]
        }, () => console.log(this.state))
    }

    handleImageUpload = (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "cef91ja4"); // Replace the preset name with your own
        this.setState({uploadingMessage: "Starting upload..."})
        return fetch("https://api.cloudinary.com/v1_1/dt8wmjdja/image/upload", {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
              console.log(data)
            if (data.secure_url !== '') {
              this.setState({
                uploadedFileCloudinaryUrl: data.eager[0].secure_url
              }, () => this.setState({uploadingMessage: "Photo Uploading..."})
              );
            }
          })
          .catch(err => console.error(err))
      }

    handleImageSubmit = (e) => {
        e.preventDefault()
        this.setState({isLoading: true}, () => this.setState({uploadingMessage: "Matching in database..."}))
        this.handleImageUpload(this.state.userFilePath)
        .then(() => {
            let setImage = this.state.userFilePath !== "" ? this.state.uploadedFileCloudinaryUrl : this.state.userImageURL
            fetch("http://localhost:3000/api/v1/user_images/upload", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {user_name: this.state.userName,
                    user_location: this.state.userLocation,
                    image_title: this.state.userImageTitle,
                    image_url: setImage
                })
            })
            .then(res => {
                this.setState({isLoading: false}, () => this.setState({uploadingMessage: "Matching Completed."}))
                this.handleClose()
                return res.json()
            })
            .then(data => this.props.history.push(`/gallery/${data.id}`))
            .then(() => this.props.fetchFirstThree())
        })
    }


    render() {
        return (
            <div className="page-header">
                <Link to="/">
                    <div className="title-container">
                        <h1 className="site-title">Semiotize</h1>
                        <h4 className="site-subtitle">Uncovering the shared symbolism between your photos and the history of photography.</h4>
                    </div>
                </Link>
                <div className="menu-container">
                    <Modal trigger={<button onClick={this.handleOpen} className="upload-button">Upload</button>} open={this.state.modalOpen} onClose={this.handleClose} >
                    <Modal.Content>
                        {this.state.isLoading ? (
                            <div className="spinner-container">
                                <Spinner message={this.state.uploadingMessage}/> 
                            </div>
                        ) : (
                            <div>
                                <h3 className="upload-message">Please select an image from your computer, or paste a URL to your image.</h3>
                                    <form onSubmit={this.handleImageSubmit}>
                                    <h4>Name</h4>
                                        <input type="text" onChange={(e) => this.handleChange(e, "userName")} placeholder="Your Name" className="photo-input"/>
                                    <h4>Your Location</h4>
                                        <input type="text" onChange={(e) => this.handleChange(e, "userLocation")} placeholder="Your location or photo location..." className="photo-input" />
                                        <h4>Image Title</h4>
                                        <input type="text" onChange={(e) => this.handleChange(e, "userImageTitle")} placeholder="Give a title to your image!" className="photo-input" />
                                    <h4>Image URL</h4>
                                        <input type="text" onChange={(e) => this.handleChange(e, "userImageURL")} placeholder="https://www.image.com/image.jpg" className="photo-url-input" /><br/>
                                    <h4>Upload from File</h4>
                                    <input type="file" name="pic" onChange={this.handleFileChange} />
                                <Divider />
                                    <div className="submit-container">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        
                    </Modal.Content>
                    </Modal>
                    <div className="dropdown">
                        <button className="menu-button">Menu ▾ </button>
                        <div className="dropdown-content">
                            <Link to='/'><div className="menu-element"><p>Home</p></div></Link>
                            <Link to='/about'><div className="menu-element"><p>About</p></div></Link>
                            <Link to='/gallery'><div className="menu-element"><p>All Submissions</p></div></Link>
                            <Link to='/collections'><div className="menu-element"><p>Explore the Collection</p></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PageHeader)