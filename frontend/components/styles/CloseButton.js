import styled from 'styled-components';

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
`;

const CloseButtonPic = styled.button`
  background: #e8b4b3;
  color: white;
  font-size: 3rem;
  border: 0;
  position: relative;
  z-index: 2;
  right: 5px;
`;

export default CloseButton;
export { CloseButtonPic };
