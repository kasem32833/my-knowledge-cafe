
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
   
    return (
        <div className="bg-gray-100 m-2 p-4 rounded-md">
            <h3 className="text-3xl">{title}</h3>
        </div>
    );
};

export default Bookmark;