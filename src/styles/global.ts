import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --main-bg-color: #ffffff;
        --forehead-bg-color: #f0f0f0;
        --icon-bg-color: #ff6582;
        --color-primary: #e0138c;
        --normal-text: #333333;
        --sub-text: #666666;
        --border-color: #cccccc;
        --color-danger: #e01324;
    }

    html, 
    body, 
    #__next {
        height: 100vh;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-y: scroll;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    #__next { 
        background-color: var(--main-bg-color);
        color: var(--normal-text);
    }

    a {
        color: var(--color-primary);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`

export default GlobalStyles
