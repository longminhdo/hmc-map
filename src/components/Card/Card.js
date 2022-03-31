import styled from 'styled-components';

const Card = ({ className }) => {
  return (
    <div className={className}>
      <p>Text</p>
      <div className='background'></div>
    </div>
  );
};

export default styled(Card)`
  position: absolute;
  width: 12%;
  height: fit-content;
  padding: 20px 10px;
  border: 1px solid red;
  width: ${(props) => props.width};
  left: ${(props) => props.left};

  .background {
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 5;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
`;
