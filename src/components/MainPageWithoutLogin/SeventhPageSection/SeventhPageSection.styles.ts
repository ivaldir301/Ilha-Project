import styled from "styled-components";

export const SectionDiv = styled.div`
    padding: 40px 40px;
    background-color: #EFFDEC;
    text-align: center;
    margin-bottom: 80px;
`;

export const SectionTitle = styled.h1`
    font-size: 1.4em;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const SectionCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 50px;
    height: 350px;
`;

export const SectionCards = styled.div`
    background: white;
    height: 180px;
    width: 280px;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
    text-align: left;
    border: 1px solid #c4c4c4;
    padding: 50px 40px;
`;

export const SectionCardsTestimonialText = styled.span`
    font-size: 1.3em;
    color: #4b4b4b;
`;

export const SectionCardsTestimonialPersonName = styled.h2`
    font-size: 1em;
    margin-top: 50px;
`;