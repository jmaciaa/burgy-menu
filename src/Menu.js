import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledMenu } from './styles';

const Menu = ({ open, routes, setOpen }) => {
  const [image, setImage] = useState(routes[0].img);

  let inputRef = useRef(new Array(routes.length));

  const changeImage = (e, i) => {
    const img = inputRef.current[i].attributes.dataset.value;
    setImage(img);
  };

  return (
    <StyledMenu open={open}>
      <div className="background"></div>
      <div className="left">
        <div className="links">
          {routes.map((route, i) => {
            const Component = route.Component;
            return (
              <div
                ref={el => (inputRef.current[i] = el)}
                onClick={() => setOpen(false)}
                onMouseEnter={e => changeImage(e, i)}
                key={route.img}
                dataset={route.img}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div
          className="img"
          style={{
            backgroundImage: 'url("' + image + '")',
          }}
        ></div>
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
