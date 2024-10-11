import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const Building = ({ className, src, left, top, description, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const translate = description?.translate;

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

      {isHovered && <Card left={left} top={top} translateX={translate?.[0]} translateY={translate?.[1]} text={text} />}
    </>
  );
};

export default styled(Building)`
  position: absolute;
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  transition: 300ms;
  top: ${(props) => props.top};
  z-index: 3;

  &:hover {
    transform: scale(${(props) => props.scale});
  }
`;
