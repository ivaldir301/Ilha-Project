import styled from 'styled-components'
// import mockupimage from '@assets/images/mockupimage.png'

export const DivFirstPageSection = styled.div`
        text-align: center;
        margin: 40px 0 60px 0;
`;

export const FirstPageTitle = styled.span`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 3em;
    margin-bottom: 5px;
`;

export const FirstSectionSubtitleIntro = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const FirstSectionButton = styled.button`
    width: 150px;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #59D559;
    color: white;
    padding: 5px;
    line-height: 25px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-size: medium;
    &:hover{
        width: 170px;
        background-color: white;
        color: #59D559;
        border: 1px solid #59D559;
        font-weight: 600;
        transition: 1s;
        opacity: 1;
    }
`;
