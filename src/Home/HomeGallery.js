import React, { Component } from 'react';
import Gallery from "react-grid-gallery";
import testImg from '../images/cover-round.jpg'
import test1 from '../images/inst1.jpg'
import test2 from '../images/inst2.jpg'
import test3 from '../images/inst3.jpg'
import test4 from '../images/inst4.jpg'
import test5 from '../images/inst5.jpg'
import test6 from '../images/inst6.jpg'
import test7 from '../images/inst7.jpg'
import test8 from '../images/inst8.jpg'
import test9 from '../images/inst9.jpg'
import test10 from '../images/inst10.jpg'
import test11 from '../images/inst11.jpg'
import test12 from '../images/inst12.jpg'

class HomeGallery extends Component {

    constructor() {
        super();
        this.state = {
            IMAGES :
                [{
                    src: test1,
                    thumbnail: test1,
                    thumbnailWidth: 520,
                    thumbnailHeight: 520,
                    caption: "After Rain (Jeshu John - designerspics.com)"
                },
                    {
                        src: test2,
                        thumbnail: test2,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520,
                    },

                    {
                        src: test3,
                        thumbnail: test3,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },

                    {
                        src: test4,
                        thumbnail: test4,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },

                    {
                        src: test5,
                        thumbnail: test5,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },

                    {
                        src: test6,
                        thumbnail: test6,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },

                    {
                        src: test7,
                        thumbnail: test7,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },

                    {
                        src: test8,
                        thumbnail: test8,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },

                    {
                        src: test9,
                        thumbnail: test9,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },
                    {
                        src: test10,
                        thumbnail: test10,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },
                    {
                        src: test11,
                        thumbnail: test11,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
                    },
                    {
                        src: test12,
                        thumbnail: test12,
                        thumbnailWidth: 520,
                        thumbnailHeight: 520
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