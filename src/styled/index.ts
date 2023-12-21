import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    html,body,ul,li,div,p,header,main,nav,h1,h2,h3{
        margin: 0;
        padding:0;
    }
    html{
        width:100vw;
        height: 100vh;
        overflow: hidden;
    }
    *{
      font-family: SourceCodeProRoman-Regular;
    }
    body{
        width:100%;
        height: 100vh;
        overflow-y: auto;
        background-color: #0d121a;
        --grad:linear-gradient(10deg,#0e1219 20%,#0f3887 65%,#0f4fe5);
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
`