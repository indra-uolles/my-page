import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import TelegramLink from '../TelegramLink';
import ok from './ok.png';
import './style.css';


const contactsForm = (props) => {
    return (
        <form ref="formToSubmit" action="https://formspree.io/smirnovanatalia2008@gmail.com" method="post" className="contacts-form form" onSubmit={props.onSubmit}>
            <div className="row">
                <div className="col-md-3 form-control-wrapper">
                    <div className="form-group required">
                        <label className="control-label" htmlFor="nickname">Имя / Никнейм</label>
                        <input type="text" id="nickname" className="form-control" name="nickname" placeholder="Имя" autocomplete="off" value={props.nickname} onChange={props.handleUserInput}/>
                        <div className="help-block">{props.formErrors['nickname']}</div>
                    </div>
                </div>
                <div className="col-md-9 idea-form__email form-control-wrapper">
                    <div className="form-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <input type="email" id="email" className="form-control" name="email" placeholder="primer@email.ru" autocomplete="off" value={props.email} onChange={props.handleUserInput}/>
                        <div className="help-block">{props.formErrors['email']}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group required">
                        <label className="control-label" htmlFor="message">Текст</label>
                        <textarea id="message" className="form-control" name="message" placeholder="Сообщение" autoComplete="off" value={props.message} onChange={props.handleUserInput}></textarea>
                        <div className="help-block">{props.formErrors['message']}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-default">Отправить</button>
                </div>
            </div>
        </form>
    );
}

const sentMessage = () => {
    return (
        <div className="sentmessage">
            <img src={ok} alt="Хорошо"/>
            <p>Ваше сообщение отправлено</p>
        </div>
    );
}

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            message: '',
            formErrors: { nickname: '', email: '', message: '' },
            nicknameValid: false,
            emailValid: false,
            messageValid: false,
            formValid: false,
            sent: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    validateForm(callback) {
        let fieldValidationErrors = this.state.formErrors;

        let nicknameValid = this.state.nickname.length >= 1;
        fieldValidationErrors.nickname = nicknameValid ? '': 'напишите, как к вам обращаться';

        let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'введите свою почту';

        let messageValid = this.state.message.length >= 4;
        fieldValidationErrors.message = messageValid ? '': 'сообщение слишком короткое';

        let formValid = emailValid && nicknameValid && messageValid;

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nicknameValid: nicknameValid,
            messageValid: messageValid,
            formValid: formValid
        }, callback);
    }
    onSubmit(e) {
        e.preventDefault();
        this.validateForm(() => {
            if (!this.state.formValid) {
                return;
            } else {
                this.setState({
                    sent: true
                });
                //this.refs.formToSubmit.submit();
            }
        });
    }

    render() {
        const { className, ...props } = this.props;

        return (
            <section className={classnames('contacts', className)} {...props }>
                <h2>Контакты</h2>
                <p>Свяжитесь со мной через <TelegramLink link="https://telegram.me/natalia_dushkina"/> или напишите:</p>
                { this.state.sent ? sentMessage() : contactsForm({
                    formErrors: this.state.formErrors,
                    nickname: this.state.nickname,
                    email: this.state.email,
                    message: this.state.message,
                    onSubmit: this.onSubmit.bind(this),
                    handleUserInput: this.handleUserInput.bind(this)
                }) }
            </section>
        );
    }
}