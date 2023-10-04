import { useState } from 'react'
import './App.css'
import BookMarks from './components/bookMarks/BookMarks'
import Header from './components/header/Header'
import Blogs from './components/header/blogs/Blogs'

function App() {

  // bookMarks useState 
  const [bookMarks, setBookMarks] = useState([])
  // timeSpent useState 
  const [readingTime, setReadingTime] = useState(0)

  // addToBookMarkHandler function create in here 
  const addToBookMarkHandler = (blog) => {
    console.log('add book mark:')
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }


  // readingTimeAddHandler function in here create 
  const readingTimeAddHandler = (time, id) => {
    console.log('timeSpent adding');
    const timeSpentToConvertNumber = parseFloat(time.split(','));
    setReadingTime(readingTime + timeSpentToConvertNumber);

    // remove
    const remaining = bookMarks.filter(remove => remove.id !== id);
    setBookMarks(remaining)
  } 

  console.log(readingTime)

  return (
    <>

      <header className='max-w-screen-xl mx-auto'>
        <Header></Header>
      </header>
      <main className='max-w-screen-xl mx-auto md:flex gap-6'>
        <Blogs addToBookMarkHandler={addToBookMarkHandler} timeSpentAddHandler={readingTimeAddHandler}></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </main>
    </>
  )
}

export default App
