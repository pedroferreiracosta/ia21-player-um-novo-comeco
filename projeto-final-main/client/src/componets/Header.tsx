import {styled} from "styled-components"

const Header = styled.header`
    color: red;

    span{
        color: green
    }
`
export default () => <>
    <Header>      
        Hader
        <span>teste</span>
    </Header>
</>