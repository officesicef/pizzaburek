import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { Loaders } from 'src/components';

const RenderLoaded = ({ loaders, children }) => {
  const checkLoaders = () => {
    for (let i = 0; i < loaders.length; i += 1) {
      const loader = loaders[i];
      if (loader === null) return false;
      if (loader === undefined) return false;
      if (Array.isArray(loader)) {
        if (loader.length > 0) return true;
        return false;
      }
    }
    return true;
  };

  return checkLoaders() ? <>{children}</> : <Loaders.Page />;
};

RenderLoaded.propTypes = {
  loaders: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(RenderLoaded);
