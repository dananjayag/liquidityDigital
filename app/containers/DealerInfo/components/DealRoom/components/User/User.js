import React from 'react';
import PropTypes from 'prop-types';
import StyledUser from './styled/StyledUser';

const User = ({ userName, toggleUserInfo}) => (
    <StyledUser onClick={toggleUserInfo}>
        {userName}
    </StyledUser>
)    

User.propTypes = {
    userName: PropTypes.string.isRequired,
    toggleUserInfo: PropTypes.func.isRequired,
}

export default User;