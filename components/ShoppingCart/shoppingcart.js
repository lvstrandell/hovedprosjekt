import styled from 'styled-components';

export const CartContainer = styled.article`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  max-height: 25rem;
  width: 60%;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: row;
  text-transform: capitalize;
  border-bottom: 1px solid lightgray;
  line-height: 1.5rem;
  margin-top: 1rem;

  li {
    margin-left: 1.5em;
  }
  
`;

export const CartRemoveBtn = styled.button`
  padding: .1rem .4rem;
  height: 1.5rem;
  margin-left: 6em;
  line-height: 2rem;
  background: transparent;
  border: none;
  border-radius: 3px;

  transition: ease 100ms;

  &:hover{
    color: #f21818;
    transform: scale(1.2)
  }
`;

export const CartTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 1em 3em;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CheckoutButton = styled.button`
  font-size: 1.5rem;
  color: #fff;
  background-color: #333;
  padding: .3em 1.5em;

  &:hover{
    opacity: .8;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 1em .8em;
  }
`;

export const CartTotal = styled.p`
  text-align: center;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;