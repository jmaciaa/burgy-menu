# Full-burger-menu

Full-burger-menu is a highly customizable React component that allows you to create a burger menu in just a couple of minutes. It was especially designed for professional portfolios and small brands websites.

# Getting Started

 ```sh
$ npm i full-burger-menu
```
You might also need to install peer dependencies

 ```sh
$ npm i styled-components react-animated-burgers
```

# How to use

You can head to this demo and customize your own burger menu.

**Step 1:** Import the component
 ```js
import FullBurger from 'full-burger-menu';
```

**Step 2:** Import your images
```js
import home from './assets/home.jpg';
import about from './assets/about-us.jpg';
import work from './assets/work.jpg';
import contact from './assets/contact.jpg';
```


**Step 3:** Use it in your app

```js
<BurgyComponent
  routes= Insert your routes object here!
  burger="hamburgerSpin"
  barColor="#000000"
  primaryLight="#f5f5f5"
  primaryDark="#000000"
  primaryFont="#ffffff"
  burgyCircle={false}
  burgyLeft="90%"
  burgyTop="3%"
  fontFamily="Courier"
  />;
```
# Configuration

Your routes object should look something like this:
```js
const routes = [
  {
    img: home,
    Component: props => <NavLink to="/" exact>Home</NavLink>
  },
  {
    img: about,
    Component: props => <NavLink to="/about" exact>About</NavLink>
  },
  {
    img: work,
    Component: props => <NavLink to="/product" exact>Product</NavLink>
  },
  {
    img: contact,
    Component: props => <NavLink to="/contact" exact>Contact</NavLink>
  },
];
```
# Contributing
To contribue please read the [CONTRIBUTING.md](https://github.com/jmaciaa/full-burger-menu/blob/master/CONTRIBUTING.MD)

# License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jmaciaa/full-burger-menu/blob/master/LICENSE) file for details.

