import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

const Page = ({ title, children, style, ...rest }) => (
  <div {...rest} style={{ padding: '24px', height: '100%', ...style }}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

Page.defaultProps = {
  style: {},
};

export default memo(Page);
