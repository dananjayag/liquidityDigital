import React from  'react';
import PropTypes  from 'prop-types';
import StyledLogo from './styled/StyledLogo';
import Image from 'components/Image';

const Logo = ({height, width, margin, logoUrl }) => {
    return (
        <StyledLogo>
            <Image src={logoUrl} height={height} width={width} margin={margin}/>
        </StyledLogo>
     )
}

Logo.propTypes = {
    height: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
}

export default Logo;