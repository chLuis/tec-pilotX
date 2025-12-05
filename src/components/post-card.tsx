interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const excerpt = post.body.substring(0, 150) + "..."

  return (
    <article className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 text-sm text-muted-foreground">Post #{post.id}</div>
          <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
        </div>
        <div className="text-primary text-2xl group-hover:translate-x-1 transition-transform">→</div>
      </div>
    </article>
  )
}
