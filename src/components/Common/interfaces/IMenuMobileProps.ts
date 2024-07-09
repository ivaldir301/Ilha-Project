import { Dispatch, SetStateAction } from "react";

export interface MenuMobileProps{
    menuIsVisible: boolean,
    setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}