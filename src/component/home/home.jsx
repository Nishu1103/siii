import React, { useEffect, useState } from 'react';
import "./home.css"

const Home = () => {
  const [headerClass, setHeaderClass] = useState('header');
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    // Add "load" event listener
    window.addEventListener('load', () => {
      const header = document.getElementsByTagName('header')[0];
      header.addEventListener('click', toggleMenu);
    });

    // Add "scroll" event listener
    window.addEventListener('scroll', () => {
      headerScroll();
      parallax('banner-wrapper-fixed', 5, 0);
    });

    return () => {
      // Remove event listeners when the component unmounts
      window.removeEventListener('load', toggleMenu);
      window.removeEventListener('scroll', headerScroll);
    };
  }, []);

  function headerScroll() {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 400) {
      setHeaderClass('header header-scroll');
    } else {
      setHeaderClass('header');
    }
  }

  function parallax(elem, speed, number) {
    const target = document.getElementsByClassName(elem)[number];
    const scrollValue = window.pageYOffset;
    if (scrollValue <= 700) {
      target.style.transform = `translateY(${-scrollValue / speed}px)`;
    }
  }

  function toggleMenu() {
    const menuBar = document.querySelector('.header ul');
    if (document.documentElement.clientWidth <= 768) {
      if (menuVisible) {
        menuBar.style.animation = 'fade 1 0.2s 0s';
        setMenuVisible(false);
      } else {
        menuBar.style.animation = 'flip 1 0.4s 0s';
        setMenuVisible(true);
      }
    }
  }

  return (
    <><div className="lands">
      <div className="L-tewelve">
        <div className="row">
          <header className={headerClass}>
            <div className="logo-container">
              <h1>Logo</h1>
              <span className="toggle-btn" onClick={toggleMenu}>
                {menuVisible ? '×' : '☰'}
              </span>
            </div>
            <ul className={menuVisible ? 'display-block' : 'display-none-mobile'}>
              <li>
                <a href="##">Home</a>
              </li>
              <li>
                <a href="##">Services</a>
              </li>
              <li>
                <a href="##">About</a>
              </li>
              <li>
                <a href="##">Porfolio</a>
              </li>
              <li>
                <a href="##">Contact</a>
              </li>
            </ul>
          </header>
          <div className="banner-wrapper-fixed">
            <div className="foreground">
              <h1>PARALLAX SCROLLING</h1>
            </div>
          </div>
          <div className="wrapper"></div>
        </div>
      </div>
      <div className="L-tewelve">
        <div className="row">
          <div className="section">
            <h1 className="heading">Services</h1>
          </div>
        </div>
      </div>
      <div className="L-tewelve">
        <div className="row">
          <div className="section">
            <div className="L-four T-six S-tewelve">
              <div className="box"></div>
            </div>
            <div className="L-four T-six S-tewelve">
              <div className="box"></div>
            </div>
            <div className="L-four T-tewelve S-tewelve">
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="L-tewelve">
        <div className="row">
          <footer>
            <p>
              Made with <span className="heart">♥</span> from Amir Saleem
            </p>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
