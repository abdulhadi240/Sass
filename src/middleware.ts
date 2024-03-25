import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const searchParams = url.searchParams.toString()
  let hostname = request.headers
  if (
    url.pathname === '/' 
    
  ) {
    return NextResponse.rewrite(new URL('https://peaceful-jargon-054085.framer.app/', request.url))
  }

  if (
    url.pathname === '/documentation' 
    
  ) {
    return NextResponse.rewrite(new URL('https://free-recipient-395950.framer.app/', request.url))
  }

}