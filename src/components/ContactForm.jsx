/*
    File: ContactForm.jsx
    Author: Viraj
    Copyright: 2023 - Viraj https://edpark.space
    Version: 1.0
*/

const useBasinFormId = '6ef567b5be7c';

export default function ContactForm() {
    return (
        <>
            <p className="text-center">Fields marked with asterisk (*) cannot be left blank.</p>
            <form
                name="contact-form"
                action={`https://usebasin.com/f/${useBasinFormId}`}
                method="POST"
                className="w-[100%] flex flex-col flex-nowrap items-center gap-7"
            >
                <label className="max-w-[30em] w-[100%]">
                    Full Name *
                    <input
                        type="text"
                        id="contact-name"
                        name="contact-name"
                        className="mt-3 px-5 py-4 border rounded-[5px] max-w-[30em] w-[100%]"
                        placeholder="Name"
                        required
                    />
                </label>

                <label className="max-w-[30em] w-[100%]">
                    Email Address *
                    <input
                        type="email"
                        id="contact-email"
                        name="contact-email"
                        className="mt-3 px-5 py-4 border rounded-[5px] max-w-[30em] w-[100%]"
                        placeholder="Email"
                        required
                    />
                </label>

                <input type="hidden" name="_gotcha" />

                <label className="max-w-[30em] w-[100%]">
                    Message *
                    <textarea
                        id="contact-message"
                        name="contact-message"
                        rows="4"
                        className="mt-3 px-5 py-4 border rounded-[5px] max-w-[30em] w-[100%]"
                        placeholder="Your message here..."
                        required
                    />
                </label>

                <button type="submit" className="mt-8 glassy-icon px-6">
                    Submit Message
                </button>
            </form>
        </>
    );
}