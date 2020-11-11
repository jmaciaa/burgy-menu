import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FullBurgerMenu from 'full-burger-menu';
import Prism from 'prismjs';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import './prism.css';

// images
import home from './assets/home.jpg';
import about from './assets/about.jpg';
import product from './assets/product.jpg';
import contact from './assets/contact.jpg';

const routes = [
  {
    img: home,
    Component: props => (
      <NavLink to="/" exact>
        Home
      </NavLink>
    ),
  },
  {
    img: about,
    Component: props => (
      <NavLink to="/about" exact>
        About
      </NavLink>
    ),
  },
  {
    img: product,
    Component: props => (
      <NavLink to="/product" exact>
        Product
      </NavLink>
    ),
  },
  {
    img: contact,
    Component: props => (
      <NavLink to="/contact" exact>
        Contact
      </NavLink>
    ),
  },
];

const fonts = [
  'Georgia',
  'Arial',
  'Helvetica',
  'Gill Sans',
  'Lucida Sans',
  'Franklin Gothic Medium',
  'Trebuchet MS',
  'Tahoma',
  'Segoe UI',
  'Cambria',
  'Georgia',
  'Verdana',
  'Geneva',
  'Arial Narrow Bold',
  'Calibri',
  'Arial Narrow',
];

const burgers = [
  ['hamburgerSlider', 'Slider'],
  ['hamburgerSpin', 'Spin'],
  ['hamburgerElastic', 'Elastic'],
  ['hamburgerCollapse', 'Collapse'],
  ['hamburgerArrowReverse', 'Arrow'],
  ['hamburgerArrowTurnReverse', 'Arrow Turn'],
  ['hamburgerSpring', 'Spring'],
  ['hamburgerStand', 'Stand'],
];

export default function App() {
  const [state, setState] = useState({
    routes: routes,
    burger: 'hamburgerSlider',
    barColor: '#000000',
    primaryLight: '#f2f2f2',
    primaryDark: '#d4d7d9',
    primaryFont: '#ffffff',
    burgerCircle: false,
    burgerLeft: '90%',
    burgerTop: '3%',
    fontFamily: 'Georgia',
    burgerWidth: 50,
  });

  const handleChange = e => {
    const key = e.target.name;
    const value =
      key === 'burgerTop' || key === 'burgerLeft' ? `${e.target.value}%` : e.target.value;
    const copy = { ...state };
    copy[key] = value;
    setState(copy);
  };

  const handleCircleChange = e => {
    console.log(e.target.value, e.target.name);
    setState(prevState => {
      return { ...state, burgerCircle: !prevState.burgerCircle };
    });
  };

  const codeRoutes = `const routes = [
    {
      img: home,
      Component: (props) => (
        <NavLink to="/" exact>
          Home
        </NavLink>
      ),
    },
    {
      img: about,
      Component: (props) => (
        <NavLink to="/about" exact>
          About
        </NavLink>
      ),
    },
    {
      img: work,
      Component: (props) => (
        <NavLink to="/product" exact>
          Product
        </NavLink>
      ),
    },
    {
      img: contact,
      Component: (props) => (
        <NavLink to="/contact" exact>
          Contact
        </NavLink>
      ),
    },
  ];
  `;

  const code = `<FullBurgerMenu
  routes= Insert your routes object here!!!!!
  burger="${state.burger}"
  burgerWidth="${state.burgerWidth}"
  barColor="${state.barColor}"
  primaryLight="${state.primaryLight}"
  primaryDark="${state.primaryDark}"
  primaryFont="${state.primaryFont}"
  burgerCircle={${state.burgerCircle}}
  burgerLeft="${state.burgerLeft}"
  burgerTop="${state.burgerTop}"
  fontFamily="${state.fontFamily}"
  />;

  {routes.map(({ path, Component }) => (
    <Route key={path} exact path={path} className="page">
      <Component />
    </Route>
  ))}`;

  return (
    // <div className="App">
    <>
      <FullBurgerMenu
        routes={routes}
        burger={state.burger}
        barColor={state.barColor}
        buttonColor={state.buttonColor}
        primaryLight={state.primaryLight}
        primaryDark={state.primaryDark}
        primaryFont={state.primaryFont}
        burgerCircle={state.burgerCircle}
        burgerLeft={state.burgerLeft}
        burgerTop={state.burgerTop}
        fontFamily={state.fontFamily}
        burgerWidth={state.burgerWidth}
      />
      <div className="container">
        <div className="hero">
          <h1>Welcome to Full Burger Menu</h1>
          <p>
            Full Burger Menu is a customizable and super-easy to use React component for making
            burger menus that display animated full-screen menus. The menu shows images linked to
            every option in the menu. For getting your own special burger just select the different
            options you have below, do 'npm i full-burger-menu' in you React app and copy the
            snippet provided below into your code. <br /> Enjoy!
          </p>
          <div class="arrow bounce">
            <i className="fa fa-arrow-down fa-1x" href="/"></i>
          </div>
        </div>
        <div className="customizations">
          <form action="">
            <h2>Choose your Burger</h2>
            <div className="form-section">
              <h4>Burger Animation</h4>
              <div className="radio-selection">
                {burgers.map(burger => {
                  return (
                    <>
                      <input
                        type="radio"
                        id={burger[0]}
                        name="burger"
                        onChange={handleChange}
                        value={burger[0]}
                      />
                      <label htmlFor={burger[0]}>{burger[1]}</label>
                    </>
                  );
                })}
              </div>

              <div className="inner-section">
                <label htmlFor="barColor">
                  <h4>Burguer Color</h4>
                </label>
                <div className="color-picker-circle">
                  <input
                    type="color"
                    name="barColor"
                    value={state.barColor}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="barColor"
                    value={state.primaryLight}
                    onChange={handleChange}
                  />
                </div>

                <h4>Burger Size</h4>
                <label htmlFor="burgerTop">Size</label>
                <input
                  type="range"
                  name="burgerWidth"
                  min="20"
                  max="70"
                  onChange={handleChange}
                ></input>
                <div>{state.burgerWidth} px</div>

                <h4>Burguer Circle</h4>
                <div className="radio-selection">
                  <input
                    type="radio"
                    id="true"
                    name="burgerCircle"
                    onChange={handleCircleChange}
                    value="true"
                  />
                  <label htmlFor="true">Yes</label>
                  <input
                    type="radio"
                    id="false"
                    name="burgerCircle"
                    onChange={handleCircleChange}
                    value="false"
                    checked={!state.burgerCircle}
                  />
                  <label htmlFor="false">No</label>
                </div>

                <h4>Burger Position</h4>
                <label htmlFor="burgerTop">Position Y</label>
                <input
                  type="range"
                  name="burgerTop"
                  value={state.burgerTop.slice(0, -1)}
                  min="1"
                  max="100"
                  onChange={handleChange}
                ></input>
                <div>{state.burgerTop}</div>
                <label htmlFor="burgerLeft">Position X</label>
                <input
                  type="range"
                  name="burgerLeft"
                  value={state.burgerLeft.slice(0, -1)}
                  id="burgerLeft"
                  min="1"
                  max="100"
                  onChange={handleChange}
                ></input>
                <div>{state.burgerLeft}</div>
              </div>
            </div>

            <h2>Add Some Flavours</h2>
            <div className="form-section">
              <div className="colors-container">
                <div className="colors-box">
                  <label htmlFor="primaryLight">
                    <h4>Primary Color</h4>
                  </label>
                  <div className="color-picker-circle">
                    <input
                      type="color"
                      name="primaryLight"
                      value={state.primaryLight}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="primaryLight"
                      value={state.primaryLight}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="colors-box">
                  <label htmlFor="primaryDark">
                    <h4>Secondary Color</h4>
                  </label>
                  <div className="color-picker-circle">
                    <input
                      type="color"
                      name="primaryDark"
                      value={state.primaryDark}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="primaryDark"
                      value={state.primaryDark}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <label htmlFor="fontFamily">
                <h4>Font Family</h4>
              </label>
              <p>
                Here you have some popular fonts to choose from. In case you want to use your own
                font, you could import it in your index.css of your React app and specify its name
                in the fontFamily prop.
              </p>
              <select className="select" id="fontFamily" name="fontFamily" onChange={handleChange}>
                {fonts.map(font => (
                  <option value={font}>{font}</option>
                ))}
              </select>
              <label htmlFor="primaryFont">
                <h4>Font Color</h4>
              </label>
              <div className="color-picker-circle">
                <input
                  type="color"
                  name="primaryFont"
                  value={state.primaryFont}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="primaryFont"
                  value={state.primaryFont}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div className="routes-section">
            <h2>One Last Thing...</h2>
            <p>
              In order for the router to work you should add in your App component an array called
              'routes' that includes objects with a 'path', 'img', 'name' and 'Component'. Something
              like this:
              <pre>
                <code className="language-javascript">{codeRoutes}</code>
              </pre>
            </p>
          </div>
          <div className="code-section">
            <h2>Your burger is ready:</h2>
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
          <h2>Enjoy!</h2>
        </div>
        <div></div>
      </div>
    </>
  );
}
