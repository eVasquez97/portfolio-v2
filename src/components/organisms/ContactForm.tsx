"use client";
import { ChangeEvent, useState } from "react";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    body: "",
  };

  const [mail, setMail] = useState(initialState);
  const valid = mail.name !== "" && mail.email !== "" && mail.body.length > 3;

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const temp = { ...mail, [name]: value };
    setMail(temp);
  }

  return (
    <div className="block w-full p-6 mt-1">
      <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full bg-transparent shadow-sm p-2"
            name="name"
            placeholder="Name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            className="peer block min-h-[auto] w-full bg-transparent shadow-sm p-2"
            name="email"
            placeholder="Email address"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full bg-transparent shadow-sm p-2"
            name="body"
            rows={3}
            placeholder="Message"
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>

        <a
          href={`mailto:ed100blade@hotmail.com?&subject=Mail from ${mail.name}&body=Hi, this is ${mail.name},%0A%0A Email address: ${mail.email}%0A%0A Message:%0A%0A ${mail.body}`}
          className="bg-highlight text-text-dark min-w-full mx-auto shadow-md p-2"
        >
          Send
        </a>
      </form>
    </div>
  );
}
