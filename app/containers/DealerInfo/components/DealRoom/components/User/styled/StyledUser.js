import styled from 'styled-components';

const StyledUser = styled.div`
    display: flex; 
    font-size: 16px;
    line-height: 20px;
    align-self: flex-end;
    margin-top: 24px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #09112E;
    cursor: pointer;
    &:after {
        content: "";
        height: 10px;
        width: 10px;
        margin: 5px 0px 0px 5px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 7px solid #0f0e0e;
        cursor: pointer;
    }
`;

export default StyledUser;