import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Navigation() {
  return (
    <AppBar position="relative">
      <Box sx={{ display: { sm: 'block' } }}>
        <Link href="/">Go Home</Link>
        <Link href="/experience">Go to Experience</Link>
        <Link href="/contact">Go to Contact</Link>
      </Box>
    </AppBar>
  )
}