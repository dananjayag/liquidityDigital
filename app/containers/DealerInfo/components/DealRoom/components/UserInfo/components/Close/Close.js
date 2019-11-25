import React from 'react';
import StyledClose from './styled/StyledClose';
  
  const Close = ({ onClick }) => (
    <StyledClose onClick={onClick}>
        Close X
    </StyledClose>
  )

export default Close;