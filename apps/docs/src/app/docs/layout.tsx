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
      <div className="flex flex-1">
        {/* Sidebar collée à gauche */}
        <aside className="fixed top-14 z-30 hidden w-80 h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky md:block">
          <Sidebar />
        </aside>

        {/* Contenu principal utilisant toute la largeur restante */}
        <main className="flex-1 min-w-0 md:ml-80">
          <div className="mx-auto max-w-none px-8 py-8 lg:px-12 lg:py-12 xl:px-16">
            <div className="max-w-4xl">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}