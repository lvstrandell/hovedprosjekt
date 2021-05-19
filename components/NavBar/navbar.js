import Link from 'next/link';
import styled from 'styled-components';

const NavBarBase = styled.nav`
  min-width: 100%;
  position: relative;
  top: 0;
  background-color: #333;
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
  flex-direction: row;
  border-bottom: 5px solid #fff;

  ul {
    display: flex;
    gap: 2.5rem;
    align-items: center;
    list-style: none;
    margin: auto;
    height: 6em;


    @media screen and (max-width: 768px) { gap: 2rem;}
    @media screen and (max-width: 630px) { gap: 1.5rem;}
    @media screen and (max-width: 440px) { gap: 1rem;}
    @media screen and (max-width: 300px){ font-size: .7rem; gap: .5rem; }
  }

  li {
    transition: transform 100ms;

    &:hover{
      transform: translateY(-3px);
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    text-shadow: 1px 1px black;
    text-transform: uppercase;
         
     &:hover {
      border-bottom: 2px solid #fff;
     }

    @media screen and (max-width: 768px) { font-size: .8rem; }
    @media screen and (max-width: 630px) { font-size: .7rem; }
    @media screen and (max-width: 520px) { font-size: .6rem; }
    @media screen and (max-width: 440px) { font-size: .55rem; }
    @media screen and (max-width: 330px) { font-size: .5rem; }
  }`

  const NavTitle = styled.h1`
    font-size: 3rem;
    color: #cce6ff;
    text-shadow: 2px 3px #112233;
    border-bottom: 5px solid #cce6ff;
    border-radius: 5px;
    cursor: pointer;

    @media screen and (max-width: 768px){ font-size: 2rem; }
    @media screen and (max-width: 480px){ font-size: 1.5rem; }
    @media screen and (max-width: 300px){ font-size: 1rem; }
  `;

export default function NavBar () {


  return (
    <NavBarBase>
      <ul>
          <Link href="/"><NavTitle>SHOP</NavTitle></Link>
        <li>
          <Link href="/furniturestore">Furnitures</Link>
        </li>
        <li>
          <Link href="/tablewarestore">Tableware</Link>
        </li>
        <li>
          <Link href="/lampstore">Lamps</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </NavBarBase>
  )
}