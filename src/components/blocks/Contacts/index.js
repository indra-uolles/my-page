import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import TelegramLink from '../TelegramLink';

// import './style.css';

export default class Contacts extends Component {
    render() {
        const { className, ...props } = this.props;

        return (
            <section className={classnames('contacts', className)} {...props }>
                <h2>Контакты</h2>
                <p>Свяжитесь со мной через <TelegramLink link="https://telegram.me/natalia_dushkina"/> или напишите:</p>
                <form action="/" method="post" className="contacts-form form">
                    <div className="row">
                        <div className="col-md-3 form-control-wrapper">
                            <div className="form-group field-greecephrase-name required">
                                <label className="control-label" for="greecephrase-name">Имя / Никнейм</label>
                                <input type="text" id="greecephrase-name" className="form-control" name="GreecePhrase[name]" placeholder="Имя" autocomplete="off"/>
                                <div className="help-block"></div>
                            </div>
                            <div className="icon-success-wrapper"><i className="icon-success"></i></div>
                        </div>
                        <div className="col-md-9 idea-form__email form-control-wrapper">
                            <div className="form-group field-greecephrase-email">
                                <label className="control-label" for="greecephrase-email">E-mail</label>
                                <input type="email" id="greecephrase-email" className="form-control" name="GreecePhrase[email]" placeholder="primer@email.ru" autocomplete="off"/>
                                <div className="help-block"></div>
                            </div>
                            <div className="icon-success-wrapper">
                                <i className="icon-success"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group field-greecephrase-body required">
                                <label className="control-label" for="greecephrase-body">Текст</label>
                                <textarea id="greecephrase-body" className="form-control" name="GreecePhrase[body]" placeholder="С подвыподвертом" autocomplete="off"></textarea>
                                <div className="help-block"></div>
                            </div>
                            <div className="icon-success-wrapper">
                                <i className="icon-success"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-default">Отправить</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}