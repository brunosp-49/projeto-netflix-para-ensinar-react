import styled from "styled-components"
import back from "../../img/background.png"

export const MainContainer = styled.div`
font-family: 'Roboto' , sans-serif;
font-size: 2vw;
height: fit-content;
min-height: 100vh;
background-color: #000;
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
color: #fff;
padding-left: 2vw;
font-size: 4vh;
`

export const Part3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: fit-content;
min-height: 90vh;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
color: white;
`


// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `