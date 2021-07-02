import styled from "styled-components";

export const Container = styled.div`
  >div{
    margin-left: 8px;
  }
`;

export const BookContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .infor{
    width: 200px;
  }
  .imgcontent{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
  }
  h1{
    color:${props => props.theme.colors.text}
  }
  p{
    font-size: 16px;
    color:${props => props.theme.colors.text}
  }
`;
