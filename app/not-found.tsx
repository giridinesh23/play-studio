import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-montserrat text-8xl font-bold text-accent">404</h1>
        <h2 className="font-montserrat text-2xl font-semibold text-text mt-4">
          Page Not Found
        </h2>
        <p className="text-text-muted mt-2 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 bg-accent text-dark font-montserrat font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-accent-hover transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
