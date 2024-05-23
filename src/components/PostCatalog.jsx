import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при получении статей', error);
                setError('Ошибка при загрузке данных');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Загрузка статей...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (posts.length === 0) {
        return <p>Нет доступных статей</p>;
    }

    return (
        <div className="posts">
            <ul className="posts__list">
                {posts.map(post => (
                    <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PostCatalog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool.isRequired
};

export default PostCatalog;