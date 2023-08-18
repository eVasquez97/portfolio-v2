export default function ContactForm() {
  return (
    <div className="block w-full p-6 mt-1">
      <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full bg-transparent shadow-sm p-2"
            id="name"
            placeholder="Name"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            className="peer block min-h-[auto] w-full bg-transparent shadow-sm p-2"
            id="email"
            placeholder="Email address"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full bg-transparent shadow-sm p-2"
            id="body"
            rows={3}
            placeholder="Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-highlight text-text-dark w-full mx-auto shadow-md p-2"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Send
        </button>
      </form>
    </div>
  );
}
