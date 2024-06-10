import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryDetail extends Component {
    render() {
        const { photos, albumId, onBackClick } = this.props;

        return (
            <div>
                <h1 className="text-center mb-5">Gallery {albumId}</h1>
                <button className="btn btn-secondary mb-4" onClick={onBackClick}>
                    Back
                </button>
                <div className="row">
                    {photos.length === 0 ? (
                        <p>no photos to display</p>
                    ) : (
                        photos.map(photo => (
                            <div key={photo.id} className="col-md-4 mb-5">
                                <div className="card">
                                    <img className="card-img-top" src={photo.url} alt={photo.title} />
                                    <div className="card-body">
                                        <p className="card-text">{photo.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }
}

GalleryDetail.propTypes = {
    photos: PropTypes.array.isRequired,
    albumId: PropTypes.number.isRequired,
    onBackClick: PropTypes.func.isRequired,
};

export default GalleryDetail;