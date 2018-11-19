import React, { Component } from 'react';
import styled from 'styled-components';

const breakpoint1 = '875px';

const getStyledCardHeight = (size) => {
    if (size === 'large') {
        return '400px';
    } else if (size === 'medium') {
        return '280px';
    } else if (size === 'small') {
        return '184px';
    } else {
        return '215px';
    }
}

const StyledCard = styled.div`
    background-color: #ececec;
    height: 215px;
    margin-bottom: 25px;
    height: ${props => getStyledCardHeight(props.size)};

    @media (max-width: ${breakpoint1}) {
        width: ${props => props.size === 'large' ? '100%' : 'auto'};
        position: ${props => props.size === 'large' ? 'relative' : 'static'};
    }
`;

const StyledCardImg = styled.div`
    width: 100%;
    height: calc(100% - 110px);
    background-image: ${props => props.backgroundImageUrl.length ? `url(${props.backgroundImageUrl})` : `none`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: ${props => !props.backgroundImageUrl.length ? 'green' : 'transparent'};
`;

const StyledCardDescr = styled.div`
    padding: 20px;
    line-height: 1.25;
`;

const StyledCardH3 = styled.h3`
    font-weight: bold;
    margin-top: 5px;
    display: block;
    max-height: ${props => props.size === 'small' ? '46px' : 'none'};
    overflow: ${props => props.size === 'small' ? 'hidden' : 'visible'};
`;

const StyledCardLink = styled.a`
    &::hover {
        color: #00BAF8;
    }
`;

const StyledCardTag = styled(StyledCardLink)`
    font-size: 13px;
    line-height: 20px;
    display: inline-block;
    padding: 0 3px;
    border: 1px solid rgba(55, 79, 98, .3);
    cursor: pointer;
    border-radius: 2px;
    margin-bottom: 5px;
    white-space: nowrap;
    text-transform: uppercase;
`;

export default class Card extends Component {
    render() {
        const size = this.props.size || 'medium';
        const imgUrl = this.props.img ? this.props.img : '';

        return (
            <StyledCard size={size}>
                <StyledCardLink href='#'>
                    <StyledCardImg 
                        backgroundImageUrl={imgUrl} 
                    />
                </StyledCardLink>
                <StyledCardDescr>
                    <StyledCardTag href='#'>
                        {this.props.tag}
                    </StyledCardTag>
                    <StyledCardLink href='#'>
                        <StyledCardH3>{this.props.header}</StyledCardH3>
                    </StyledCardLink>
                </StyledCardDescr>
            </StyledCard>
        );
    }
}