import styled from 'styled-components'

export const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 10px;
    background-color: #EFFDEC;
    flex-direction: row;
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
`;

export const Copyright = styled.div`
    width: 100%;
    background: white;
    text-align: center;
    background-color: #EFFDEC;
`;

export const CopyrightText = styled.span`
    font-size: 13px;
    flex-direction: column;
`;

export const HelpCenterBox = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 15px;
`;

export const DropDownFooterMenu = styled.ul`
    list-style: none;
    background-color: #59D559;
    color: white;
    width: 100px;
    padding: 10px 10px;
    border-radius: 5px;
    position: absolute;
    top: 247px;
    left: 75%;
`;

export const DropDownFooterMenuItems = styled.li`
    font-size: 1.1em;
`;

// export const LanguageSelector = styled.select`
//     border: 1px solid;
//     font-size: 1em;
//     margin-top: -8px;
//     &:focus{
//         border: 1px solid
//     }
// `;