import { Typewriter } from 'react-simple-typewriter';
import './main.scss'
import { useState } from 'react';
const App = () => {
  const data = [
    {
      id: 1,
      title: 'Не подписывает документ',
    },
    {
      id: 2,
      title: 'как настроить',
    },
    {
      id: 3,
      title: 'как использовать',
    },
    {
      id: 3,
      title: 'как использовать',
    },
    {
      id: 3,
      title: 'как использовать',
    },
    {
      id: 3,
      title: 'как использовать',
    },
    {
      id: 3,
      title: 'как использовать',
    }

  ];
  const [prompt, setPrompt] = useState<string>('');
  const [activePrompt, setActivePrompt] = useState<boolean>(false);
  const filterData = data.filter((item) => item.title.toLowerCase().includes(prompt.toLowerCase())).splice(0, 20)

  return (
    <>
      <div className="container">

        <div style={filterData.length > 0 ? { boxShadow: '0px -10px 70px rgba(104, 104, 104, 0.23)' } : undefined} className="assistant-container">
          {
            !activePrompt ? <div className="welcome-section">
              <h2 className="assistant-title">Помощник Изида – ваш проводник к знаниям</h2>
              <p className="assistant-description">
                <Typewriter
                  words={['Сложное превращаем в простое.', 'Материал становится понятным и доступным.', 'С Изидой все проще. Всегда рядом!']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={40}
                  deleteSpeed={30}
                  delaySpeed={1500}
                />
              </p>
            </div> : filterData.length > 0 ? (
              filterData.map((item) => (
                <div className='aswer'>
                  <span className='assistant-description' key={item.id}>{item.title}</span>
                  <span>РМИАС</span>
                </div>

              ))
            ) : (
              <span>Ничего не найдено</span> // Сообщение, если ничего не найдено
            )}

          <div>
            <form action="">
              <input className={``} onClick={() => setActivePrompt(true)} onChange={(e) => setPrompt(e.target.value)} type="text" />
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
