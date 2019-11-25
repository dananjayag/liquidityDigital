import styled from 'styled-components';

const StyledLine = styled.div`
   width: 30px;
   height: 60px;
   display: flex;
   ${({isSelected}) => isSelected && `&:before {
    content: "";
    height: 60px;
    width: 6px;
    background-color: #2345C7;
    opacity: 0.2;
}`}`;

export default StyledLine;
