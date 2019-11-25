import React from 'react';
import StyledUserHeaders from './styled/StyledUserHeaders'
import StyledUnit from './styled/StyledUnit';
import StyledHead from './styled/StyledHead';
import StyledMoney from './styled/StyledMoney';
import StyledStatusIcon from '../../../../styled/StyledStatusIcon';
const UserHeaders = () => (
    <StyledUserHeaders>
        <StyledUnit>
                <StyledHead> Target Raise</StyledHead>
                <StyledMoney>$2.7M</StyledMoney>
        </StyledUnit>
        <StyledUnit>
                <StyledHead> Amount Raised</StyledHead>
                <StyledMoney>$2.7M</StyledMoney>
        </StyledUnit>
        <StyledUnit>
                <StyledHead> Valuation</StyledHead>
                <StyledMoney>$2.7M</StyledMoney>
        </StyledUnit>
        <StyledUnit>
                <StyledHead> Status </StyledHead>
                <StyledStatusIcon status={'closed'}>Closed</StyledStatusIcon>
        </StyledUnit>
    </StyledUserHeaders>
)

export default UserHeaders;