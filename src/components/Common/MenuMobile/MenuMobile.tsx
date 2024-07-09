import { Container, MenuNavLinks } from "./Menu.styles";
import { IoCloseSharp } from "react-icons/io5";
import { MenuMobileProps } from "../interfaces/IMenuMobileProps";   
import { useEffect, useState } from "react";

const MenuMobile: React.FC<MenuMobileProps> = ({ menuIsVisible, setMenuIsVisible }) => {
    let [defaultValues, setDefaultValues] = useState(menuIsVisible ? 0 : 1)

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container display={menuIsVisible}>
            <IoCloseSharp size={45} color="#fff" onClick={() => setMenuIsVisible(false)}/>

            <nav>
                <MenuNavLinks href="#">Inicio</MenuNavLinks>
                <MenuNavLinks href="#">Lugares</MenuNavLinks>
                <MenuNavLinks href="#">Eventos</MenuNavLinks>
                <MenuNavLinks href="#">Ajuda</MenuNavLinks>
                <MenuNavLinks href="#">Login</MenuNavLinks>
                <MenuNavLinks href="#">Registro</MenuNavLinks>
            </nav>
        </Container>
    );
}

export default MenuMobile;