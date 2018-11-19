import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
    background: #d6c9b8;
    padding: 20px;
    margin: 0;
    font-size: 18px;
    text-align: center;
`;

export default function Footer() {
    return (
        <FooterTag>
            <a href='#'>©&nbsp;2017 Душкина Наталья</a>
        </FooterTag>
    );
}