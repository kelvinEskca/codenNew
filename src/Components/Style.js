import styled from 'styled-components';
export const GlobalStyle = styled.main`
*,::after,::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html{
    scroll-behavior: smooth;
  }
  
  body{
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #f5f5f5;
  }
  
  main,section,section .wrapper,section .boxes,section .box,span,div,form,footer,header,label,.desktop,.mobile{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  h1,h2,h3,p,li,ul,ol,a,span,small,div,b,button,label,input,select,textarea,.heading,.paragraph{
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
  }
  
  .heading{
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .paragraph{
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: .5rem;
    max-width: 600px;
  }
  
  input,select,textarea{
    width: 100%;
    outline: none;
    border: none;
    height: 2.4rem;
    border-radius: .2rem;
    padding: .3rem;
    border: 1px solid #ccc;
    font-size: .8rem;
  }
  
  button{
    height: 2.4rem;
    border: 1px solid #26619c;
    color: #26619c;
    font-size: .9rem;
    width: 7rem;
    border-radius: .3rem;
    background-color: transparent;
    cursor: pointer;
  }
  
  button:hover{
    background-color: #26619c;
    color: #fff;
    text-decoration: underline;
  }
  
  
  input:hover,input:focus,input:active,select:hover,select:focus,select:active,textarea:hover,textarea:focus,textarea:active{
    border: 1px solid #ccc;
    outline: #ccc;
  }
  
  textarea{
    height: auto;
  }
  
  section .auto-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 2rem;
  }
  
  .desktop{
    display: none;
  }
  
  .mobile{
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  .mobile .left{
    width: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  .mobile .right{
    width: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  .mobile .right .box{
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: .2rem;
    padding: .4rem;
  }
  
  .mobile .right .round-box{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:1px solid #ccc
  }
  
  .mobile .right .box img{
    width: 20px;
  }
  
  .mobile .right .box:hover{
    background-color: #26619c19;
  }
  
  .mobile .right .count{
    position: absolute;
    background-color:#dc2626;
    border-radius: .5rem;
    width: .9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    right: .3rem;
    top: .1rem;
  }
  
  .mobile .right .count small{
    color: #fff;
    font-size: .9rem;
    font-weight: 400;
  }
  
  header{
    position: fixed;
    padding: 1rem;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 1px 1px #00000011;
  }
  
  header aside{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 5rem;
    left: -100rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  header aside .left-pane{
    width: 40%;
    height: 100%;
    background-color: #fff;
    padding: 1rem;
  }
  
  header aside .left-pane .top{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  header .heading{
    font-size: 1.2rem;
  }
  
  header aside .right-pane{
    background-color: #090909;
    width: 60%;
    height: 100%;
    opacity: .5;
  }
  
  main{
    padding-top: 5rem;
  }
  
  footer{
    background-color: #e5e5e5;
    padding: 1rem;
  }
  
  footer a{
    color: #26619c;
    font-size: .9rem;
  }
  
  footer .paragraph{
    color: #5c5c5c;
    font-size: .9rem;
    text-align: center;
    margin-bottom: 1rem;
    max-width: 100%;
  }
  
  footer .footer-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  footer .footer-box span{
    display: flex;
    flex-direction: row;
  }
  
  .footer-list{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    gap: .2rem;
    place-items: center;
    place-content: center;
  }
  
  .data{
    padding: 1rem;
  }
  
  .data .wrapper > .heading{
    font-weight: 600;
  }
  
  .data .box{
    background-color: #fafafa;
    border: 1px solid #e5e5e5;
    border-radius: .3rem;
    padding: 1rem;
  }
  
  .data .box .heading{
    margin-bottom: .2rem;
    font-weight: 600;
  }
  
  .data .box .paragraph{
    color: #5c5c5c;
  }
  
  .data form{
    margin-bottom: 1rem;
  }
  
  .data select{
    height: 2.5rem;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: .4rem;
    padding: .5rem;
  }
  
  .post{
    padding: 0;
  }
  
  .post .box:nth-of-type(2) .bottom{
    border-radius: .4rem;
  }
  
  .post .box:nth-of-type(2) .top{
    display: none;
  }
  
  .post .box:nth-of-type(2) .bottom{
    background-color: #fafafa;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .post .box:nth-of-type(2) .bottom .paragraph{
    text-align: center;
    line-height: 1.5rem;
    max-width: 100%;
  }
  
  .post .bottom button,.subscribe-btn{
    width: 12rem;
    background-color: #26619c;
    color: #fff;
  }
  
  .post .post-box{
    display: none;
  }
  
  .logo{
    width: 40px;
  }
  
  .sub{
    padding: 1rem;
    background-color: #01192d;
    height: 50vh;
    justify-content: center;
  }
  
  .text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .text span{
    color: #d4d4d4;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .text .heading{
    font-size: 2rem;
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
  }
  
  .sub form{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1rem;
  }
  
  .sub .subscribe-btn{
    width: 100%;
  }
  
  .roles{
    padding: 1rem;
    padding-block: 4rem;
  }
  
  .roles .box{
    box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: .3rem;
    background-color: #fff;
    padding: 1rem;
    cursor: pointer;
  }
  
  .roles .box img{
    width: 60px;
    margin-bottom: 1rem;
  }
  
  .roles .text{
    margin-bottom: 2rem;
  }
  
  .roles .text .heading{
    color: #090909;
    max-width: 100%;
  }
  
  .roles .text span{
    color: #01192d;
  }
  
  .roles .box .heading{
    margin-bottom: .2rem;
    font-size: 1.2rem;
    font-weight: 501;
    color: #01192d;
  }
  
  .roles .box .paragraph{
    color: #5c5c5c;
  }
  
  .info{
    padding: 1rem;
    background-color: #fff;
  }
  
  .info .box{
    margin-bottom: 1rem;
  }
  
  .info .column{
    margin-bottom: 1rem;
  }
  
  .info .column span{
    text-transform: uppercase;
    font-weight: 400;
    font-size: .8rem;
    color: #212121;
  }
  
  .info .text{
    margin-bottom: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  
  .info .text .heading{
    font-size: 1.2rem;
    color: #01192d;
    font-weight: 700;
    margin: 0;
  }
  
  .info a{
    margin-bottom: 1rem;
  }
  
  .info ul{
    list-style-type: disc;
  }
  
  .info li{
    font-size: 1rem;
    color: #5c5c5c;
    list-style-type: disc;
    padding: 1rem;
  }
  
  .info .paragraph{
    font-size: 1rem;
    color: #5c5c5c;
    line-height: 1.6rem;
  }
  
  .info .first .heading{
    font-size: 3rem;
    max-width: 100%;
    margin-bottom: 2rem;
    color: #01192d;
  }
  
  .info .first .circle-holder{
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  
  .info .first .circle-holder img{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
  
  .info .first .circle-holder .heading{
    font-weight: 400;
    font-size: 1.7rem;
    margin: 0;
  }
  
  .info .italics{
    font-style: italic;
    font-weight: 501;
    font-size: .9rem;
  }
  
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
  
  .social-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .social-box{
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: .2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .5rem;
  }
  
  .social-box:hover{
    background-color: #aaaaaa11;
  }
  
  .social-box img{
    width: 24px;
  }
  
  @media screen and (min-width:376px){
    #root{
      width: 100%;
    }
  
    body{
      max-width: 100%;
    }
  }
  
  @media screen and (min-width:550px){
    .sub form{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  
    .sub .box{
      align-items: center;
      justify-content: center;
    }
  
    .sub .subscribe-btn,.sub label:nth-of-type(2){
      width: 10rem;
    }
  
    .sub label:nth-of-type(1){
      max-width: 400px;
    }
  
    .sub .text .heading{
      font-size: 2rem;
    }
  }
  
  @media screen and (min-width:800px){
    .desktop{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  
    .desktop .left{
      max-width: 330px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  
    .desktop .left .search-box{
      max-width: 280px;
    }
  
    .desktop .right{
      width: 240px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  
    .desktop .right .box{
      position: relative;
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: .2rem;
      padding: .4rem;
    }
    
    .desktop .right .round-box{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border:1px solid #ccc
    }
    
    .desktop .right .box img{
      width: 20px;
    }
    
    .desktop .right .box:hover{
      background-color: #26619c19;
    }
    
    .desktop .right .count{
      position: absolute;
      background-color:#dc2626;
      border-radius: .5rem;
      width: .9rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      right: .3rem;
      top: .1rem;
    }
    
    .desktop .right .count small{
      color: #fff;
      font-size: .9rem;
      font-weight: 400;
    }
  
    .mobile{
      display: none;
    }
  
    header aside{
      display: none;
    }
  
  
    footer{
      padding: 3rem;
      padding-inline: 12rem;
    }
  
    .info{
      padding: 3rem;
    }
  
    .sub{
      padding-block: 5rem;
    }
  
    header{
      padding-block: 1rem;
    }
  
    .data form{
      display: none;
    }
  
    .post .box:nth-of-type(2) .top{
      display: flex;
    }
  
    .post .post-box{
      display: flex;
      padding: 1rem;
      width: 20%;
    }
  
    .post .postlist{
      width: 100%;
    }
  
    .post-box li{
      padding: .4rem;
      border-radius: .3rem;
    }
  
    .post-box li:hover{
      background-color: #26619c18;
    }
  
    .post-box a{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #090909;
    }
  
    .post-box li:hover a{
      color: #26619c;
    }
  
    .post-box .count{
      width: 20px;
      height: 30px;
      background-color: #d4d4d4;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: .5rem;
    }
  
    .post-box .count .paragraph{
      margin: 0;
    }
  
    .post .boxes{
      flex-direction: row;
      align-items: flex-start;
      justify-content:flex-start;
    }
  
    .post .box:nth-of-type(2){
      width: 80%;
      padding-inline: 1rem;
    }
  
    .post .active{
      background-color: #fff;
    }
  
    .post .active:hover{
      background-color: #fff;
    }
  
    .post .active:hover a{
      color: #26619c;
    }
  
    .text .heading{
      font-size: 2.5rem;
      max-width: 500px;
      font-weight: 800;
      text-align: center;
    }
  
    .sub{
      height: 70vh;
    }
  
    .info .boxes{
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  
    .info .box:nth-of-type(1){
      width: 60%;
    }
  
    .info .box.box:nth-of-type(2){
      width: 35%;
    }
  
    .roles .boxes{
      padding-inline: 3rem;
    }
  
    .auth .boxes{
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  
    .auth .box{
      width: 49%;
    }
  }
  
  @media screen and (min-width:1000px){
    .sub .text .heading{
      font-size: 3rem;
      max-width: 700px;
      line-height: 3rem;
    }
  }
  
  @media screen and (min-width:1200px){
    .text .heading{
      font-size: 3.5rem;
      margin-top: .5rem;
    }
  }
`;