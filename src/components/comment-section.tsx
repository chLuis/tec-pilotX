"use client"

import { useEffect, useState } from "react"
import CommentForm from "./comment-form"
import CommentList from "./comment-list"
import Loading from "./loading"
import ErrorMessage from "./error-message"

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

        if (!response.ok) {
          throw new Error("Failed to fetch comments")
        }

        const data = await response.json()
        setComments(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        console.error("Error fetching comments:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchComments()
  }, [postId])

  const handleAddComment = (newComment: Omit<Comment, "postId" | "id">) => {
    const comment: Comment = {
      ...newComment,
      postId: Number(postId),
      id: Math.max(...comments.map((c) => c.id), 0) + 1,
    }
    setComments([comment, ...comments])
  }

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Comentarios</h2>
        <p className="text-muted-foreground">
          {comments.length} {comments.length === 1 ? "comentario" : "comentarios"}
        </p>
      </div>

      <CommentForm onAddComment={handleAddComment} />

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <CommentList comments={comments} />}
    </section>
  )
}
