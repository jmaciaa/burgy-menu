import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledMenu } from './styles';

const Menu = ({ open, routes, setOpen }) => {
  let imgRef = useRef(null);

  const changeImage = (e, img) => {
    imgRef.style.backgroundImage = 'url("' + img + '")';
  };

  return (
    <StyledMenu open={open} routes={routes}>
      <div className="background"></div>
      <div className="left">
        <div className="links">
          {routes.map((route, i) => {
            const Component = route.Component;
            return (
              <div
                onClick={() => setOpen(false)}
                onMouseEnter={e => changeImage(e, route.img)}
                key={route.img}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="img" ref={el => (imgRef = el)}></div>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Menu;
