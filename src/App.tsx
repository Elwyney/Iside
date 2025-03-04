import './main.scss';
import './app.scss';
import data from './data';
import { useState } from 'react';
import WelcomeSection from './components/welcomeSection/WelcomeSection';
import SearchInput from './components/searchInput/SearchInput';
import ResultList from './components/resultList/ResultList';

const App = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [activePrompt, setActivePrompt] = useState<boolean>(false);
  const filterData = data.filter((item) => item.title.toLowerCase().includes(prompt.toLowerCase())).splice(0, 20)
  return (
    <>
      <div className="container">
        <div style={filterData.length > 0 ? { boxShadow: '0px -10px 70px rgba(104, 104, 104, 0.23)' } : undefined}
             className="assistant-container">
        {!activePrompt ? <WelcomeSection /> : <ResultList data={filterData} />}
          <div>
          <SearchInput 
              onClick={() => setActivePrompt(true)} 
              onChange={(e) => setPrompt(e.target.value)}/>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
