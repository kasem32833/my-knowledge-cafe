import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-gray-300 p-6 mt-2 rounded-lg" >
            <h5 className="text-2xl">Total bookmarks:{bookmarks.length}</h5>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;