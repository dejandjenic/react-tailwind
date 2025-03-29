import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import IBlogPost from "../../interfaces/IBlogPost";
import fetchBlogPosts from '../../helpers/fetchBlogPosts';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

const Blogs = () => {

    const [blogs, setBlogs] = useState<IBlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBlogPosts()
        .then((data) => {
          setBlogs(data);
          setError(null);
          setLoading(false);
        })
        .catch( (e:Error) => {
            setLoading(false);
            setError(e.message)
        });

    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl">
                <div className="space-y-4">
                    {loading && <Loading></Loading>}
                    {error && <ErrorMessage error={error}></ErrorMessage>}
                    {!loading && blogs.map((blog,index) => (
                        <BlogPost blog={blog} index={index} key={blog.id} />
                    ))}
                </div>
            </div>
        </div>
    );
  };
  export default Blogs;