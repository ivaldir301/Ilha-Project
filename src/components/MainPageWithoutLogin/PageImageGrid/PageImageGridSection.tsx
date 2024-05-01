import { GridImages, ImageGridDiv } from "./PageImageGridSection.styles"
import cvwomenimg from "../../../assets/images/cvwomenimg.jpg"
import cidadevelhaimg from "../../../assets/images/cidadevelhaimg.jpg"
import fishermanimg from "../../../assets/images/fishermanimg.jpg"

export const PageImageGridSection = () => {
    return <>
        <ImageGridDiv>
            <GridImages src={fishermanimg} alt="fisherman photo"></GridImages>
            <GridImages src={cidadevelhaimg} alt="photo of cidade velha"></GridImages>
            <GridImages src={cvwomenimg} alt="photo of a cape-verdean women at a market"></GridImages>
        </ImageGridDiv>
    </>
}