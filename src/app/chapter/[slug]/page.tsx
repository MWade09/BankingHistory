import { notFound } from 'next/navigation'
import { chapterContents } from '@/data/chapters'
import ChapterNavigation from '@/components/Chapter/ChapterNavigation'
import ChapterContent from '@/components/Chapter/ChapterContent'

interface ChapterPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return chapterContents.map((chapter) => ({
    slug: chapter.slug,
  }))
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const resolvedParams = await params
  const chapter = chapterContents.find(c => c.slug === resolvedParams.slug)
  
  if (!chapter) {
    return {
      title: 'Chapter Not Found',
    }
  }

  return {
    title: `${chapter.title} | The Illusion of Money`,
    description: chapter.introduction.substring(0, 160),
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const resolvedParams = await params
  const chapter = chapterContents.find(c => c.slug === resolvedParams.slug)

  if (!chapter) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <ChapterNavigation currentChapter={resolvedParams.slug} />

      {/* Content */}
      <div className="relative z-10 container mx-auto pb-8 sm:pb-12">
        <ChapterContent chapter={chapter} />
      </div>
    </main>
  )
}