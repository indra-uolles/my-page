import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

import Story from '../../blocks/Story';
import WorkExp from '../../blocks/WorkExp';
import TagList from '../../blocks/TagList';
import Pagination from '../../blocks/Pagination';

class PageWork extends Component {

    render() {
        const tags = ['Git','Gulp','i-bem','jQuery','Bootstrap','Python','Ruby','Slim','CoffeeScript','Sass','CSS3','Ruby on Rails','JavaScript'];
        const stories = [
            {
                img: "http://www.gurmanbhatia.com/img/story-pics/islands.jpg",
                category: "design & data",
                title: "Перевёрстка salon.ru",
                place: 'Издательский Дом "Бурда"',
                desc: "Designed a dashboard showing live results for state elections in India. By integrating data from the Election Commission of India (ECI) and Association for Democratic Reforms (ADR) we figured the gender, wealth and criminal background of elected MLAs, live as the results came in. In addition, we had maps that showed voter turnout, seats that had flipped and the margin of victory.Tools: HTML/CSS, d3.js, underscore.js."
            },
            {
                img: "http://www.gurmanbhatia.com/img/story-pics/islands.jpg",
                category: "design & data",
                title: "Перевёрстка salon.ru",
                place: 'Издательский Дом "Бурда"',
                desc: "!Designed a dashboard showing live results for state elections in India. By integrating data from the Election Commission of India (ECI) and Association for Democratic Reforms (ADR) we figured the gender, wealth and criminal background of elected MLAs, live as the results came in. In addition, we had maps that showed voter turnout, seats that had flipped and the margin of victory.Tools: HTML/CSS, d3.js, underscore.js."
            }
        ];
        const storiesHTML = stories.map((item, index) => {
            return (
                <Story key={index} img={item.img} category={item.category} title={item.title} place={item.place} desc={item.desc}/>
            );
        });
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
                        {storiesHTML}
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