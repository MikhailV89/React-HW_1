import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexActive: 0
        }
    }

    prevPic = () => {
        this.setState((currentIndex) => ({
            indexActive: currentIndex.indexActive === 0 ? this.props.images.length - 1 : currentIndex.indexActive - 1
        }));
    }

    nextPic = () => {
        this.setState((currentIndex) => ({
            indexActive: currentIndex.indexActive === this.props.images.length - 1 ? 0 : currentIndex.indexActive + 1
        }));
    }

    isActive = (indexActive, index) => {
        const activeState = cn(
            `carousel-item`,
            index === indexActive ? 'active' : ''
        )
        return activeState;
    }

    render() {
        const { images } = this.props;
        const {indexActive} = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {images.map((image, i) => (
                        <div key={i} className={this.isActive(indexActive, i)}>

                            <img alt={`Slide ${i + 1}`} className="d-block w-100" src={image}/>

                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" onClick={this.prevPic} data-bs-target="#carousel"
                        type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" onClick={this.nextPic} data-bs-target="#carousel"
                        type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        )
    }
}

export default Carousel;