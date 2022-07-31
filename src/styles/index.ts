import styled from "styled-components";
import { cardColors } from "../shared/colors";

export const StyleFlexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyleBaseButton = styled.button`
    border: none;
    border-radius: 20px;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    margin: 15px;
    &:hover {
    background-color: ${cardColors.green};
    cursor: pointer;
    }
`

export const StyleBaseModal = styled.div`
    ${StyleFlexCenter}
    height: 120px;
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
`;