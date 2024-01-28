import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

class Carousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                   <Image src="next.svg" height={500} width={screen}></Image>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <Image src="next.svg" height={500} width={screen}></Image>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Image src="next.svg" height={500} width={screen}></Image>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>