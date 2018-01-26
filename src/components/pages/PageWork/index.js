import React, { Component } from 'react';
import './style.css';

import Story from '../../blocks/Story';
import WorkExp from '../../blocks/WorkExp';
import TagList from '../../blocks/TagList';
import Pagination from '../../blocks/Pagination';

class PageWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            workexp: []
        };
    }

    componentDidMount() {
        fetch('https://my-firebase-server.firebaseapp.com/projects')
          .then(res => res.json())
          .then(projects => this.setState({ projects: projects }));
        fetch('https://my-firebase-server.firebaseapp.com/workexp')
          .then(res => res.json())
          .then(workexp => this.setState({ workexp: workexp }));
    }

    render() {
        const tags = ['Git','Gulp','i-bem','jQuery','Bootstrap','Python','Ruby','Slim','CoffeeScript','Sass','CSS3','Ruby on Rails','JavaScript'];

        return (
            <div className="work-page">
                <section className="achievements">
                    <h2>Проекты</h2>
                    <div className="achievements__content">
                        {this.state.projects.map((item, index) =>
                            <Story key={index} img={item.img} category={item.tags.join('&')} title={item.title} place={item.place} desc={item.desc} link={item.link}/>
                        )}
                        <Pagination/>
                    </div>
                </section>
                <section className="achievements">
                    <h2>Опыт работы</h2>
                    <div className="achievements__content">
                        <p className="achievements__note">Краткую версию резюме можно скачать <a href="#">отсюда.</a></p>
                        {this.state.workexp.map((item, index) =>
                            <WorkExp key={index} {...item} />
                        )}
                        <Pagination/>
                    </div>
                </section>
                <section className="achievements">
                    <h2>Ключевые навыки</h2>
                    <div className="achievements__content">
                        <TagList items={tags}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default PageWork;