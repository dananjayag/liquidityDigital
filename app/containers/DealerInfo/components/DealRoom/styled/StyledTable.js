import styled from 'styled-components';
import Table from 'components/Table';

const StyledTable = styled(Table)`
    .ant-table-content {
        background: #fff !important;
        font-size: 14px;
        line-height: 16px;
        color: #09112E;
    }
    .ant-table-thead .ant-table-column-title{
        font-size: 14px;
        line-height: 18px;  
        color: #09112E;
    }
`;

export default StyledTable;