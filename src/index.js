import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './reset.css';
import './index.css';

// Components
import IconClose from 'react-icons/lib/md/close';
import Sidebar from 'react-sidebar';
import PATHS from './lib/paths';

import PageHome from './components/pages/PageHome';
import PageWork from './components/pages/PageWork';
import Hero from './components/blocks/Hero';
import Footer from './components/blocks/Footer';
import MainMenu from './components/blocks/MainMenu';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    onSidebarTrigger() {
        this.onSetSidebarOpen(true);
        return;
    }

    onSidebarClose() {
        this.onSetSidebarOpen(false);
        return;
    }

    render() {
        const langSwitchItems = [
          { url: "#", text: "ru", isActive: true },
          { url: "#", text: "en" }
        ];

        var sidebarContent =
            <div>
                <div className="sidebar__close" onClick={ this.onSidebarClose.bind(this) }>
                    <IconClose style={{ width: "40px", height: "40px", color: "#fff" }} />
                </div>
                <MainMenu mainMenuItems={PATHS}/>
            </div>;

        return (
            <Router>
                <div>
                    <Sidebar sidebar={sidebarContent} open={this.state.sidebarOpen} sidebarClassName="sidebar"><b></b></Sidebar>
                    <div className="page-container">
                        <Route exact path='/' render={() =>
                            <Hero type='extended' mainMenuItems={PATHS} langSwitchItems={langSwitchItems} onSidebarTrigger={this.onSidebarTrigger.bind(this)}/>
                        }/>
                        <Route path='/work' render={() =>
                            <Hero type='plain' mainMenuItems={PATHS} langSwitchItems={langSwitchItems} onSidebarTrigger={this.onSidebarTrigger.bind(this)}/>
                        }/>
                        <article>
                            <Route exact path='/' render={() =>
                                <PageHome />
                            }/>
                            <Route path='/work' render={() =>
                                <PageWork />
                            }/>
                        </article>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

render(<Main/>, document.getElementById('root'));
