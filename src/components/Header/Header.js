import React from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Style
import styled from '@emotion/styled';

// Style Component
const ContainerHeader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({ title }) => {
    return ( 
        <ContainerHeader>
            <TextoHeader>{ title }</TextoHeader>
        </ContainerHeader>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;