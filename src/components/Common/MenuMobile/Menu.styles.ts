import styled, { css } from "styled-components";

export const Container = styled.section<{ display: boolean }>`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(72,171,79,1) 100%, rgba(61,144,72,1) 100%, rgba(89,213,89,1) 100%, rgba(0,212,255,1) 95%);

    opacity: 0;
    pointer-events: none;
    transition: .3s;
    transform: translate(50px);

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(1);
        transition: .7s;
    }

    ${(props) => props.display && css`
        opacity: 1;
        pointer-events: auto;
        transform: translate(0px);

        > svg {
            transform: rotate(0deg);
        }

        nav {
            transform: scale(1.3);
        }
    `}
`;

export const MenuNavLinks = styled.a`
    text-decoration: none;
    color: white;
`;