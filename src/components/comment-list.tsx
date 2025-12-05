interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface CommentListProps {
  comments: Comment[]
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="text-center py-8 bg-muted rounded-lg">
        <p className="text-muted-foreground">Sin comentarios, sé el primero en comentar!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {comments.map((comment, index) => (
        <div key={comment.id}
        style={{ animationDelay: `${index * 0.2}s` }}
        className={`border border-border rounded-lg p-6 opacity-0 hover:shadow-md transition-shadow animate-showpost`}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h4 className="font-semibold text-foreground">{comment.name}</h4>
              <p className="text-sm text-muted-foreground">{comment.email}</p>
            </div>
            <span className="text-xs text-muted-foreground bg-muted rounded px-2 py-1">#{comment.id}</span>
          </div>
          <p className="text-foreground leading-relaxed">{comment.body}</p>
        </div>
      ))}
    </div>
  )
}
