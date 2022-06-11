import styled, {css} from "styled-components"
import StyleVars from "./StyleVars"

const CardMain = styled.div`
    border-radius: 10px;
    width: 750px;
    background-color: ${StyleVars.lightColor};
`

const CardTopBotton = styled.div`
    display: flex;
    background-color: ${StyleVars.primaryColor};
    padding: 5px;
    font-weight: bold;
    color: ${StyleVars.secondaryColor};
    font-size: x-large;

    ${props => props.top && css`
        border-radius: 10px 10px 0 0;
    `}

    ${props => props.botton && css`
        border-radius: 0 0 10px 10px;
        font-style: italic;
        justify-content: flex-end;
    `}
`

const StyledCard = ({ children, title, price }) => {
    return (
        <CardMain>
            <CardTopBotton top>
                {title}
            </CardTopBotton>
            <div>
                {children}
            </div>
            <CardTopBotton botton>
                {price}
            </CardTopBotton>
        </CardMain>
    )
}

export default StyledCard