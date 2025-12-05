"use client"

import type React from "react"

import { useState } from "react"
import { showToast } from "../providers/toast-provider";
import { Loader2 } from "lucide-react";

interface CommentFormProps {
  onAddComment: (comment: { name: string; email: string; body: string }) => void
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.body.trim()) {
      return showToast({texto : "Por favor completa todos los campos", tipo: "info"})
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return showToast({texto: "Por favor ingresa un email válido", tipo: "info"})
    }
    
    setLoading(true)
    setTimeout(() => {
      onAddComment(formData)
      setFormData({ name: "", email: "", body: "" })
      setSubmitted(true)
      showToast({ texto: "Comment added successfully!", tipo: "success" })
      setLoading(false)
    }, 3000)
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-12 bg-muted rounded-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Haz un comentario</h3>

      <div className="grid gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background text-foreground border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background text-foreground border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="body" className="block text-sm font-medium text-foreground mb-2">
            Comentario
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-background text-foreground border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Comparte tus ideas..."
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-accent transition-colors cursor-pointer min-w-48 disabled:bg-primary/20 duration-200"
        >
          {loading ? <Loader2 className="mx-auto animate-spin"/> : 'Hacer comentario'}
        </button>
        {submitted && <p className="text-sm text-green-600 font-medium">✓ Comentario agregado exitósamente!</p>}
      </div>
    </form>
  )
}
