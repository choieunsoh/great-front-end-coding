// Contact Form: Build a contact form which submits user feedback and contact details to a back end API
// https://www.greatfrontend.com/questions/user-interface/contact-form

import React from 'react';
import submitForm, { SUBMIT_URL } from './submitForm';

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      method="post"
      action={SUBMIT_URL}
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea id="message-input" name="message"></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}
