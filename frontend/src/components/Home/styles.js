import styled from "styled-components";

export const SearchContent = styled.div`
  height: 15rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div{
    display: flex;
    justify-content: space-between;
  }

  select,input{
    height:30px;
    
  }
  input{
    width: 300px;
  }
  

  p{
    font-size:1.6rem;
    color:${props => props.theme.colors.text};
    margin-left: 4px;
  }
`;

export const CardList = styled.div`
  margin-top: 2rem;
  width: 90%;
  max-width: 1024px;
  margin:auto;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));;
  grid-gap: 2rem; */
`;

export const Card = styled.div`
  width: 250px;
  min-width: 250px;
  height: 300px;
  box-shadow: black;
  padding: 0px 4px;
  /* background-color: blueviolet; */
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::first-child div{
    height: 70%;
  }
  .bottom-content{
    width: 100%;
    display: flex;
    flex-direction: row;

  }

  :hover {
  transform: translateY(-7px);
  }
  p{
    color:${props => props.theme.colors.text}
  }
`;

export const ImgContent = styled.div`
  height: 80%;
  min-height: 80%;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    max-width: 150px;
  }
`;

export const InfContent = styled.div`
  height: 80%;
  width: inherit;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  img{
    max-width: 160px;
  }
`;

export const LikeContent = styled.div`
  
  width: 30px;
  height: 10px;
`;
