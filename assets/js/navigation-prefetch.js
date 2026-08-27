const prefetchedPages = new Set();

function prefetchPage(anchor) {
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

  const url = new URL(anchor.href, window.location.href);
  const isInternalPage = url.origin === window.location.origin &&
    (url.pathname.endsWith("/") || url.pathname.endsWith(".html"));
  const isCurrentPage = url.pathname === window.location.pathname &&
    url.search === window.location.search;

  if (!isInternalPage || isCurrentPage || prefetchedPages.has(url.href)) return;
  prefetchedPages.add(url.href);

  const addHint = () => {
    const hint = document.createElement("link");
    hint.rel = "prefetch";
    hint.href = url.href;
    hint.as = "document";
    document.head.appendChild(hint);
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(addHint, { timeout: 800 });
  } else {
    window.setTimeout(addHint, 0);
  }
}

function handleNavigationIntent(event) {
  prefetchPage(event.target.closest("a[href]"));
}

document.addEventListener("pointerover", handleNavigationIntent, { passive: true });
document.addEventListener("focusin", handleNavigationIntent);
document.addEventListener("touchstart", handleNavigationIntent, { passive: true });
