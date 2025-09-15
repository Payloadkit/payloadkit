import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { TableOfContents } from '@/components/table-of-contents'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-1">
        {/* Left Sidebar pinned to left */}
        <aside className="fixed top-14 z-30 hidden w-80 h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky md:block">
          <Sidebar />
        </aside>

        {/* Main content with right sidebar */}
        <div className="flex-1 md:ml-25">
          <div className="flex">
            {/* Main content */}
            <main className="flex-1 min-w-0">
              <div className="px-6 py-8 lg:px-8 lg:py-12">
                {children}
              </div>
            </main>

            {/* Right Sidebar - Table of Contents */}
            <aside className="hidden xl:block w-64 shrink-0">
              <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-8">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}