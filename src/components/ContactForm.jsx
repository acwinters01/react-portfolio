import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = (props) => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Send");
    const [isSending, setIsSending] = useState(false);

    const serviceID = "service_giypozs";
    const templateID = "template_rafqhyq";
    const publicKey = "YfFxSGI7y35Rw5yK1";

    const sendEmail = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        setIsSending(true);

        try {
         await emailjs
            .sendForm( `${serviceID}`, `${templateID}`, form.current, {
                publicKey: `${publicKey}`,

            });

            setButtonText("Sent");
            setTimeout(()=> setButtonText("Send"), 3000);
            form.current.reset();

        } catch (error) {

            console.log('FAILED....', error.text);
            setButtonText("Failed");
            setTimeout(() => setButtonText("Send"), 3000);

        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name:
                    <input type='text' name='user_name' />
                </label>
                <label>Email: 
                    <input type='email' name='user_email'/>
                </label>
                <label>Message: 
                    <textarea name='message' rows={15} cols={55}/>
                </label>
                <button type='submit' disabled={isSending}>{buttonText}</button>
            </form>
        </>
    );
}