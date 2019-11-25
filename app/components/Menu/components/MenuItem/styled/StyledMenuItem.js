import styled from 'styled-components';

const StyledMenuItem = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    cursor: pointer;
    color: ${({isSelected})=> { return  isSelected ? '#2345C7' : '#09112E'}};
    }
`;

export default StyledMenuItem;