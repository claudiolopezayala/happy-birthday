import { ReactElement } from "react"
import FirstElement from "./elements/FirstElement.";
import SecondElement from "./elements/SecondElement";
import ElementInterface from "./ElementInterface";
import ThirdElement from "./elements/ThirdElement";
import FourthElement from "./elements/FourthElement";
import FifthElement from "./elements/FifthElement";
import SixthElement from "./elements/SixthElement";
import SeventhElement from "./elements/SeventhElement";

const ElementsArray: ElementInterface[] = [];
ElementsArray.push({
    element: FirstElement(),
    showingTime: 3000});

ElementsArray.push({
    element: SecondElement(),
    showingTime: 2000});

ElementsArray.push({
    element: ThirdElement(),
    showingTime: 3000});

ElementsArray.push({
    element: FourthElement(),
    showingTime: 3000});

ElementsArray.push({
    element: FifthElement(),
    showingTime: 2500});

ElementsArray.push({
    element: SixthElement(),
    showingTime: 2000});

ElementsArray.push({
    element: SeventhElement(),
    showingTime: 3000});

export default ElementsArray;