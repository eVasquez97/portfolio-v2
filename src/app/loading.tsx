export default function Loading() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <iframe
        src="https://giphy.com/embed/RhGbWYqUJdPWM18zI6"
        width="100%"
        height="100%"
        className="absolute self-center"
        allowFullScreen
      >
        <h1 className="text-center text-secondaryText-light font-semibold text-lg">
          Loading...
        </h1>
      </iframe>
    </div>
  );
}
