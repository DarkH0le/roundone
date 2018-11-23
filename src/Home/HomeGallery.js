import React, { Component } from 'react';
import Gallery from "react-grid-gallery";
import testImg from '../images/cover-round.jpg'

class HomeGallery extends Component {

    constructor() {
        super();
        this.state = {
            IMAGES :
                [{
                    src: testImg,
                    thumbnail: testImg,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    caption: "After Rain (Jeshu John - designerspics.com)"
                },
                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    },

                    {
                        src: testImg,
                        thumbnail: testImg,
                        thumbnailWidth: 320,
                        thumbnailHeight: 212
                    }]
        }
    }
    render() {
        return (
                <Gallery images={this.state.IMAGES}/>

        );
    }
}
export default HomeGallery;