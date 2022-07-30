import styled from "styled-components";

export const StyleFlexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyleBaseModal = styled.div`
    ${StyleFlexCenter}
    height: 120px;
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
`;