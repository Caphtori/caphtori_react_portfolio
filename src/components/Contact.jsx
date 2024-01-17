import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) =>{
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
        const emptyField = (name)=>{
            setErrorMessage(`${name} is a required field.`);
        }

        switch(inputType){
            case 'email':
                setEmail(inputValue);
                if (!email){
                    emptyField(email);
                }else if(!validateEmail(email)){
                    setErrorMessage('Invalid email address.');
                } else {
                    setErrorMessage('');
                }
                break;
            case 'name':
                setName(inputValue);
                if (!name){
                    emptyField(name);
                } else {
                    setErrorMessage('');
                }
                break;
            case 'message':
                setMessage(inputValue);
                if (!message){
                    emptyField(message);
                } else {
                    setErrorMessage('');
                }
        };
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (name&&email&&message){
            if (errorMessage){
                return;
            } else{
                console.log('Success!', { name, email, message});
            };
        };
        
    };

    return(
        <section className='contact'>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" name='name' defaultValue={name} onBlur={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email" name="email" defaultValue={email} onBlur={handleInputChange}></label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleInputChange}></textarea>
                </div>
                {errorMessage&&(
                    <div className="error-box">
                        <h3>{errorMessage}</h3>
                    </div>
                )};
                <button type='submit'>
                    Submit
                </button>
            </form>
        </section>
    )
};