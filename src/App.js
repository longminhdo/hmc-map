import Map from './components/Map/Map';
import styled from 'styled-components';
import Building from './components/NewBuilding/Building';

import b1 from './components/NewBuilding/buildings/b1.png';
import c1 from './components/NewBuilding/buildings/c1.png';
import hitech from './components/NewBuilding/buildings/hitech.png';
import c3c10 from './components/NewBuilding/buildings/c3-c10.png';
import parkingB1 from './components/NewBuilding/buildings/parking-b1.png';
import ktx from './components/NewBuilding/buildings/ktx.png';
import d8 from './components/NewBuilding/buildings/d8.png';
import d6 from './components/NewBuilding/buildings/d6.png';
import c2c9 from './components/NewBuilding/buildings/c2-c9.png';
import d2a from './components/NewBuilding/buildings/d2a.png';
import hotien from './components/NewBuilding/buildings/ho-tien.png';
import loveHust from './components/NewBuilding/buildings/love-hust.png';
import hmc from './components/NewBuilding/buildings/hmc.png';

function App({ className }) {
  return (
    <div className={className}>
      <Map />
      <Building src={b1} width='8%' left='22.5%' top='44.68%' scale='1.15' />
      <Building src={parkingB1} width='2.95%' left='30.765%' top='53.6%' scale='1.15' />
      <Building src={ktx} width='14.6%' left=' 31.90%' scale='1.08' top='58.26%' />
      <Building src={parkingB1} width='2.9%' left=' 44.83%' scale='1.15' top='70.2%' />
      <Building src={d8} width='3.86%' left='49.32%' scale='1.15' top='17.38%' />
      <Building src={d6} width='4.15%' left='52.17%' scale='1.18' top='21.27%' />
      <Building src={d2a} width='3.81%' left='56.39%' scale='1.18' top='25.6%' />

      <Building src={hotien} width='6.99%' left='44.39%' scale='1.1' top='25.6%' />
      <Building src={hmc} width='3.93%' left='52.57%' scale='1.09' top='31.32%' />
      <Building src={loveHust} width='3.72%' left='50.75%' scale='1.18' top='31.42%' />

      <Building src={c3c10} width='10.9%' left='52.4%' scale='1.15' top='40.22%' />
      <Building src={c2c9} width='6.7%' left='65.80%' scale='1.15' top='31.85%' />
      <Building src={c1} width='11.52%' left='62.47%' scale='1.15' top='39.17%' />
      <Building src={hitech} width='2.6%' left='60.7%' scale='1.19' top='50.31%' />
    </div>
  );
}

export default styled(App)`
  position: relative;
  width: 100vw;
  height: calc(100vw * 9 / 16);
  background: radial-gradient(65.91% 132.5% at 81.99% 13.1%, #00b8e5 0%, #0c91c1 34.53%, #263a73 100%);
`;
