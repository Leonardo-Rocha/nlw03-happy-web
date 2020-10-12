import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../images/logo.svg';

const LandingPage: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Campo Grande</strong>
          <span>Mato Grosso do Sul</span>
        </div>

        <NavLink to="app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
