import styled from "styled-components";

export const FourthPageSectionDiv = styled.div`
    padding: 0px 40px;
`;

export const FourthPageSectionCardWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 50px;
    height: 340px;
`;

export const FourtPageSectionTitle = styled.span`
    font-size: 1.4em;
    font-weight: 500;
    margin-bottom: 50px;
`;

export const FourthPageCards = styled.div`
    background: white;
    height: 270px;
    width: 300px;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
    text-align: left;
    border: 1px solid #c4c4c4;
`;

export const CardTextDiv = styled.div`
    padding: 5px 15px;
`;

export const CardsTitle = styled.h1`
    margin-top: 15px;
    font-size: 1.1em;
    font-weight: 500;
`;

export const CardsText = styled.p`
    margin-top: -5px;
    font-size: 0.9em;
    color: #4b4b4b;
`;