import styled from 'styled-components'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
`;

export const Logo = styled.span`
    font-size: larger;
    font-weight: 900;
    color: #59D559;
`;

export const Navlist = styled.ul`
    list-style-type: none;
    display: flex;
    margin-right: -100px;
`;

export const NavListItem = styled.li`
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: -8px;
    cursor: pointer;
`;

export const NavlinkItemHighlighted = styled.li`
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: -17px;
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;
    &:hover {
        border: 1px solid  #c4c4c4;
        transition: 1s;
    }
`;

export const Link = styled.a`
    font-size: 1em;
    text-decoration-style: none;
    text-decoration: none;
    color: #222222;
    &:hover {
        text-decoration: none;
        color: #c4c4c4;
        transition: all 0.8s;
    }
`;

export const BtnWrapper = styled.div`
    margin-top: 10px;
`;

export const RegisterAndLoginButton = styled.span`
    margin-left: 5px;
    margin-right: 5px;;
    &:hover{
        color: #59D559;
        transition: 1s;
        cursor: pointer
    }
`;

export const LoginButton = styled.button`
    width: 100px;
    background: white;
    color: #59d559;
    padding: 5px;
    line-height: 25px;
    border-radius: 25px;
    border: none;
    font-size: medium;
    margin-right: 3px;
    margin-left: 45px;
    &:hover{
        border: 1px solid #59D559;
        color: #59D559;
        cursor: pointer;
        transition: all 0.8s;
    }
`;

export const RegisterButton = styled.button`
    width: 100px;
    background: #59D559;
    color: white;
    padding: 5px;
    line-height: 25px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-size: medium;
`;

// export const LanguageSelector = styled.select`
//     border: 1px solid;
//     font-size: 1em;
//     margin-top: -8px;
//     margin-left: 20px;
//     &:focus{
//         border: 1px solid
//     }
// `;
