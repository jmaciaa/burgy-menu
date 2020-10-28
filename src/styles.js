import styled from 'styled-components';

export const StyledBurger = styled.div`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  .btn {
    height: 100px;
    width: 100px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${({ theme }) => theme.burgerTop};
    left: ${({ theme }) => theme.burgerLeft};
    z-index: 10;
    border-radius: 50%;
    border: ${({ theme }) => (theme.burgerCircle ? 'solid black 2px' : 'none')};
    background: ${({ theme }) => (theme.burgerCircle ? 'white' : 'transparent')};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 50px;
      width: 50px;
      right: 5%;
      top: 5%;
    }
  }
`;

export const StyledMenu = styled.nav`
  z-index: 9;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.7s cubic-bezier(0.52, 0.16, 0.04, 0.95);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }

  .left {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${({ open }) => (open ? '50vw' : '0px')};
    transition: width 0.3s cubic-bezier(0.71, 0.64, 0.91, 0.97);
    transition-delay: 0.6s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primaryDark};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100vw;
    }
  }

  .links {
    opacity: ${({ open }) => (open ? '1.0' : '0.0')};
    transition: opacity 0.3s cubic-bezier(0.71, 0.64, 0.91, 0.97);
    transition-delay: 1s;
    display: flex;
    margin: auto;
    width: max-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      transition-delay: 0.7s;
    }

    &:hover > a {
      opacity: 0.5;
    }

    &:hover > a:hover {
      opacity: 1;
    }
  }

  .right {
    width: 50vw;
  }

  .img {
    height: 70vh;
    position: fixed;
    top: 15%;
    left: 60%;
    width: 25%;
    border: solid 5px ${({ theme }) => theme.primaryDark};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: opacity 0.6s cubic-bezier(0.71, 0.64, 0.91, 0.97);
    transition-delay: 1s;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  }

  a {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 6rem;
    text-align: center;
    width: 100%;
    cursor: pointer;
    letter-spacing: -0.1rem;
    color: ${({ theme }) => theme.primaryFont};
    text-decoration: none;
    transition: opacity 0.2s cubic-bezier(0.71, 0.64, 0.91, 0.97);

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
      padding: 2rem 0;
    }
  }
`;
