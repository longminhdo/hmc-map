import Map from './components/Map/Map';
import styled from 'styled-components';
import Building from './components/NewBuilding/Building';

import b1 from './components/NewBuilding/buildings/b1.png';
import c1 from './components/NewBuilding/buildings/c1.png';
import hitech from './components/NewBuilding/buildings/hitech.png';
import c3c10 from './components/NewBuilding/buildings/c3-c10.png';
import parking from './components/NewBuilding/buildings/parking-b1.png';
import ktx from './components/NewBuilding/buildings/ktx.png';
import d8 from './components/NewBuilding/buildings/d8.png';
import d6 from './components/NewBuilding/buildings/d6.png';
import c2c9 from './components/NewBuilding/buildings/c2-c9.png';
import d2a from './components/NewBuilding/buildings/d2a.png';
import hotien from './components/NewBuilding/buildings/ho-tien.png';
import loveHust from './components/NewBuilding/buildings/love-hust.png';
import hmc from './components/NewBuilding/buildings/hmc.png';
import d4 from './components/NewBuilding/buildings/d4.png';
import tqbLib from './components/NewBuilding/buildings/tqb-lib.png';
import d9 from './components/NewBuilding/buildings/d9.png';
import d3d7 from './components/NewBuilding/buildings/d3-7.png';
import tv from './components/NewBuilding/buildings/tv.png';
import pGate from './components/NewBuilding/buildings/parabol-gate.png';
import tGate from './components/NewBuilding/buildings/tdn-gate.png';
import ktxBoard from './components/NewBuilding/buildings/ktx-board.png';
import sec from './components/NewBuilding/buildings/sec-room.png';
import tree from './components/NewBuilding/buildings/tree.png';
import c6 from './components/NewBuilding/buildings/c6.png';
import cla from './components/NewBuilding/buildings/cla.png';
import roof from './components/NewBuilding/buildings/roof.png';

function App({ className }) {
  return (
    <div className={className}>
      <Map />
      <Building src={b1} width='9.6%' left='16.54%' top='43.78%' scale='1.15' />
      <Building src={tree} width='1.31%' left='14.99%' top='54.48%' scale='1' />
      <Building src={parking} width='3.8%' left='26.22%' top='54.45%' scale='1.15' />
      <Building src={ktx} width='17.56%' left='28.16%' scale='1.03' top='59.99%' />
      <Building src={parking} width='3.8%' left=' 43.53%' scale='1.15' top='74.2%' />
      <Building src={ktxBoard} width='1.8%' left=' 27.49%' scale='1.15' top='70.1%' />

      <Building src={pGate} width='2.75%' left='68.52%' scale='1.15' top='20.79%' />
      <Building src={d4} width='5.18%' left='54.85%' scale='1.15' top='7.39%' />
      <Building src={sec} width='3.48%' left='63.65%' scale='1.18' top='19.49%' />

      <Building src={d8} width='4.69%' left='49.22%' scale='1.11' top='10.78%' />
      <Building src={d6} width='5.12%' left='52.57%' scale='1.13' top='15.27%' />
      <Building src={parking} width='3.85%' left='57.46%' scale='1.18' top='18.85%' />
      <Building src={roof} width='4.16%' left='54.65%' scale='1' top='20.77%' />
      <Building src={d2a} width='4.53%' left='57.76%' scale='1.18' top='20.83%' />
      <Building src={tree} width='1.13%' left='52.86%' scale='1' top='22.33%' />

      <Building src={hotien} width='8.49%' left='43.2%' scale='1.1' top='20.59%' />
      <Building src={hmc} width='4.78%' left='53.13%' scale='1.09' top='27.45%' />
      <Building src={loveHust} width='4.72%' left='50.77%' scale='1.18' top='27.42%' />

      <Building src={d9} width='7.84%' left='33.1%' scale='1.03' top='25.29%' />
      <Building src={tqbLib} width='8.88%' left='40.19%' scale='1.1' top='26.71%' />
      <Building src={parking} width='3.78%' left='37.59%' scale='1.15' top='31.88%' />
      <Building src={d3d7} width='8.67%' left='33.09%' scale='1.04' top='32.42%' />
      <Building src={parking} width='3.730%' left='36.82%' scale='1.15' top='45.99%' />
      <Building src={tv} width='1.56%' left='38.42%' scale='1.15' top='47.99%' />
      <Building src={tGate} width='2.06%' left='40.18%' scale='1.15' top='52.02%' />

      <Building src={c6} width='4.98%' left='53.82%' scale='1.15' top='55.62%' />
      <Building src={cla} width='4.18%' left='56.95%' scale='1.18' top='58.02%' />

      <Building src={c3c10} width='13.21%' left='52.90%' scale='1.1' top='38.32%' />
      <Building src={c2c9} width='7.86%' left='69.26%' scale='1.1' top='28.29%' />
      <Building src={c2c9} width='7.86%' left='69.26%' scale='1.1' top='28.29%' />
      <Building src={c1} width='13.98%' left='65.09%' scale='1.09' top='36.89%' />
      <Building src={hitech} width='3.3%' left='62.97%' scale='1.19' top='50.01%' />
    </div>
  );
}

export default styled(App)`
  position: relative;
  width: 100%;
  height: calc(100vw * 9 / 16);
  background: radial-gradient(65.91% 132.5% at 81.99% 13.1%, #00b8e5 0%, #0c91c1 34.53%, #263a73 100%);
`;
