import styled from 'styled-components';

const MainBody = styled.div`
  margin: 2rem;
  padding: 2rem;

  @media (${props => props.theme.tabletView}) {
    margin: 1rem;
    padding: 1rem;
  }
`;

const DualLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;

  .center {
    text-align: center;
  }
  @media (${props => props.theme.tabletViewMed}) {
    grid-template-columns: 1fr;
  }
`;

const DualList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: left;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-decoration: none;
  padding: 0;
  list-style-type: none;
  font-weight: 200;
  padding: 0 20px;
`;

const SixtyForty = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${props => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;

const SixtyFortyCorkBoard = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;

  @media (${props => props.theme.LargeTabletView}) {
    grid-template-columns: 7fr 3fr;
  }
  @media (${props => props.theme.tabletViewMed}) {
    grid-template-columns: 1fr;

    .order1 {
      order: 1;
    }
    .order2 {
      order: 2;
    }
  }
`;

export { MainBody };
export { DualLayout };
export { SixtyForty };
export { DualList };
export { SixtyFortyCorkBoard };
