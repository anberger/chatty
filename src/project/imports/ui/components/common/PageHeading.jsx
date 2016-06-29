import React from 'react';

const PageHeading = ({headerText}) => (
  <div className="page-heading">
    <h1 className="text-center">{headerText}</h1>
  </div>
);

PageHeading.propTypes = {
  headerText: React.PropTypes.string
};

PageHeading.defaultProps = {};

export default PageHeading;



