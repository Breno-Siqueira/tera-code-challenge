import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import '~antd/dist/antd.css';
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    html{
      font-size: 62.5%;
    }

    html,body{
      height: 100vh;
      background: ${props => props.theme.colors.background};
      color: white;
      font-family: 'Roboto',sans-serif;

    }

    input{
      border-radius: 2px;
      outline: none;
      border: none;
      margin: 4px;
      padding: 4px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      background-color: ${props => props.theme.colors.inputBackground};
      color: ${props => props.theme.colors.text};
      
    }
    ::placeholder{
      color: ${props => props.theme.colors.text};
    }

    select{
      border-radius: 2px;
      outline: none;
      border: none;
      margin: 4px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      background-color: ${props => props.theme.colors.inputBackground};
      color: ${props => props.theme.colors.text};
    }

    
    
    /* media queries */
    @media(max-width:768px){
      html{
        font-size: 50%;
      }
    }

    @media(max-width:768px){
      html{
        font-size: 45%;
        
      }
      input{
        width:100% !important;
      }
      .main-search{
        height: 20rem;
      }
      .search-section{
        display:flex;
        flex-direction:column;
      }
      .second-filter{
        display:flex;
        flex-direction:column;
      }
    }    
`;