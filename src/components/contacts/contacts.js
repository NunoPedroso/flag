import React, {useContext, useEffect} from 'react';
import { ToastContext } from '../../contexts/toast-context';

import {isEmailValid as isEmail, isNotEmpty} from '../../helpers/form-validations';

import './contacts.scss';

const max = 280;

function Contacts() {
    const [missing, setMissing] = React.useState(max);
    const [feedbackMessage, setFeedbackMessage] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [isEmailValid, setIsEmailValid] = React.useState('');
    const [isSubjectValid, setIsSubjectValid] = React.useState('');
    const [isMessageValid, setIsMessageValid] = React.useState('');

    const {toasts, setToasts} = useContext(ToastContext);


    /* missing dependencies removed to avoid eternal loop */
    useEffect(() => {
        console.log('feedback message was updated');
        if(feedbackMessage) {
            const data = [...toasts];
            data.push({
                id: new Date().getTime(),
                message: feedbackMessage,
                type: (feedbackMessage === 'Informação submetida com sucesso') ? 'success' : 'danger'
            });
            setToasts(data);
        }
    }, [feedbackMessage,toasts, setToasts]);

    const handleKeyUp = (event) => {
        setMissing(max - event.target.value.length);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFeedbackMessage('');


        setStatus('');

        const info = {
            email: event.target.cf_email.value,
            subject: event.target.cf_subject.value,
            message: event.target.cf_message.value
        };

        const checkEmail = isEmail(info.email) ? '' : 'error';
        const checkSubject = isNotEmpty(info.subject) ? '' : 'error';
        const checkMessage = isNotEmpty(info.message) ? '' : 'error';

        setIsEmailValid(checkEmail);
        setIsSubjectValid(checkSubject);
        setIsMessageValid(checkMessage);

        if(checkEmail || checkSubject || checkMessage) {
            setFeedbackMessage('Preencha o formulário correctamente!');
            setStatus('error');
        } else {
            const response = await fetch('https://run.mocky.io/v3/316b41ae-ca10-42bb-8da2-3f7e66fb8bb8');
            const result = await response.json();
            setFeedbackMessage(result.message);
            setStatus('success');
        }
    }

    return (
        <form data-status={status} onSubmit={handleSubmit} id="contact-form" action="" className="contact-form" noValidate>
            <p className="contact-form__title">Contact us</p>
            <p>{toasts.length} notificações.</p>

            {status !== 'success' ? (
                <>
                    <label className="contact-form__label" htmlFor="cf_email">Your email</label>
                    <input className={`contact-form__input ${isEmailValid}`} type="email" name="cf_email" id="cf_email" required />

                    <label className="contact-form__label" htmlFor="cf_subject">Subject</label>
                    <input className={`contact-form__input ${isSubjectValid}`} type="text" name="cf_subject" id="cf_subject" required />

                    <label className="contact-form__label" htmlFor="cf_message">Your message</label>
                    <textarea maxLength={max} rows="6" className={`contact-form__textarea ${isMessageValid}`} name="cf_message" id="cf_message" required onKeyUp={handleKeyUp}></textarea>
                    <span className="contact-form__count"><b>{missing}</b> characters left</span>

                    <label className="contact-form__label" htmlFor="cf_files">Upload a file</label>
                    <input type="file" name="cf_files[]" accept=".jpg,.png,.svg" />

                    <button className="button contact-form__submit" type="submit">Send message</button>
                </>
            ) : (
                <p>Obrigado.</p>
            )}

            {feedbackMessage && <p className='contact-form__feedback'>{feedbackMessage}</p>}
        </form>
    );
}

export default Contacts;
