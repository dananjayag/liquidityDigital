import React from 'react';
import StyledWhilteBackGround from '../Description/styled/StyledWhilteBackGround';
import StyledHead from '../UserHeaders/styled/StyledHead';
import StyledBoxHolder from './styled/StyledBoxHolder';
import StyledBox from './styled/StyledBox';

const RequiredDetails = () => (
    <StyledWhilteBackGround withScroll={true} height={'250px'}>
        <StyledHead withFontWeight> Required </StyledHead>
        <StyledBoxHolder>
            <StyledBox type={'Heading'}>
                Date of Creation
            </StyledBox>
            <StyledBox>
                May  24, 2019
            </StyledBox>
            <StyledBox type={'Heading'}>
                Country of Issuance
            </StyledBox>
            <StyledBox>
                US
            </StyledBox>
            <StyledBox type={'Heading'}>
                Industry
            </StyledBox>
            <StyledBox>
                Renewable Energy
            </StyledBox>
            <StyledBox type={'Heading'}>
                Total Issued Shares
            </StyledBox>
            <StyledBox>US
                1,000,000,000
            </StyledBox>
            <StyledBox type={'Heading'}>
                Free Float
            </StyledBox>
            <StyledBox>
                1,000,000
            </StyledBox>
            <StyledBox type={'Heading'}>
                Price Per Share
            </StyledBox>
            <StyledBox>
                $100
            </StyledBox>
        </StyledBoxHolder>

    </StyledWhilteBackGround>
);

export default RequiredDetails;