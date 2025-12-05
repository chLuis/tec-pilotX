import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            PostPilotX
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Posts
            </Link>
            <Link to="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
