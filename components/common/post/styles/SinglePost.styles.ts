import styled from "styled-components";



export const SinglePostContainer = styled.div`
display:grid;
grid-template-columns: minmax(10rem,30rem);
justify-content:center;
/* background-color: #500000; */
@media (min-width: 1400px) {
    grid-template-columns: minmax(10rem,50rem);
  }
`

export const PostContentContainer = styled.div`
display: flex;
flex-direction: column;
`