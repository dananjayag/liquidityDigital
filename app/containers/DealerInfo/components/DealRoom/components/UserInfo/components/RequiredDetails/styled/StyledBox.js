import styled from 'styled-components';

const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0 50%;
    border: ${({ withBorder }) => withBorder ? '' : '1px solid #F9FAFC' };
    padding: 10px 5px;
    font-size: 16px;
    color: ${({ type }) => type ? '#333333' : '#333333' };
    font-weight: ${({ type }) => type ? 700 : 400};
`;

export default StyledBox;