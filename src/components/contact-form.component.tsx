'use client'

import { useActionState } from 'react'
import { sendContactEmail } from '@/app/contact/action'

const situations = [
  "Renfort d'équipe",
  'Projet from scratch',
  'Refonte / Migration',
  'Refactoring & DX',
  'Audit technique',
  'Autre',
]

const inputClass =
  'border-border bg-bg focus:border-fg w-full border px-4 py-3 text-sm outline-none'
const labelClass = 'mb-2 block text-xs font-bold tracking-widest uppercase'

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, {
    success: false,
    error: null,
  })

  if (state.success) {
    return (
      <div className="flex items-center justify-center p-12">
        <p className="text-sm font-bold uppercase tracking-widest">
          Message envoyé. Je reviens vers vous rapidement.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-6">
      {state.error && (
        <p className="border-fg border bg-accent/20 px-4 py-3 text-xs">{state.error}</p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Entreprise
        </label>
        <input id="company" name="company" type="text" className={inputClass} />
      </div>

      <div>
        <label htmlFor="situation" className={labelClass}>
          Votre situation
        </label>
        <select id="situation" name="situation" className={`${inputClass} cursor-pointer`}>
          <option value="">Sélectionnez</option>
          {situations.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-accent text-bg hover:bg-bg hover:text-accent border-accent cursor-pointer border px-8 py-3 text-xs font-bold tracking-widest uppercase transition-colors disabled:opacity-50"
      >
        {pending ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>
    </form>
  )
}
