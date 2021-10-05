import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./fakeBlog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div>
                <p className="text-center pb-3 text-primary fs-1 text fw-bold">BLOGS</p>
            </div>

            {/* Calling Single Blog */}
            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        blogs.map(singleBlog => <SingleBlog singleBlog={singleBlog}></SingleBlog>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Blogs;