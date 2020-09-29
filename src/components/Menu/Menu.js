import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { bool } from 'prop-types';

import { StyledMenu } from '../../styles';

const Menu = ({ open, routes, setOpen }) => {
  const [image, setImage] = useState(routes[0].img);

  const changeImage = (e) => {
    const img = e.target.attributes.getNamedItem('dataset').value;
    setImage(img);
  };

  return (
    <StyledMenu open={open}>
      <div className="background"></div>
      <div className="left">
        <div className="links">
          {routes.map((route) => {
            return (
              <NavLink
                key={route.name}
                dataset={route.img}
                to={route.path}
                className="link"
                exact
                onClick={() => setOpen(false)}
                onMouseEnter={changeImage}
              >
                {route.name}
              </NavLink>
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
  open: bool.isRequired,
};

export default Menu;
