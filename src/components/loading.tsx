export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin mb-4" />
      <p className="text-muted-foreground">Cargando...</p>
    </div>
  )
}
