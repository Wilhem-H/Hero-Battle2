import { useState } from "react"
import styled from "styled-components";


// ----------- CSS Styled Components ------------

const Button = styled.button`
    background-color: #15cc0a;
    color: white;
    margin-top: 50px;
`;

const Img = styled.img`
    width: 90%;
    max-height: 350px;
    border-radius: 5px;
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;



const Div = styled.div`
    background-color: brown;
    border-radius: 20px;
    height: auto;
    width: 45%;
`; 

const Hr = styled.hr `
    color: grey;
    background-color: grey;
    margin: 8px 2px 8px 2px
`;

const P = styled.p `
    margin-bottom: 20px
`;

// ----------- Card ------------------

function Card({hero}){

    if (localStorage.getItem(`${hero.name}`)) {
        hero.score = JSON.parse(localStorage.getItem(`${hero.name}`));
      }

    const addPoint = () => {
        hero.score +=1
        localStorage.setItem(`${hero.name}`, JSON.stringify(hero.score));
        window.location.reload()   
    }

    

    return(
        <Div className="card">
            <div className="insightCard">
                <figure className="img"><Img src={hero.img} alt={hero.name}/></figure>
                <Hr className= "separator"/>
                <div><h1>{hero.name}</h1><h3>Film: {hero.film}</h3></div>
                <div><Button onClick={addPoint} className="button">Gagnant</Button></div>
                <P>score : {hero.score}</P>
            </div>
        </Div>
    )
}

export default Card