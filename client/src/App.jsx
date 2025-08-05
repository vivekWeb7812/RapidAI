import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import BlogTitles from './pages/BlogTitles'
import Community from './pages/Community'
import Dashboard from './pages/Dashboard'
import GenImages from './pages/GenImages'
import Home from './pages/Home'
import Layout from './pages/Layout'
import RemoveBg from './pages/RemoveBg'
import RemoveObj from './pages/RemoveObj'
import ReviewResume from './pages/ReviewResume'
import WriteArticle from './pages/WriteArticle'

const App = () => {

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='ai' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='write-article' element={<WriteArticle />} />
        <Route path='blog-titles' element={<BlogTitles />} />
        <Route path='generate-images' element={<GenImages />} />
        <Route path='remove-background' element={<RemoveBg />} />
        <Route path='remove-object' element={<RemoveObj />} />
        <Route path='review-resume' element={<ReviewResume />} />
        <Route path='community' element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
