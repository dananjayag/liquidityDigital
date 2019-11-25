import React from  'react';
import StyledUserInfo from './styled/StyledUserInfo';
import StyledUserInfoWrapper from './styled/StyledUserInfoWrapper';
import Close from './components/Close';
import StyledTab from '../DealRoomTab/styled/StyledTab';
import Tabs from 'components/Tabs';
import UserHeaders from './components/UserHeaders';
import Description from './components/Description/Description';
import RequiredDetails from './components/RequiredDetails';


const { TabPane } = Tabs;
const UserInfo = ({ showUserInfo, toggleUserInfo }) => {
   return  (
        <>
         { showUserInfo && ( <StyledUserInfoWrapper>
                <StyledUserInfo>
                    <Close onClick={toggleUserInfo}/>
                    <StyledTab isSpaceEvenly={true}>
                       <TabPane tab={'Deal Info'} key={1}>
                           <UserHeaders/>
                            <Description/>
                            <RequiredDetails/>
                       </TabPane>
                       <TabPane tab={'Additional Info'} key={2}>
                           No Designs 
                       </TabPane>
                    </StyledTab>
                </StyledUserInfo>
            </StyledUserInfoWrapper>
            )
         }  
        </>
    )
};

export default UserInfo;
