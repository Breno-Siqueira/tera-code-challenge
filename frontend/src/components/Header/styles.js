import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  
  background-color: ${props => props.theme.colors.headerBackground};
  display: flex;
  justify-content: space-between;
  padding: 0px 6rem;
  align-items: center;
  /* color:${props => props.theme.colors.text}; */
  input{
    height: 40px;
  }

  p{
    font-size: 2.4rem;
  }
`;
