import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Navigation() {
  return (
    // <AppBar position="sticky">
    //   <Box sx={{ display: { sm: 'block' } }}>
    //     <div className="p-5">
    //     <Link href="/">Go Home</Link>
    //     <Link href="/experiences">Go to Experiences</Link>
    //     <Link href="/contact">Go to Contact</Link>
    //     </div>
    //   </Box>
    // </AppBar>
    <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CameraIcon className="h-6 w-6" />
          <span className="sr-only">Photography Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/experiences">
            Experiences
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
  )
}

function CameraIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}
