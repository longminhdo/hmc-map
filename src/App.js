import Map from './components/Map/Map';
import styled from 'styled-components';
import Building from './components/Building/Building';

import B1 from './components/Building/buildings/B1.png';

function App({ className }) {
  return (
    <div className={className}>
      <Map />
      <Building src={B1} width='8%' left='22.5%' top='40%' translateY='375%' translateYHover='326%' />
    </div>
  );
}

export default styled(App)`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
