import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const Building = ({ className, src }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <img
        className={className}
        src={src}
        alt=''
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
      {isHovered && <Card left='22.5%' translateY='375%' />}
    </>
  );
};

export default styled(Building)`
  position: absolute;
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  transition: 300ms;
  transform: translateY(${(props) => props.translateY});
  z-index: 3;

  &:hover {
    transform: scale(${(props) => props.scale}) translateY(${(props) => props.translateYHover});
  }
`;
