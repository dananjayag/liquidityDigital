import Tabs from 'components/Tabs';
import styled from 'styled-components';

const StyledTab = styled(Tabs)`
    .ant-tabs-nav{
        color: #9295A0;
        font-size: 16px;
        line-height: 40px;
    }
    .ant-tabs-nav .ant-tabs-tab-active {
        color: #09112E;
        font-size: 16px;
        line-height: 40px;
    }
    .ant-tabs-nav .ant-tabs-tab:hover {
        color: #09112E;
        font-size: 16px;
        line-height: 40px;
    }
    .ant-tabs-nav .ant-tabs-tab{
        padding: 0;
    }
    margin-left: 32px !important;
    margin-top: 24px !important;
    ${( { isSpaceEvenly = false})=> isSpaceEvenly && `.ant-tabs {
        &-nav {
          display: flex;
      
          .ant-tabs-tab {
            flex-grow: 1;
            margin-left: 0px;
            width: 100%;
          }
        }
      }
    `}
`;


export default StyledTab;