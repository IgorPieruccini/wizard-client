import styled from "styled-components";
import { cardColors } from "../shared/colors";

export const StyleFlexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const defaultBoxShadow = `box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);`;

export const StyleBaseButton = styled.button`
    ${defaultBoxShadow}
    border: none;
    border-radius: 20px;
    background-color: white;
    margin: 15px;
    &:hover {
    background-color: ${cardColors.green};
    cursor: pointer;
    }
`

export const StyleBaseModal = styled.div`
    ${StyleFlexCenter}
    ${defaultBoxShadow}
    height: 120px;
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
`;