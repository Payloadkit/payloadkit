export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to PayloadKit
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your PayloadCMS project is ready! Start building amazing things.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Next steps:
            </p>
            <ul className="text-sm space-y-2 text-left max-w-md mx-auto">
              <li>• Configure your database in .env</li>
              <li>• Visit /admin to access PayloadCMS</li>
              <li>• Add more blocks with `payloadkit add [component]`</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}