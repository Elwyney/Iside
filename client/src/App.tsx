import './main.scss';
import './app.scss';
import React from 'react';
import ArticlesList from './page/ArticlesList';
import { Routes, Route } from "react-router";
import Nav from './components/nav/nav';
import NewsDashboard from './page/NewsDashboard'

const App = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="assistant-container">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/:id" element={<NewsDashboard />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
