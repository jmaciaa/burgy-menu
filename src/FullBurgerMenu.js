import React, { useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import {
  HamburgerSpin,
  HamburgerSlider,
  HamburgerElastic,
  HamburgerCollapse,
  HamburgerArrowTurnReverse,
  HamburgerSpring,
  HamburgerArrowReverse,
  HamburgerStand,
} from 'react-animated-burgers';

import Menu from './Menu';
import { StyledBurger } from './styles';

function FullBurgerMenu(props) {
  const {
    routes = [],
    burger = 'hamburgerSlider',
    barColor = 'black',
    buttonColor = 'blue',
    primaryLight = 'red',
    primaryDark = 'blue',
    primaryFont = 'grey',
    burgerCircle = true,
    burgerLeft = '5%',
    burgerTop = '3%',
    fontFamily = 'Times New Roman',
  } = props;

  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(() => setIsActive(prevState => !prevState), []);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const mobileWidth = 576;

  const burgers = {
    hamburgerCollapse: HamburgerCollapse,
    hamburgerSpin: HamburgerSpin,
    hamburgerSlider: HamburgerSlider,
    hamburgerElastic: HamburgerElastic,
    hamburgerArrowTurnReverse: HamburgerArrowTurnReverse,
    hamburgerSpring: HamburgerSpring,
    hamburgerArrowReverse: HamburgerArrowReverse,
    hamburgerStand: HamburgerStand,
  };

  const Burger = burgers[burger];

  const theme = {
    ...props,
    mobile: '576px',
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledBurger>
        <>
          <div className="btn">
            <Burger
              {...{ isActive, toggleButton }}
              barColor={barColor}
              buttonWidth={width > mobileWidth ? 40 : 20}
            />
          </div>
          <div>
            <Menu open={isActive} setOpen={setIsActive} routes={routes} />
          </div>
        </>
      </StyledBurger>
    </ThemeProvider>
  );
}

FullBurgerMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  burger: PropTypes.string.isRequired,
  barColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  primaryLight: PropTypes.string.isRequired,
  primaryDark: PropTypes.string.isRequired,
  primaryFont: PropTypes.string.isRequired,
  burgerCircle: PropTypes.bool.isRequired,
  burgerLeft: PropTypes.string.isRequired,
  burgerTop: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
};
export default FullBurgerMenu;
