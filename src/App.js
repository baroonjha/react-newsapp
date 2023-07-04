import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API_KEY
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar color='#f11946' progress={this.state.progress} /*onLoaderFinished={()=>setProgress(0)}*/ />
      <Routes>
      {/* <News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize=5 country="in" category="sports" /> */}

      
      <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={5} country="in" category="general"/>} />
      <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={5} country="in" category="sports"/>}/>
      <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={5} country="in" category="science"/>}/>
      <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={5} country="in" category="technology"/>}/>

      <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
      <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={5} country="in" category="health"/>} />
      <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={5} country="in" category="business"/>} />
      </Routes>

      </Router>
      </>
    )
  }
}


