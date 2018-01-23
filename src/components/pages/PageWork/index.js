import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

import Story from '../../blocks/Story';
import WorkExp from '../../blocks/WorkExp';
import TagList from '../../blocks/TagList';
import Pagination from '../../blocks/Pagination';

class PageWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch('/projects')
          .then(res => res.json())
          .then(projects => this.setState({ projects: projects }));
      }

    render() {
        const tags = ['Git','Gulp','i-bem','jQuery','Bootstrap','Python','Ruby','Slim','CoffeeScript','Sass','CSS3','Ruby on Rails','JavaScript'];
        const workExp = [
            {
                dates: "Январь 2015 — по настоящее время",
                timeinterval: "2 года 5 месяцев",
                place: "Идинайди",
                placedetails: "Москва, www.idinaidi.ru",
                position: "фронтэнд-разработчик",
                duties: "<p>Участие в разработке веб-сервисов idinaidi.ru (недвижимость), komesto.ru (коммерческая недвижимость).</p><p>Основной стек: Ruby on Rails, SASS, CoffeeScript, клиентский фреймворк Pieces от Evil Martians, jQuery. Также работала с менеджером очередей Sidekiq и поисковым движком Elasticsearch.</p>"
            },
            {
                dates: "Январь 2015 — по настоящее время",
                timeinterval: "2 года 5 месяцев",
                place: "Идинайди!",
                placedetails: "Москва, www.idinaidi.ru",
                position: "фронтэнд-разработчик",
                duties: "<p>Участие в разработке веб-сервисов idinaidi.ru (недвижимость), komesto.ru (коммерческая недвижимость).</p><p>Основной стек: Ruby on Rails, SASS, CoffeeScript, клиентский фреймворк Pieces от Evil Martians, jQuery. Также работала с менеджером очередей Sidekiq и поисковым движком Elasticsearch.</p>"
            }
        ];
        const workExpHTML = workExp.map((item, index) => {
            return (
                <WorkExp key={index} {...item} />
            );
        });

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
                        {workExpHTML}
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