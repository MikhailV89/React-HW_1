export const fetchAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) {
        throw new Error('Error loading albums');
    }
    return response.json();
};

export const fetchPhotos = async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    if (!response.ok) {
        throw new Error('Error uploading photos');
    }
    return response.json();
};