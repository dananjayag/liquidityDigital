import styled from 'styled-components';

const StyledWhilteBackGround = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    margin: 32px;
    padding: 8px 16px;
    overflow: ${({ withScroll }) => withScroll ? 'scroll' : 'auto' };
    height: ${({ height }) => height ? height : '' };
`;

export default StyledWhilteBackGround;