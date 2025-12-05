import { Suspense } from "react"
import Header from "../components/header"
import PostDetail from "../components/post-detail"
import CommentSection from "../components/comment-section"
import Loading from "../components/loading"
import { useParams } from "react-router-dom"

export default function PostPage() {
  const { id } = useParams()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Suspense fallback={<Loading />}>
          <PostDetail postId={id!} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <CommentSection postId={id!} />
        </Suspense>
      </div>
    </main>
  )
}
