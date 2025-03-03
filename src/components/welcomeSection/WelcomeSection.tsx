import { Typewriter } from 'react-simple-typewriter';
import './welcomeSection.scss';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
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
    </div>
  );
};

export default WelcomeSection;
