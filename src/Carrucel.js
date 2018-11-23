import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
const items = [
    {
        id: 1,
        src: banner1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        id: 2,
        src: banner2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        id: 3,
        src: banner3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class Carrucel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag m-1"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img src={item.src} alt={item.altText} />
                    {/*<CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />*/}
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                max-width: 99.5%;
                height: 500px;
                background: black;
              }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Carrucel;