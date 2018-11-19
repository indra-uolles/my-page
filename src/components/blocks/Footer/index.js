import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background: #d6c9b8;
    padding: 20px;
    margin: 0;
    font-size: 18px;
    text-align: center;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <a href='#'>©&nbsp;2017 Душкина Наталья</a>
        </StyledFooter>
    );
}