import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

// The portfolio is a standalone static site served from /portfolio/index.html.
// The home route redirects there so the live preview shows the portfolio.
function Index() {
  useEffect(() => {
    window.location.replace("/portfolio/index.html");
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#06122b", color: "#a9bbdc" }}
    >
      <a
        href="/portfolio/index.html"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem" }}
      >
        Opening portfolio… tap here if it doesn't load.
      </a>
    </div>
  );
}
