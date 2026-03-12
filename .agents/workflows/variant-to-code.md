---
description: Convert Variant to code
---

# Workflow: Variant Code → Production Grade

---

@find-skills @typescript-advanced-types @web-performance-optimization

Here is React code exported from Variant AI:

[PASTE VARIANT CODE HERE]

Rewrite this code completely in place. Same visual output,
same interactions, same feeling — zero quality compromise.
Do not simplify anything. Make it better in every technical
dimension while preserving 100% of the design intent.

---

# RULE 1 — PRESERVE EVERYTHING VISUAL

Before changing a single line, extract and lock:

- Every exact color value → never change these
- Every animation timing and easing → never change these
- Every interaction behavior → never change these
- Every generative algorithm → never simplify these
- Every typographic choice → never change these

If it looks different after your rewrite, you failed.

---

# RULE 2 — TYPESCRIPT

- Add strict Props interface to every component
- Add explicit return types to every function and hook
- Replace every `any` with the correct specific type
- Replace every implicit type with explicit annotation
- Add null checks everywhere a value could be undefined
- Zero TypeScript errors when done — not "mostly clean"

---

# RULE 3 — HOOKS EXTRACTION

Extract ALL logic out of JSX into custom hooks:

- Every animation loop → useAnimationName()
- Every event listener → useEventName()
- Every DOM measurement → useMeasureName()
- Every timer or interval → useTimerName()
- Every external data → useDataName()

Each hook: single responsibility, typed parameters,
typed return value, cleanup function in useEffect return.

---

# RULE 4 — PERFORMANCE

- requestAnimationFrame: store ID in ref, cancel on unmount
- Event listeners: always remove in useEffect cleanup
- ResizeObserver: always disconnect in useEffect cleanup
- Canvas context: null check before every operation
- Expensive calculations: wrap in useMemo with correct deps
- Handlers passed as props: wrap in useCallback
- If any loop runs longer than 16ms: move to Web Worker
- Images: explicit width and height always
- Heavy third-party: dynamic import with Suspense fallback

---

# RULE 5 — ANIMATION

- Framer Motion variants: extract to constants above component,
  never define inline in JSX
- Every animated element: initial + animate + exit defined
- Add this to every animation block:
  const prefersReduced = window.matchMedia(
  '(prefers-reduced-motion: reduce)').matches
  If true: skip animation, render final state immediately

---

# RULE 6 — ACCESSIBILITY

- Every interactive element reachable via Tab key
- Every icon and decorative element: aria-hidden="true"
- Every meaningful image: descriptive alt text
- Every button without visible text: aria-label
- Every input: associated label
- Focus ring: visible on all interactive elements
  (never just remove outline — replace with custom style)

---

# RULE 7 — CODE HYGIENE

- Zero console.log
- Zero commented-out code
- Zero unused imports
- Zero unused variables
- Zero magic numbers — extract to named constants
- Components: maximum 80 lines — split beyond that
- Functions: maximum 20 lines — split beyond that
- Nesting: maximum 3 levels deep

---

# DELIVERY

Output the complete rewritten code.
Same files, same component names, same exports.
Nothing renamed, nothing restructured, nothing moved.
Just every line made production grade.

After output, confirm:

- Zero TypeScript errors
- Every Rule 1 visual element preserved exactly
- Every cleanup function present
- prefers-reduced-motion handled
