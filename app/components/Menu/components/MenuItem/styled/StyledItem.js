import styled from 'styled-components';

const StyledItem = styled.div`
   display: flex;
   background-color: ${({isSelected})=> { return  isSelected ? '#fafafb' : '#fff'}};
`;

export default StyledItem;