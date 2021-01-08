import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import FullBurgerMenu from 'full-burger-menu';
// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import { slugify } from './utils';
import 'font-awesome/css/font-awesome.min.css';

// components
import DataInput from './components/DataInput';
import ColorPicker from './components/ColorPicker';
import RangeInput from './components/RangeInput';

// styles
import './App.css';
import './prism.css';

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
  const clickMsg = useRef(null);
  const [links, setLinks] = useState(['Home', 'About us', 'Our Work', 'Contact']);
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=960&fit=crop',
    'https://images.unsplash.com/photo-1519090846590-90696b6a0af4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=960&fit=crop',
    'https://images.unsplash.com/photo-1546435467-ed1e00be6eb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=960&fit=crop',
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=960&fit=crop',
  ]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(clickMsg);
      if (window.scrollY > 0) clickMsg.current.style.opacity = 0;
      else clickMsg.current.style.opacity = 100;
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    {
      img: images[0],
      Component: props => (
        <NavLink to={`/${slugify(links[0])}`} exact>
          {links[0]}
        </NavLink>
      ),
    },
    {
      img: images[1],
      Component: props => (
        <NavLink to={`/${slugify(links[1])}`} exact>
          {links[1]}
        </NavLink>
      ),
    },
    {
      img: images[2],
      Component: props => (
        <NavLink to={`/${slugify(links[2])}`} exact>
          {links[2]}
        </NavLink>
      ),
    },
    {
      img: images[3],
      Component: props => (
        <NavLink to={`/${slugify(links[3])}`} exact>
          {links[3]}
        </NavLink>
      ),
    },
  ];

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

  const handleInputChange = (e, type) => {
    const name = e.target.name;
    const value = e.target.value;
    if (type === 'link') {
      const newLinks = links.map((el, i) => {
        if (i.toString() === name) return value;
        return el;
      });
      setLinks(newLinks);
    } else {
      const newImages = images.map((el, i) => {
        if (i.toString() === name) return value;
        return el;
      });
      setImages(newImages);
    }
  };

  const handleCircleChange = e => {
    setState(prevState => {
      return { ...state, burgerCircle: !prevState.burgerCircle };
    });
  };

  const codeRoutes = `
  import { NavLink } from 'react-router-dom'

  const routes = [
    {
      img: '${images[0]}',
      Component: (props) => (
        <NavLink to="/${slugify(links[0])}" exact>
          ${links[0]}
        </NavLink>
      ),

    },
    {
      img: '${images[1]}',
      Component: (props) => (
        <NavLink to="/${slugify(links[1])}" exact>
          ${links[1]}
        </NavLink>
      ),
    },
    {
      img: '${images[2]}',
      Component: (props) => (
        <NavLink to="/${slugify(links[2])}" exact>
          ${links[2]}
        </NavLink>
      ),
    },
    {
      img: '${images[3]}',
      Component: (props) => (
        <NavLink to="/${slugify(links[3])}" exact>
          ${links[3]}
        </NavLink>
      ),
    },
  ];
  `;

  const code = `<FullBurgerMenu
  routes={routes}
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
  />`;

  // {routes.map(({ path, Component }) => (
  //   <Route key={path} exact path={path} className="page">
  //     <Component />
  //   </Route>))

  return (
    // <div className="App">
    <>
      <div className="reveal"></div>
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
          <div className="click-msg" ref={clickMsg}>
            <h5>Click to see a preview!</h5>
            <i className="fa fa-reply fa-2x"></i>
          </div>
          <h1>Welcome to Full Burger Menu</h1>
          <p>
            Full Burger Menu is a customizable and super-easy to use React component for making
            burger menus that display animated full-screen menus. The menu shows images linked to
            every option in the menu. For getting your own special burger just select the different
            options you have below. You can click on the burger icon in the top right to see the
            preview. Next, do 'npm i full-burger-menu' in you React app and finally copy the snippet
            provided below into your code. <br /> Scroll down to select the different options!
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

              <div className="data-input-container">
                <DataInput elements={links} type="link" handleInputChange={handleInputChange} />
                <DataInput elements={images} type="image" handleInputChange={handleInputChange} />
              </div>

              <div className="inner-section">
                <ColorPicker
                  type="barColor"
                  state={state}
                  title="Burger Color"
                  handleChange={handleChange}
                />

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

                <h4>Burger Circle</h4>
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
                <RangeInput
                  type="burgerTop"
                  state={state}
                  title="Position Y"
                  handleChange={handleChange}
                />
                <RangeInput
                  type="burgerLeft"
                  state={state}
                  title="Position X"
                  handleChange={handleChange}
                />
              </div>
            </div>

            <h2>Add Some Flavours</h2>
            <div className="form-section">
              <div className="colors-container">
                <ColorPicker
                  type="primaryLight"
                  state={state}
                  title="Primary Color"
                  handleChange={handleChange}
                />
                <ColorPicker
                  type="primaryDark"
                  state={state}
                  title="Secondary Color"
                  handleChange={handleChange}
                />
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
              <ColorPicker
                type="primaryFont"
                state={state}
                title="Font Color"
                handleChange={handleChange}
              />
            </div>
          </form>

          <div className="routes-section">
            <h2>One Last Thing...</h2>
            <p>Copy/paste this into your project...</p>
            <pre>
              <code className="language-javascript">{codeRoutes}</code>
            </pre>
          </div>
          <div className="code-section">
            <h2>Your burger is ready:</h2>
            <p>And this...</p>
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
          <p>
            Remember also to 'npm i react-router-dom', import BrowserRouter in the index.js of your
            React app and wrap the App component with the BrowserRouter wrapper.
          </p>
          <h2>Enjoy!</h2>
        </div>
        <div></div>
      </div>
    </>
  );
}
