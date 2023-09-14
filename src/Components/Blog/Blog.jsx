import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div className="font-bold w-2/3">
            <h2 className="text-5xl">Blog component</h2>
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;

