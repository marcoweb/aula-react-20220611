import styled, { css } from "styled-components"

import { COLORS } from "./Colors"

const Input = styled.input`
    background-color: ${COLORS.primary};
    font-size: large;
    border: none;
    border-radius: 10px;
    color: ${props => props.inputColor || 'white'};
    padding: 5px;

    ${props => props.dark && css`
        background-color: black;
        color: lightcyan;
    `}
`

const BlueInput = styled(Input)`
    background-color: navy;
    color: cyan
`

const TextInput = ({ value, onChange, name }) => {
    return (
        <BlueInput type="text" name={name} onChange={onChange} value={value} />
    )
}

export default TextInput