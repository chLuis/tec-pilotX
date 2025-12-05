"use client"

import { useEffect, useState } from "react"
import PostCard from "./post-card"
import Loading from "./loading"
import ErrorMessage from "./error-message"
import { Link } from "react-router-dom"

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }

        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred while fetching posts")
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-2">Últimos posts</h1>
        <p className="text-muted-foreground text-lg">Explora nuestra colección de {posts.length} posts</p>
      </div>

      <div className="grid gap-6">
        {posts.map((post, index) => (
          <Link style={{ animationDelay: `${index * 0.01}s` }} className="opacity-0 animate-showpost" key={post.id} to={`/post/${post.id}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </section>
  )
}
