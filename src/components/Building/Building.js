import styled from 'styled-components';

const Building = ({ className, src }) => {
  return <img className={className} src={src} alt='' />;
};

export default styled(Building)`
  position: absolute;
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  transition: 300ms;
  transform: translateY(${(props) => props.translateY});
  z-index: 3;

  &:hover {
    transform: scale(1.15) translateY(${(props) => props.translateYHover});
  }
`;
