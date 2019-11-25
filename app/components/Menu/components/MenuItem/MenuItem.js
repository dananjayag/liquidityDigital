import React, {useCallback} from  'react';
import PropTypes from 'prop-types';
import StyledMenuItem from './styled/StyledMenuItem';
import StyledLine from './styled/StyledLine';
import StyledItem from './styled/StyledItem';

const MenuItem = ({ name, id, isSelected, onMenuChange }) => {

    const handleClick = useCallback(() => {
        onMenuChange(id);
    }, [id, isSelected]);

    return (
        <StyledItem isSelected={isSelected} onClick={handleClick}> 
            <StyledLine isSelected={isSelected}/>
            <StyledMenuItem isSelected={isSelected}>
              { name }
            </StyledMenuItem>
        </StyledItem>
    )
}

MenuItem.propTypes = {
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onMenuChange: PropTypes.func
};

MenuItem.defaultProps = {
    onMenuChange: () => {},
};

export default  MenuItem;