import styled from "styled-components";

export const SectionDiv = styled.div`
    padding: 0px 40px; 
    margin-bottom: 70px;
`;

export const SectionTitle = styled.h1`
    font-size: 1.4em;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const SectionPlacesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const LinkBox = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;
`;

export const LinkBoxUlLi = styled.li`
    display: flex;
    gap: 10px;
    margin-top: 15px;
    list-style: none;
    text-decoration: underline;
    &:hover{
        color: #59D559;
        transition: 1s;
        cursor: pointer;
    }
`;

