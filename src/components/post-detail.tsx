"use client"

import { useEffect, useState } from "react"
import Loading from "./loading"
import ErrorMessage from "./error-message"

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface PostDetailProps {
  postId: string
}

export default function PostDetail({ postId }: PostDetailProps) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        if (!response.ok) {
          throw new Error("Error en la busqueda del post")
        }

        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocurrió un error inesperado")
        console.error("Error en la busqueda del post:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [postId])

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} />
  if (!post) return <ErrorMessage message="Post no encontrado" />

  return (
    <article className="mb-12">
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-3">
          Post #{post.id} • Usuario {post.userId}
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">U{post.userId}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Usuario {post.userId}</p>
              <p className="text-xs text-muted-foreground">Publicado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-lg text-foreground leading-relaxed whitespace-pre-wrap">{post.body}</p>
      </div>
    </article>
  )
}
