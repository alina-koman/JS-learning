import "../App.css"

const Loader = () => {
  return (
    <div role="status" aria-label="Завантаження">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle
          cx="32"
          cy="32"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="40 110"
        />
      </svg>
      <span>Завантаження...</span>
    </div>
  )
}

export default Loader