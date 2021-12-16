import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --main-bg-color: #ffffff;
        --forehead-bg-color: #f0f0f0;
        --icon-bg-color: #ff6582;
        --normal-text: #333333;
        --highlight-text: #ff6366;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    #__next { 
        background-color: var(--main-bg-color);
        color: var(--normal-text);
        width: 100%;
    }

    a {
        color: var(--highlight-text);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`

export default GlobalStyles
