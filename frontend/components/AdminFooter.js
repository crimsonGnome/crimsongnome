import React, { Component } from 'react';
import User from './User';
import Signout from './Signout';
import styled from 'styled-components';

const AdminFooterStyle = styled.div`
  z-index: 4;
  padding-left: 25px;
  text-shadow: 2px 2px rgba(38, 29, 26, 0.5), 4px 4px 8px rgba(0, 9, 114);
  position: fixed;
  bottom: 0;
  margin-top: 8vh;
  height: 8vh;
  width: 100vw;
  background: #630000;
  opacity: 0.7;
  color: white;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 150px);
  a {
    color: white;
  }
  button {
    border: none;
    background: none;
    color: white;
  }
`;

const AdminFooter = () => (
  <User>
    {({ data: { me } }) => {
      if (!me) return <span />;
      if (me.permission === 'ADMIN')
        return (
          <AdminFooterStyle>
            <Signout />
          </AdminFooterStyle>
        );
      return <span />;
    }}
  </User>
);

export default AdminFooter;
