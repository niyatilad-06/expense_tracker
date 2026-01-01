import React from 'react';
import styled from 'styled-components';
import girl from '../../img/girl.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import { useNavigate, Link } from 'react-router-dom';

function Navigation({ active, setActive }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear(); 
    navigate('/login');   
  };

  return (
    <NavStyled>
      <div className="user-con">
        <img src={girl} alt="user" />
        <div className="text">
          <h2>Niyati</h2>
          <p>Your Money</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      <ul className="bottom-nav">
        <li onClick={handleSignOut} className="signout">
          {signout}
          <span>Sign Out</span>
        </li>
      </ul>

      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 88vh;
  margin-top: 0.5vh;
  margin-bottom: 0;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }

      &:hover {
        color: rgba(34, 34, 96, 1);
        i {
          color: rgba(34, 34, 96, 1);
        }
      }
    }
  }

  .bottom-nav {
    list-style: none;
    padding-left: 0;
    margin-top: auto;
    margin-bottom: 0;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      color: rgba(34, 34, 96, 0.6);
      cursor: pointer;
      transition: all 0.3s ease;
      padding-left: 1rem;
      padding-bottom: 0;
      margin-bottom: 0;

      &:hover {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;

    .menu-items,
    .bottom-nav {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .user-con {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export default Navigation;
