import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './Components/Bookmarks/Bookmarks'



function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }
  console.log('blog book marked', bookmarks)


  return (
    <>
      <Header></Header>
      <div className=' container mx-auto flex justify-between gap-10'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
