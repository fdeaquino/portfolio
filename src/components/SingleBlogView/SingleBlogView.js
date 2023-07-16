import React from 'react';
import { useParams } from 'react-router-dom';
// import BlogNotFound from '../BlogNotFound/BlogNotFound.js'

import './SingleBlogView.css';

function SingleBlogView({ blogData }) {
    const { id } = useParams();

    // Find the case that matches the id in the URL
    const blogDetail = blogData.find(blogItem => blogItem.id === Number(id));

    // If there's no matching case, return null or some 404 component
    // if (!caseDetail) return <DecisionNotFound />;
    // or return <NotFound />;


    return (
        <React.Fragment>
        <div>
            Placeholder
        </div>

        </React.Fragment>
    )
}

export default SingleBlogView;
