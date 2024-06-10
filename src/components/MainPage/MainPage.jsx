import React, { Component } from 'react';
import { fetchAlbums, fetchPhotos } from '../../request/api';
import GalleryList from "../GalleryList/index.js";
import GalleryDetail from '../GalleryDetail';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'albums',
            albums: [],
            photos: [],
            selectedAlbumId: null,
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const albums = await fetchAlbums();
            this.setState({ albums, loading: false });
        } catch (error) {
            console.error('Error loading albums:', error);
            this.setState({ error: 'Error loading albums', loading: false });
        }
    }

    handleAlbumClick = async (albumId) => {
        this.setState({ loading: true });
        try {
            const photos = await fetchPhotos(albumId);
            this.setState({
                photos,
                selectedAlbumId: albumId,
                currentPage: 'albumDetail',
                loading: false,
            });
        } catch (error) {
            console.error('Error uploading photos:', error);
            this.setState({ error: 'Error uploading photos', loading: false });
        }
    };

    handleBackClick = () => {
        this.setState({ currentPage: 'albums' });
    };

    render() {
        const { currentPage, albums, photos, selectedAlbumId, loading, error } = this.state;

        if (loading) {
            return <div className="text-center mt-5"><p>Loading...</p></div>;
        }

        if (error) {
            return <div className="text-center mt-5"><p>Error: {error}</p></div>;
        }

        return (
            <div className="container mt-4">
                {currentPage === 'albums' && (
                    <GalleryList albums={albums} onAlbumClick={this.handleAlbumClick} />
                )}
                {currentPage === 'albumDetail' && (
                    <GalleryDetail
                        albumId={selectedAlbumId}
                        photos={photos}
                        onBackClick={this.handleBackClick}
                    />
                )}
            </div>
        );
    }
}

export default MainPage;