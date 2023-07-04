import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App=(props)=> {

  const apiKey=process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0)
  // setProgress(progress)
  
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar color='#f11946' progress={progress}/>
      <Routes>


      
      <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={5} country="in" category="general"/>} />
      <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey}  key="generall" pageSize={5} country="in" category="general"/>} />
      <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={5} country="in" category="sports"/>}/>
      <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={5} country="in" category="science"/>}/>
      <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={5} country="in" category="technology"/>}/>

      <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
      <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={5} country="in" category="health"/>} />
      <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={5} country="in" category="business"/>} />
      </Routes>

      </Router>
      </>
    )
  
}

export default App

