import React, { Component } from 'react';
import StyledDealRoomLayout from './styled/StyledDealRoomLayout';
import User from './components/User';
import PageHeader from 'components/PageHeader';
import { pageHeader, INTITAL_STATE} from './constants';
import tabConfig from './tabConfig';
import DealRoomTab from './components/DealRoomTab/DealRoomTab';
import UserInfo from './components/UserInfo';

class DealRoomLayout extends Component{

    state = INTITAL_STATE;

    onTabChange = (key) => {
        this.setState({
            currentTab: key
        })
    }

    render(){
        const { userName, toggleUserInfo, showUserInfo } = this.props;
        const  { currentTab } = this.state;
        return (
            <StyledDealRoomLayout>
                <User 
                   userName={userName}
                   toggleUserInfo={toggleUserInfo}
                />
                <PageHeader  pageHeader={pageHeader} />
                <DealRoomTab onTabChange={this.onTabChange} currentTab={currentTab} tabList={tabConfig} />
                <UserInfo showUserInfo={showUserInfo}  toggleUserInfo={toggleUserInfo} />
            </StyledDealRoomLayout>
        )
    }
};

export default DealRoomLayout;