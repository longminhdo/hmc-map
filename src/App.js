import React from 'react'
import styled from 'styled-components';
import MapContainer from './MapContainer'

const App = ({className}) => {
  return (
    <div className={className}>
      <MapContainer />
    </div>
  )
}

export default styled( App)`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
`;