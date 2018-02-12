import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

import LangSwitch from '../LangSwitch';
import MainMenu from '../MainMenu';
import SidebarTrigger from '../SidebarTrigger';

import bgImgUrl from './IMG_8479.JPG';

class Hero extends Component {
    constructor() {
        super();

        this.state = {
            isSideBarOpen: false
        };
    }

    render() {
        const mainMenuItems = this.props.mainMenuItems || [];
        const langSwitchItems = this.props.langSwitchItems || [];
        const bgStyle = {
            backgroundImage: 'url(' + bgImgUrl + ')'
        };
        const type = this.props.type || 'plain';
        const dynCardClass = classnames({
            hero: true,
            'is-plain': type === 'plain',
            'is-extended': type === 'extended'
        });

        return (
            <header className={dynCardClass}>
                <div className='hero__img hero__item' style={bgStyle}>
                    <SidebarTrigger
                        onSidebarTrigger={this.props.onSidebarTrigger}
                    />
                </div>
                <div className='hero__descr hero__item'>
                    <SidebarTrigger
                        onSidebarTrigger={this.props.onSidebarTrigger}
                    />
                    <div className='hero__author'>
                        <h1>
                            <a href='/'>
                                <span className='hero__job'>
                                    фронтэнд-разработчик{' '}
                                </span>
                                <span className='hero__name'>
                                    Наталья Душкина
                                </span>
                            </a>
                        </h1>
                    </div>
                    <p className='hero__about'>
                        Живу в Домодедово. Последнее место работы — Издательский
                        Дом 'Бурда'.{' '}
                        <span>Занимаюсь фронтэндом уже 3&nbsp;года.</span>
                    </p>
                    <p className='hero__notice'>
                        На сайте можно почитать о том, как я:
                    </p>
                    <MainMenu mainMenuItems={mainMenuItems} />
                    <a href='#' className='hero__contacts'>
                        Связаться со мной
                    </a>
                    <LangSwitch items={langSwitchItems} />
                </div>
            </header>
        );
    }
}

export default Hero;