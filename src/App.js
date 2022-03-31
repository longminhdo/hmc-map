import Map from './components/Map/Map';
import styled from 'styled-components';
import Building from './components/NewBuilding/Building';

import b1 from './components/NewBuilding/buildings/b1.png';
import c1 from './components/NewBuilding/buildings/c1.png';
import hitech from './components/NewBuilding/buildings/hitech.png';
import c3c10 from './components/NewBuilding/buildings/c3-c10.png';
import parkingB1 from './components/NewBuilding/buildings/parking-b1.png';
import ktx from './components/NewBuilding/buildings/ktx.png';

function App({ className }) {
  return (
    <div className={className}>
      <Map />
      <Building src={b1} width='8%' left='22.5%' translateY='375%' translateYHover='326%' scale='1.15' />
      <Building src={parkingB1} width='2.9%' left='30.8%' translateY='1251%' translateYHover='1087.83%' scale='1.15' />
      <Building src={ktx} width='14.7%' left=' 31.90%' translateY='248.2%' translateYHover='229.81%' scale='1.08' />
      <Building src={parkingB1} width='2.9%' left=' 44.8%' translateY='1684%' translateYHover='1464.35%' scale='1.15' />

      <Building src={c3c10} width='10.9%' left='52.64%' translateY='232.0%' translateYHover='201.74%' scale='1.15' />
      <Building src={c1} width='11.48%' left='62.7%' translateY='213.0%' translateYHover='185.21%' scale='1.15' />
      <Building src={hitech} width='2.8%' left='60.85%' translateY='710.99%' translateYHover='616.0%' scale='1.15' />
    </div>
  );
}

export default styled(App)`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
