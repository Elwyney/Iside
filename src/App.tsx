import './main.scss';
import './app.scss';
import ResultList from './components/resultList/ResultList';
import { Routes, Route } from "react-router";
import Nav from './components/nav/nav';

const App = () => {
  return (
    <>
      <div className="container">
        <Nav/>
        <div
          className="assistant-container">
          <Routes>
            <Route path="/" element={<ResultList />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
