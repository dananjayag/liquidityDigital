import React from 'react';
import StyledDescriptionHolder from './styled/StyledWhilteBackGround';
import StyledHead from '../UserHeaders/styled/StyledHead';

const Description = () => (
    <StyledDescriptionHolder>
        <StyledHead withFontWeight> Description </StyledHead>
         <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         </p>
    </StyledDescriptionHolder>
);

export default Description;