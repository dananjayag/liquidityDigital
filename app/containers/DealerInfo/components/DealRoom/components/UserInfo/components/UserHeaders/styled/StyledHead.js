import styled from 'styled-components';

const StyledHead = styled.div`
    font-size: 14px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #09112E;
    font-size: 16px;
    font-weight: ${({ withFontWeight }) => withFontWeight ? 800 : 400 };
`;

export default StyledHead;