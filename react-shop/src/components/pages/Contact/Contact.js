import React, {useState} from 'react';

function Contact()
{
    const alertOutline = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white';
    const outline = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500';
    const messageText = 'no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none';
    const messageTextAlert = 'no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
    const alertMessage = <p className="text-red-500 text-xs italic">Please fill out this field.</p>;

    const [alert, setAlert] = useState(false);
    const [alertTextMessage, setAlertTextMessage] = useState(false);

    const handleRequiredFields = (e) =>{
        if(e.target.value)
        {
            setAlert(false);
            setAlertTextMessage(false);
        }else
        {
            setAlert(true);
            setAlertTextMessage(true);
        }
   }
    return(
        <div className='flex justify-center'>
            <div>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input onBlur={(e) => handleRequiredFields(e)} className={alert? alertOutline: outline} id="grid-first-name" type="text" placeholder="Jane"/>
                        {alertTextMessage? alertMessage: <br/>}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input onBlur={(e) => handleRequiredFields(e)} className={alert? alertOutline: outline} id="grid-last-name" type="text" placeholder="Doe"/>
                        {alertTextMessage? alertMessage: <br/>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input onBlur={(e) => handleRequiredFields(e)} className={alert? alertOutline: outline} id="email" type="email"/>
                        <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea onBlur={(e) => handleRequiredFields(e)} className={alert? messageTextAlert: messageText} id="message"></textarea>
                        <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>

            </div>
        </div>
    );
}


export default Contact;



