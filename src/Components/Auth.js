import styled from 'styled-components';
export const AuthStyle = styled.section`
.auth{
    padding: 2rem;
    background-color: #fff;
  }
  
  .auth label{
    margin-bottom: 1rem;
  }
  
  .auth input{
    height: 3rem;
  }
  
  .auth button{
    width: 100%;
    font-size: 1.1rem;
  }
  
  .auth button:hover{
    text-decoration: none;
  }
  
  .auth a{
    color: #26619c;
    font-weight: 501;
    font-size: .9rem;
    text-decoration: underline;
  }
  
  .auth .paragraph{
    color: #5c5c5c;
    font-weight: 501;
    font-size: .9rem;
  }
  
  .auth .text{
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .auth .text .heading{
    text-align: left;
    font-size: 1.5rem;
    color: #090909;
    font-weight: 501;
  }
  
  .auth .text a{
    color: #26619c;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 501;
  }
  
  .auth .box:nth-of-type(2) img{
    width: 100%;
  }
  
  .auth .wrapper{
    max-width: 80%;
    margin: 1rem auto;
  }

  @media screen and (min-width:800px){
    .auth .boxes{
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    .auth .box{
        width: 49%;
    }
  }
`;