import type { NextRequest } from 'next/server';
import { proxy } from './proxy';
import { NextResponse } from 'next/server';
import unpublishedNoteSlugs from './generated/unpublished-note-slugs.json';

const unpublished = new Set(unpublishedNoteSlugs);

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\/notes\//, '').replace(/\/$/, '');
  if (!slug || slug.includes('/')) {
    return NextResponse.next();
  }
  if (unpublished.has(slug)) {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/notes/:slug',
};
