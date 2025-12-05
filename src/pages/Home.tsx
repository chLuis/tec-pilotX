import Header from "../components/header"
import PostsList from "../components/post-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PostsList />
    </main>
  )
}
