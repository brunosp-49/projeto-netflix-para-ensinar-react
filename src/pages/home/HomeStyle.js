import styled from "styled-components"
import back from "../../img/background.png"

export const MainContainer = styled.div`
font-family: 'Roboto' , sans-serif;
font-size: 2vw;
height: fit-content;
min-height: 100vh;
background-color: black;
`

export const Part1 = styled.div`
height: 100vh;
background-image: url(${back});
background-position: center;
background-size: cover;
`

export const Part2 = styled.div`
display: flex;
height: 10vh;
background-color: black;
color: #fff;
padding-left: 2vw;

`

export const Part3 = styled.div`
display: flex;
justify-content: center;
height: fit-content;
min-height: 90vh;
background-color: black;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
color: white;
`

export const Grid = styled.div`
display: grid;
justify-content: center;
align-items: center;
min-height: 20vh;
padding: 10vh 0;
width: 80%;
gap: 3vw;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `