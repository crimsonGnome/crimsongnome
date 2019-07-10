import styled from 'styled-components';

const Picture = styled.img`
  transform: rotate(15deg);
  box-shadow: -3px 8px 5px 0 rgba(0, 0, 0, 0.14),
    -1px 5px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 4px -1px rgba(0, 0, 0, 0.3);
  top: 20px;
  right: 2%;
  position: absolute;
  width: 300px;
  height: 214.286px;
  z-index: 4;
  object-fit: cover;
  background: black;
  border: 5px solid #fafafa;

  @media (${props => props.theme.tabletViewMed}) {
    width: 240px;
    height: 171px;
  }
  @media (${props => props.theme.phoneViewLarge}) {
    width: 210px;
    height: 150px;
    top: 10px;
  }
`;

const Paperclip = styled.img`
  z-index: 999;
  height: 125px;
  position: absolute;
  top: -35px;
  right: 10%;
`;

export default Picture;
export { Paperclip };
