import React from 'react';
import PropTypes  from 'prop-types';
import StyledPageHeader from './styled/StyledPageHeader';

const PageHeader = ({ pageHeader }) => (
    <StyledPageHeader>
       { pageHeader }
    </StyledPageHeader>
);

PageHeader.propTypes = {
  pageHeader: PropTypes.string.isRequired
};

export default PageHeader;