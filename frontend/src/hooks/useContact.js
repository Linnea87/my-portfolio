// ====== useContact Hook ===============================

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ====== Constants ===============================

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// ====== Hook ===============================

const useContact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    // ====== Send Email ===============================

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setLoading(false);
                form.current.reset();
            })
            .catch(() => {
                setStatus('error');
                setLoading(false);
            });
    };

    return { form, status, loading, sendEmail };
};

export default useContact;