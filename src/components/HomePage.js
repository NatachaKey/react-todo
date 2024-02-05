import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './HomePage.module.css';
import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToTodoPage = () => {
    navigate('/mytodo');
  };
  const container = useRef();
  useGSAP(
    () => {
      // gsap code here...
      gsap.to('.box', { duration: 1.5, ease: 'power1.out', y: 30 });
    },
    { scope: container }
  );
  return (
    
    <div className={style.center} ref={container}>
      <h1 className="box">Welcome to My Todo List App!</h1>
      <p>Click the button below to go to your Todo List:</p>
      <button className={style.goToBtn} onClick={navigateToTodoPage}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Go to My Todo List
      </button>
    </div>
  );
};

export default HomePage;
