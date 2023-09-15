import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog , handleBookmark}) => {
    

    const {title, cover, reading_time, posted_date, author, author_img, hashtags} = blog;
    return (
        <div className="font-bold mb-20 ">
            <img className='w-full' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span>{reading_time}min read</span>
                    <button onClick={()=>handleBookmark(blog)}>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h3 className='text-3xl my-4'>Blog Title:{title}</h3>
            <p>
                {
                    hashtags.map((tag, idx) => <span key={idx}><a className='mr-4' href="">#{tag}</a></span>)
                }
            </p>
        
           
            
            
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;

