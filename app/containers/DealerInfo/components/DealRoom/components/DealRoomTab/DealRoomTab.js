import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'components/Tabs';
import StyledTab from './styled/StyledTab';

const { TabPane } = Tabs;

const DealRoomTab = ({ onTabChange, currentTab, tabList }) => {
    return (
        <StyledTab defaultActiveKey={currentTab} onChange={onTabChange}>
            { 
             tabList.map(({ tabName, component, id}, index)=>(
                <TabPane tab={tabName} key={id}>
                 {component}
                </TabPane>
             ))
            }
        
        </StyledTab>
    )
}

DealRoomTab.propTypes = {
    tabList: PropTypes.array.isRequired,
    currentTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export default DealRoomTab;