import React from 'react'
import "./SendMail.css"

import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../features/mailSlice'
import { db } from '../../firebase/firebase'
import firebase from 'firebase'
const SendMail = () => {

    const { register, handleSubmit, watch, errors } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            }
        );
        dispatch(closeSendMessage())
    }
    return (
        <div className="send__mail">
            <div className="send__mail__header">
                <h3>New Message</h3>
                <CloseIcon className="send__mail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    name="to"
                    placeholder="To"
                    ref={register({ required: true })}
                />
                {errors.to && <p className="send__mail__error">To is Required!</p>}

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    ref={register({ required: true })}
                />
                {errors.subject && <p className="send__mail__error">Subject is Required!</p>}

                <input type="text"
                    name="message"
                    className="send__mail__message"
                    ref={register({ required: true })}
                />
                {errors.message && <p className="send__mail__error">Message is Required!</p>}

                <div className="send__mail__options">
                    <Button
                        className="send__mail__btn"
                        variant="contained"
                        color="primary"
                        type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
