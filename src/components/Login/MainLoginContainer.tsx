import { LeftSideLoginContainer } from "./LeftSideLoginSection/LeftSideLoginSectionContainer"
import { RightSideLoginSectionContainer } from "./RightSideLoginSection/RightSideLoginSectionContainer"

export const MainLoginContainer = () => {
    return <>
        <RightSideLoginSectionContainer/>
        <LeftSideLoginContainer/>
    </>
}