interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
      <div className="flex items-center gap-3">
        <span className="text-red-600 text-xl">⚠</span>
        <div>
          <h3 className="font-semibold text-red-900">Error</h3>
          <p className="text-red-700 text-sm">{message}</p>
        </div>
      </div>
    </div>
  )
}
