import React from 'react';
import styled from 'styled-components';

import map from './map.png';

const Map = ({ className }) => {
  return <img className={className} src={map} alt='' />;
};

export default styled(Map)`
  position: absolute;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
`;
