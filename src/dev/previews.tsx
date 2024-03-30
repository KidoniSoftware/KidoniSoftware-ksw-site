import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Header from "../Header";
import Main from "../Main";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/Main">
                <Main/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;