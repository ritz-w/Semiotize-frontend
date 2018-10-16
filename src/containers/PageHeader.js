import React, { Component } from 'react';
import { Modal, Divider } from 'semantic-ui-react'
import './PageHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class PageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            userName: "",
            userLocation: "",
            userImageTitle: "",
            userImageURL: "",
            userFilePath: "",
            uploadedFileCloudinaryUrl: ""
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

    handleImageUpload(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jl9vvi5n"); // Replace the preset name with your own
    
        return fetch("https://api.cloudinary.com/v1_1/dt8wmjdja/image/upload", {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            if (data.secure_url !== '') {
              this.setState({
                uploadedFileCloudinaryUrl: data.secure_url
              }, () => console.log(this.state.uploadedFileCloudinaryUrl));
            }
          })
          .catch(err => console.error(err))
      }

    handleImageSubmit = (e) => {
        e.preventDefault()
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
                this.handleClose()
                return res.json()
            })
            .then(data => console.log(data))
            .then(() => this.props.changePage("Presentation"))
        })
    }

    render() {
        return (
            <div className="page-header">
                <div className="title-container">
                    <h1 className="site-title">Semiotize</h1>
                    <h4 className="site-subtitle">Uncovering the shared symbolism between your photos and the history of photography.</h4>
                </div>
                <div className="menu-container">
                    <Modal trigger={<button onClick={this.handleOpen} className="upload-button">Upload</button>} open={this.state.modalOpen} onClose={this.handleClose} >
                    <Modal.Content>
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
                    </Modal.Content>
                    </Modal>
                    <div class="dropdown">
                        <button className="menu-button">Menu ▾ </button>
                        <div class="dropdown-content">
                            <div className="menu-element" onClick={() => this.props.changePage("Front")}><p>Home</p></div>
                            <div className="menu-element" onClick={() => this.props.changePage("About")}><p>About</p></div>
                            <div className="menu-element"><p>Gallery</p></div>
                        </div>
                    </div>
                </div>
            </div>
        //     <Grid>
        //     <Grid.Row>
        //       <Grid.Column width={10}>
        //         <div>
        //             <h1 className="site-title">Semiotize</h1><br /> <br />
        //         </div>

        //       </Grid.Column>
        //       <Grid.Column width={6} floated='right'>
        //             <Grid columns='equal'>
        //                 <Grid.Column>
        //                 <Button icon labelPosition='left'>
        //                     <Icon name='arrow alternate circle up outline' />
        //                     Upload
        //                 </Button>
        //                 </Grid.Column>
        //                 <Grid.Column>
        //                     <Menu compact>
        //                     <Menu.Item as='a'>Menu</Menu.Item>
        //                     </Menu> 
        //                 </Grid.Column>
        //             </Grid>
        //         </Grid.Column>
        //     </Grid.Row>
        // </Grid>
        )
    }
}