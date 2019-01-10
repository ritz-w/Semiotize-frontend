## Semiotize
This web app takes a photograph that the user uploads, and using image recognition technology, matches it to a database of over 500 works of contemporary and historic photography.

## Background
I first came up with this project in thinking about the way that artwork is exhibited online. For obvious reasons, photography is the medium that comes across the best in a web environment. The 2-dimensional, high definition context of the screens we use today allows the ideas communicated by a photograph to come across better than a painting or a sculpture would, for example (excluding, of course, the obvious caveat of losing the objecthood of the photograph.) Therefore, I chose to work on creating an experience for users to interact with works of photography. 

One of the hallmarks of digital culture today is the amount of photographic content we can generate ourselves. I had the idea to create something that would allow people to access works of photography through their own photographs - something approaching image recognition. I searched for resources online that would allow me to use the power of machine learning - or image recognition technology in a project. While the ability to point your camera at something and have it identify it as an object is not yet feasible, image recognition has been developed to the point where computers can detect what objects are in still images. This is where the main idea for Semiotize took off - to use image recognition to detect symbols within a photograph that the user provides, and then generate a list of works that closely match its symbols within a database of works of photography.

I thought of semiotics theory as applied to photography - the idea that the composition of a photograph, and the objects that are highlighted by this composition, create symbolism that allows us to 'read', or understand images. For example, how we  come up with what of a black cat in a photograph stands for might vary from culture to culture, and the way the cat is depicted. I found there was an incredibly interesting relationship to be found in comparing how the human being is able to read and identify symbols in a photograph, and how the computer does as a result of what the human has taught it.

Semiotize, therefore, is an experiment that allows humans to do main three things: 
1) To look at the photographs they have taken through different eyes - ones that are not human. 
2) To think about the images they so casually generate on a day to day basis more formally - in terms of composition, visual language, and symbolism. 
3) To discover great works of photography from different time periods and around the globe.

## Tech/Frameworks Used

<b>Languages</b>
- Ruby
- Javascript

<b>Web Frameworks</b>
- [Ruby on Rails](https://rubyonrails.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

<b>UI Library</b>
- [Semantic UI React](https://react.semantic-ui.com/)
- [Font Awesome](https://fontawesome.com/)

<b>Middleware</b>
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [React Router](https://reacttraining.com/react-router/web)

<b>Components</b>
- [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [React Exif Orientation Img](https://www.npmjs.com/package/react-exif-orientation-img)
- [React Popper](https://www.npmjs.com/package/react-popper)

## Features
- User can upload an image to the app's servers from their computer or from a link

- In one click, the app:
  1) Uploads the image
  2) Runs it through the image recognition API which associates it to a number of motifs
  3) Compares the associations to the database of associations of motifs to artworks using a specially-written algorithm
  4) Generates a page of results for the user
  
- On the results page, user can hover over captions to find information about the artist, and click into to individual artist pages
- Unique links for each results page are generated, allowing users to share their results with others
- On the results page, user can hover over artwork to view the percentage matches of the association with its motifs 
- On individual artists' pages, users can view full artist bios, all artworks by that artist in the database, and their most commonly used motifs in those artworks
- On the 'Browse Collections' page, users can view all artists in the collection by museum
- User can view the results pages of previous submissions by other users on the 'All Submissions' page, as well as search for submissions by user name, or motif name

## API Reference

<b>Image Recognition API</b>
- [Clarifai API](https://clarifai.com/)

<b>Image Upload API</b>
- [Cloudinary API](https://cloudinary.com/)

<b>Image APIs</b>
- [National Network of French Museums (RMN-GP)](https://api.art.rmngp.fr/?locale=en)
- [Harvard Art Museums API](https://www.harvardartmuseums.org/collections/api)
- [SFMOMA API](https://github.com/sfmoma)
- [Finnish National Gallery API](http://kokoelmat.fng.fi/api/)
- [Brooklyn Museum API](https://www.brooklynmuseum.org/opencollection/api/)


<b>Other APIs</b>
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)



## How to use?
Recommended usage of the app:
1) Click 'Upload' in the header of the page, enter your details and the details of the image, and either select an image from your phone/computer or provide a link to one, and press 'Submit'
2) Wait for results to be generated - should take between 5-10 seconds. It will bring you to a results page, where you can look at the results for the image you uploaded on the left hand side, and on the right hand side, look at the matching images from the artwork database.
3) Click on images on the right hand side to go to its artist's page, or go up to the menu and click 'Browse Collections' to look at artists by collection.


## Contribute

I would welcome any suggestions or contributions to this project ! When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with me [ritz.wu@outlook.com] before making a change.

## Credits
Created with the support of [Sam Barker](https://github.com/bamsarker) and [Nicolas Marcora](https://github.com/MinimumViablePerson)

All artist information and bio was scraped from Wikipedia. Text and images belong to their respective APIs and not to me.

## Contact
If there is any issue with this app please email [ritz.wu@outlook.com].

## License
This project is licensed under the MIT License - © [Ritz Wu](http://www.ritsu.net/)
