import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <span className="text-xl italic font-semibold">Product <span className="text-blue-700">Arena</span></span>
          </Link>
        </div>
        <hr className="my-2 text-muted-foreground sm:mx-auto " />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link
            target="_blank"
            href="/"
            className="hover:underline"
          >
            Product Arena
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
