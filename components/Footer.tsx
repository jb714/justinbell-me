const Footer = () => {
  return (
    <footer className="border-t border-line px-10 py-9 flex justify-between items-center flex-wrap gap-3">
      <div className="font-display font-semibold">Justin Bell</div>
      <div className="font-mono text-xs text-muted">
        Senior Software Engineer · Los Angeles, CA · © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
