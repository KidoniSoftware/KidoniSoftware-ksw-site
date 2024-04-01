import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Header from "../Header";
import Content from "../Content";
import App from "../App";
import BlogSection from "../BlogSection";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/Main">
                <Content/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/BlogSection">
                <BlogSection/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;