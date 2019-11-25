import styled from 'styled-components';
import { statusTypes } from '../tableConfig';

const StyledStatusIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:before {
        display:flex;
        content: "";
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-right: 3px;
        background-color: ${({status})=> statusTypes[status]['key'] === statusTypes.inProgress.key ?  '#2345C7' : '#20BA82'};
    }
`;

export default StyledStatusIcon;