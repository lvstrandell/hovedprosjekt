import styled from 'styled-components';

export const ProfileMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.section`
  margin-top: 10%;
  width: 30rem;
  height: 100%;
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2rem;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 #333;
  border-radius: 5px;

  h2 {
    font-size: 1.5rem;
    margin: 1em;
  }

  p {
    border-bottom: 2px solid black;
    margin: 1em auto;
    font-size: 1.5rem;
  }

  button{
    padding: .7em;
    color: #fff;
    background-color: #333;
    margin: .5em;

    transition: 100ms;

    &:hover {
      transform: translateY(-2px);
      opacity: .7;
    }
  }
`;