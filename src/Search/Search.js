import React from 'react';
import styled from 'styled-components';
import style, { attrs } from '../styles/search'

const Search = ({ search, className, containerStyle }) => {
  return (
    <div style={containerStyle}>
      <p className={className}>You're looking for: {search}</p>
    </div>
  );
}

const StyledSearch = styled(Search).attrs(attrs)`
  ${style}
`;

export default StyledSearch;
