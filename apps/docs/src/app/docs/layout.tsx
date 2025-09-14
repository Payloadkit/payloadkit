import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
          <Sidebar />
        </aside>
        <main className="relative py-8 lg:py-12 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 max-w-4xl px-4 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}