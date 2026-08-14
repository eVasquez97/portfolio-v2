import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 text-center">
      <h1 className="text-3xl font-semibold mb-2">404 - Page Not Found</h1>
      <p className="text-secondaryText-light dark:text-secondaryText-dark mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-highlight hover:underline">
        Go back home
      </Link>
    </div>
  );
}
