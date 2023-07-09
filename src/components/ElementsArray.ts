import { ReactElement } from "react"
import FirstElement from "./elements/FirstElement.";
import SecondElement from "./elements/SecondElement";
import ThirdElementElement from "./elements/ThirdElement";

const ElementsArray: ReactElement[] = [];
ElementsArray.push(FirstElement());
ElementsArray.push(SecondElement());
ElementsArray.push(ThirdElementElement());

export default ElementsArray;