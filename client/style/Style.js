import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
	--font-family: 'Source Code Pro', monospace;
	
	--color-primary: rgba(37, 37, 37, 1.0);
	--color-secondary: rgba(252, 41, 74, 1.0);
	--color-shades: rgba(238, 238, 238, 1.0);
	
	--font-size-xl: calc(1.625rem + 4.5vw);
}

html {
	font-size: 100%;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: inherit;
	scroll-behavior: smooth;
	margin: 0;
	padding: 0;
}

body {
	font-family: var(--font-family);
	line-height: 1.6;
}

.container {
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
}

.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.card {
  background: rgba(245, 245, 245, 1.0);
  color: rgba(68, 68, 68, 01);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
	width: 25rem;
  min-height: 300px;
  position: relative;
  top: 0;
  transition: all .1s ease-in;
}

.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

.card  .cardImg{
	width: 100%;
  background-size: cover;
  background-position: center center;
}

.card .cardBody {
  padding: 20px;
	text-align: center;
}

`
