import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
    
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='Ai' emoji='🤖' color='red' />
      <Skill skill='Python' emoji='👍🏻' color='blue' />
      <Skill skill='Html' emoji='👶🏻' color='yellow' />
      <Skill skill='Css' emoji='🤏🏼' color='cyan' />

    </div>

  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>

  );
}

function Intro(){
  return(
    <div>
      <h1>นายธนภัทร ปิยะวงษ์</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี ชื่นชอลในการใช้คอมพิวเตอร์ การเขียนโปรเเกรม การเขียนเว็ป
        งานอดิเรก ฟังเพลง อ่านหนังสือ และเล่นเกม
      </p>

    </div>

  );
}

function Avatar() {
  return <img className='avatar' src='22750.jpg' alt='My Avatar'></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);