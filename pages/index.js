import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  border-radius: 5px;

  @media screen and (max-width: 1050px) {
      margin: 5em auto;
    }
  @media screen and (max-width: 768px) {
    margin: 3em auto;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StoreImage = styled.div`
  position: relative;
  width: 20vw;
  height: 35vh;
  margin: 4em auto;
  text-align: center;
  box-shadow: 1px 1px 7px 0px #333;


  &:hover{
      opacity: .8;
    }

    @media screen and (max-width: 1050px) {
      margin: 7em auto;
      height: 25vh;
    }
    @media screen and (max-width: 768px) {
      margin: 2em auto;
      width: 35vw;
    }
    @media screen and (max-width: 300px) {
      width: 45vw;
    }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: .8;
  }

  button {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: transparent;
    color: #333;
    border: none;
    font-size: 2rem;
    font-weight: 900;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 8px;
    opacity: .8;


    &:hover{
      background-color: #333;
      border-bottom: 1px solid rgb(253, 235, 25);
      padding: .3em;
      color: #fff;

    }

    @media screen and (max-width: 1200px) {
      padding: .5em 1em;
      font-size: 1rem;
    }
    @media screen and (max-width:768px) {
      padding: .5em 1em;
    }
    @media screen and (max-width: 480px) {
      font-size: .7rem;
    }
    @media screen and (max-width: 400px) {
      font-size: .5rem;
    }
    @media screen and (max-width: 300px) {
      letter-spacing: 4px;
    }
  }
`;

const Home = () => {


  return (
    <main>
      <section>
        <LinkContainer>
          <StoreImage>
            <img src='ceramics-hero.jpeg' />
            <Link href='/tablewarestore'><button>Tableware</button></Link>
          </StoreImage>
          <StoreImage>
            <img src='furniture-hero.jpeg' />
            <Link href='/furniturestore'><button>Furniture</button></Link>
          </StoreImage>
          <StoreImage>
            <img src='lamp-hero.webp' />
            <Link href='/lampstore'><button>Lights</button></Link>
          </StoreImage>
        </LinkContainer>

      </section>
    </main>
  )
}

export default Home;