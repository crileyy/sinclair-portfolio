import Link from "next/link"

export default function Footer() {
  return (
    // <div className="flex flex-col items-center">
    //   Made by Colin
    // </div>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© Photography Portfolio. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="https://github.com/crileyy" target="_blank">
          Made by Colin
        </a>
      </nav>
    </footer>
  )
}
