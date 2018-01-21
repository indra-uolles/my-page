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
        let formErrors = this.state.formErrors;
        formErrors[name] = '';
        this.setState({
            [name]: value,
            formErrors: formErrors
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

    // formDataToJson = (formData) => {
    //     const entries = formData.entries();
    //     const dataObj = Array.from(entries).reduce( (data, [key, value]) => {
    //         data[key] = value;
    //         if (key === 'email') {
    //           data._replyTo = value;
    //         }
    //         return data;
    //     }, {});
    //     return JSON.stringify(dataObj);
    // }

    onSubmit = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            nickname: this.state.nickname,
            email: this.state.email,
            message: this.state.message,
            _replyTo: this.state.email
        });

        this.validateForm(() => {
            let _this = this;
            if (!this.state.formValid) {
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
                    console.log('Fetch Error :-S', err);
                });
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