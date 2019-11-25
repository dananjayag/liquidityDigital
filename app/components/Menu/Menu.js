import React from  'react';
import PropTypes from 'prop-types';
import StyledMenu from './styled/StyledMenu';
import Logo from 'components/Logo';
import MenuItem from './components/MenuItem';
import MenuFooter from './components/MenuFooter';
import StyledMenuItemContainer from './styled/StyledMenuItemContainer';

const logoUrl = "https://res.cloudinary.com/clerkautomation/image/upload/v1574599557/Logo_wz1yxe.png";

const Menu = ({menuItems, selectedKey, onMenuChange}) => {

    return (
        <StyledMenu>
          <Logo logoUrl={logoUrl} height="64px" width="64px" margin="32px"/>
           <StyledMenuItemContainer>
          { menuItems.map(({name,id})=> {
             return (
                 <MenuItem onMenuChange={onMenuChange} name={name} id={id} isSelected={(selectedKey === id)} key={id}/>
             );
           }) }
           </StyledMenuItemContainer>
          <MenuFooter/>
        </StyledMenu>
    )
}

Menu.propTypes = {
    menuItems: PropTypes.array,
    selectedKey: PropTypes.string,
    onMenuChange: PropTypes.func,
}

export default Menu;