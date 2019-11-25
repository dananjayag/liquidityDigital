import React, { Component } from 'react';
import Menu from 'components/Menu';
import { menuItems, userName } from './constants';
import DealRoomLayout from './components/DealRoom';
import PageContainer from './styled/PageContainer';

const INITIAL_STATE = {
    currentMenu: menuItems.dealRoom.id,
    showUserInfo: false,
}

class DealerInfo extends Component {
    state = INITIAL_STATE;

    handleMenuChange = (id) => {
        this.setState({
            currentMenu:  id
        });
    }

    toggleUserInfo = () => {
        this.setState((prevState)=>({
            showUserInfo: !prevState.showUserInfo
        }))
    }

    render(){
        const { currentMenu, showUserInfo } = this.state;
        return (
          <PageContainer>
            <Menu 
              menuItems={Object.values(menuItems)} 
              selectedKey={currentMenu} 
              onMenuChange = {this.handleMenuChange}
            />
            { 
              (currentMenu === menuItems.dealRoom.id) && 
                <DealRoomLayout 
                    userName={userName}
                    showUserInfo={showUserInfo}
                    toggleUserInfo={this.toggleUserInfo}
                />
            }

          </PageContainer>
        )
    }
}

export default DealerInfo;