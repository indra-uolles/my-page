import React, { Component } from 'react';
import classnames from 'classnames';
import Captcha from 'react-captcha';

import TelegramLink from '../TelegramLink';
import ok from './ok.png';
import './style.css';

const ContactsForm = (props) => {
    return (
        <form ref="formToSubmit" action="https://formspree.io/smirnovanatalia2008@gmail.com" method="post" className="contacts-form form" onSubmit={props.onSubmit}>
            <div className="row">
                <div className="col-md-3 form-control-wrapper">
                    <div className="form-group required">
                        <label className="control-label" htmlFor="nickname">Имя / Никнейм</label>
                        <input type="text" id="nickname" className="form-control" name="nickname" placeholder="Имя" autoComplete="off" value={props.nickname} onChange={props.handleUserInput}/>
                        <div className="help-block">{props.formErrors['nickname']}</div>
                    </div>
                </div>
                <div className="col-md-9 idea-form__email form-control-wrapper">
                    <div className="form-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <input type="email" id="email" className="form-control" name="email" placeholder="primer@email.ru" autoComplete="off" value={props.email} onChange={props.handleUserInput}/>
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
                    <input type="text" name="_gotcha" style={{display: 'none'}} />
                    <Captcha
                        sitekey = '6LdZzkEUAAAAAFkZR2LQhuw1pwMoEVP_mPv3-Q57'
                        lang = 'ru'
                        theme = 'light'
                        type = 'image'
                        callback = {(value) => props.onCaptchaChange(value)}/>
                    <div className="help-block">{props.captchaMessage}</div>
                    <button type="submit" className="btn btn-default">Отправить</button>
                </div>
            </div>
        </form>
    );
};

const SentMessage = () => {
    return (
        <div className="sentmessage">
            <img src={ok} alt="Хорошо"/>
            <p>Ваше сообщение отправлено</p>
        </div>
    );
};

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
            sent: false,
            captcha: '',
            captchaState: 'initial'
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let formErrors = this.state.formErrors;
        formErrors[name] = '';
        this.setState({
            [name]: value,
            formErrors: formErrors
        });
    }

    onCaptchaChange = (value) => {
        let _this = this;
        _this.setState({
            captcha: value,
            captchaState: 'checking'
        });
        fetch('https://my-firebase-server.firebaseapp.com/captchacheck', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ captcha: value })
        }).then(function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +  response.status);
                return;
            }
            response.json().then(function(data) {
                data.success === true && _this.setState({
                    captchaState: 'checked'
                });
            });
        });
    }

    validateForm = (callback) => {
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

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.captchaState == 'initial') {
            this.setState({
                captchaState: 'submitinitial'
            });
        }

        const formData = JSON.stringify({
            nickname: this.state.nickname,
            email: this.state.email,
            message: this.state.message,
            _replyTo: this.state.email
        });

        this.validateForm(() => {
            let _this = this;
            if (!this.state.formValid || this.state.captchaState !== 'checked') {
                return;
            } else {
                fetch('https://formspree.io/smirnovanatalia2008@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +  response.status);
                        return;
                    }

                    response.json().then(function(data) {
                        if (data.success === 'email sent') {
                            _this.setState({
                                sent: true
                            });
                        }
                    });
                })
                .catch(function(err) {
                    console.log('Fetch Error', err);
                });
            }
        });
    }

    render() {
        const { className, ...props } = this.props;
        let captchaMessage = '';
        if (this.state.captchaState == 'checking') {
            captchaMessage = 'капча проверяется...';
        } else if (this.state.captchaState == 'submitinitial') {
            captchaMessage = 'докажите, что не робот';
        }

        return (
            <section className={classnames('contacts', className)} {...props }>
                <h2>Контакты</h2>
                <p>Свяжитесь со мной через <TelegramLink link="https://telegram.me/natalia_dushkina"/> или напишите:</p>
                { this.state.sent ? SentMessage() : ContactsForm({
                    formErrors: this.state.formErrors,
                    nickname: this.state.nickname,
                    email: this.state.email,
                    message: this.state.message,
                    onSubmit: this.onSubmit.bind(this),
                    handleUserInput: this.handleUserInput.bind(this),
                    onCaptchaChange: this.onCaptchaChange.bind(this),
                    captchaMessage: captchaMessage
                }) }
            </section>
        );
    }
}