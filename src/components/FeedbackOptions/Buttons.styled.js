import styled from 'styled-components';

export const List = styled.ul`
display: flex;
justify-content: center;
gap: 20px;
list-style: none;
padding: 40px;
margin: 0 auto 40px auto;
width: 600px;


& :hover {
    background-color: white;
    transform: scale(1.1);
  }
`;


export const ButtonContainer = styled.button`
  padding: 8px 15px;
  background-color: beige;
  color: black;
  text-transform: capitalize;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  
`;