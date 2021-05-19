import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  height: 25rem;
  margin: 2rem auto;
  box-shadow: 1px 1px 10px #333;
  border-radius: 5px;

  /* background: rgba( 255, 0, 0, 0.45 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
   */

  input {
    margin: 1rem auto;
    border-radius: 20px;
    padding: .5em;
    background-color: #333;
    color: #fff;
    @media screen and (max-width: 768px){ font-size: .8rem }
    @media screen and (max-width: 480px){ font-size: .5rem }
  }

  button {
    background-color: #333;
    color: #fff;
    border-radius: 20px;
    padding: .8em 2em;
    margin-top: 2em;

    &:hover{
      transform: translateY(-2px);
      opacity: .8;
    }
    @media screen and (max-width: 768px){ font-size: .8rem;}
    @media screen and (max-width: 480px){ font-size: .5rem; }
  }

  a {
    margin-top: 1em;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    padding: .5em;

    &:hover {
      color: #333;
      background-color: #fff;
      cursor: pointer;
      border-radius: 20px;
    }
    @media screen and (max-width: 768px){ font-size: .8rem }
    @media screen and (max-width: 480px){ font-size: .5rem }
  }

  @media screen and (max-width: 1050px){ font-size: .8rem; height: 30rem;  margin-top: 6rem; }
  @media screen and (max-width: 768px){ font-size: .8rem; margin-top: 3rem; }
  @media screen and (max-width: 480px){ font-size: .5rem; width: 15rem; height: 20rem;}
`;

export default LoginForm;