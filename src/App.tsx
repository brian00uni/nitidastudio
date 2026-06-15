import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-6 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <h1 className="text-5xl font-semibold tracking-tight">nitida studio</h1>
      <p className="text-zinc-500 dark:text-zinc-400">
        Vite + React + TypeScript + Tailwind CSS
      </p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-700 active:scale-95"
      >
        count is {count}
      </button>
      <p className="text-sm text-zinc-400">
        Edit <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">src/App.tsx</code> and save to test HMR
      </p>
    </main>
  )
}

export default App
