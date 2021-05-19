import styled from 'styled-components';

export const ItemContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 720px;
  gap: 1em;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr)
  }
`;


export const StoreItems = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1);
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 17rem;
  width: 15rem;
  box-shadow: 1px 1px 7px 0px #333;
  border-radius: 5px;
  width: 80%;

  @media screen and (max-width: 768px) {
    height: 15rem;
    width: 12rem;
    grid-template-columns: repeat(1, .5fr);
  }

  img {
    margin: auto;
  }

`;

export const CartButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: .7rem;
  padding: .4rem;
  border-radius: 5px;
  cursor: pointer;
  max-width: 7rem;
  margin: auto;
  
  transition: transform 100ms;

  &:hover {
    opacity: .9;
    font-weight: 900;
    border: 2px solid black;
    transform: translateY(-3px);
  }

  @media screen and (max-width: 768px) {    
  }
`;
