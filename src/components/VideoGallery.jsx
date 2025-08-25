// src/components/Video.jsx
import React, { useMemo, useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

/**
 * Video.jsx
 * Props:
 *  - videos: Array of strings OR objects
 *      • string: any YouTube URL/ID
 *      • object: { url?: string, id?: string, title?: string }
 *  - heading?: string
 *  - columns?: number (default 3 on desktop)
 */
const VideoGallery = ({ videos = [], heading = "Videos", columns = 3 }) => {
  const [activeId, setActiveId] = useState(null);

  // Accept many YouTube formats and return the video ID
  const toId = (input) => {
    if (!input) return "";
    const str = typeof input === "string" ? input : input.id || input.url || "";
    // Already an 11-char YouTube ID
    if (/^[\w-]{11}$/.test(str)) return str;

    // Try to extract from URLs
    try {
      const url = new URL(str);
      // youtu.be/VIDEOID
      if (url.hostname.includes("youtu.be")) {
        return url.pathname.replace("/", "").slice(0, 11);
      }
      // youtube.com/watch?v=VIDEOID or /embed/VIDEOID or /shorts/VIDEOID
      const vParam = url.searchParams.get("v");
      if (vParam) return vParam.slice(0, 11);

      const parts = url.pathname.split("/");
      const idx = parts.findIndex((p) =>
        ["embed", "shorts", "v"].includes(p.toLowerCase())
      );
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1].slice(0, 11);
    } catch {
      // Not a URL; fall through
    }
    return "";
  };

  // Normalize list to { id, title }
  const items = useMemo(() => {
    if (!videos.length) {
      return [
        { id: "dQw4w9WgXcQ", title: "Sample Video 1" },
        { id: "ysz5S6PUM-U", title: "Sample Video 2" },
        { id: "aqz-KE-bpKQ", title: "Sample Video 3" },
      ];
    }
    return videos
      .map((v) =>
        typeof v === "string"
          ? { id: toId(v), title: "" }
          : { id: v.id || toId(v.url), title: v.title || "" }
      )
      .filter((v) => v.id);
  }, [videos]);

  const open = (id) => setActiveId(id);
  const close = () => setActiveId(null);

  // Simple inline styles to keep this file self-contained
  const styles = {
    section: { padding: "30px 0", background: "#f9f9f9" },
    container: { maxWidth: 1140, margin: "0 auto", padding: "0 16px" },
    heading: {
      textAlign: "center",
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 20,
      color: "#2b2b2b",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 16,
    },
    card: {
      position: "relative",
      borderRadius: 12,
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 6px 14px rgba(0,0,0,.08)",
      cursor: "pointer",
      transition: "transform .25s ease, box-shadow .25s ease",
    },
    thumbWrap: {
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%", // 16:9
      overflow: "hidden",
      background: "#eee",
    },
    thumb: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .35s ease",
    },
    play: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 56,
      height: 56,
      borderRadius: "999px",
      display: "grid",
      placeItems: "center",
      background: "#4fad0a",
      color: "#fff",
      boxShadow: "0 8px 18px rgba(79,173,10,.35)",
      transition: "transform .25s ease",
    },
    title: {
      padding: "10px 14px 14px",
      fontSize: 15,
      fontWeight: 600,
      color: "#2b2b2b",
    },
    modal: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: 16,
    },
    modalInner: {
      width: "min(100%, 960px)",
      aspectRatio: "16 / 9",
      background: "#000",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,.4)",
      position: "relative",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
      display: "block",
    },
    closeBtn: {
      position: "absolute",
      top: -44,
      right: 0,
      background: "#4fad0a",
      color: "#fff",
      border: "none",
      padding: "10px 12px",
      borderRadius: 8,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 8px 18px rgba(79,173,10,.35)",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {heading && <h2 style={styles.heading}>{heading}</h2>}

        <div
          style={styles.grid}
          className="video-grid"
        >
          {items.map(({ id, title }, idx) => (
            <div
              key={id + idx}
              style={styles.card}
              className="video-card"
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
                const play = e.currentTarget.querySelector(".play-badge");
                if (play) play.style.transform = "translate(-50%, -50%) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
                const play = e.currentTarget.querySelector(".play-badge");
                if (play) play.style.transform = "translate(-50%, -50%) scale(1)";
              }}
            >
              <button
                aria-label={`Play ${title || "video"}`}
                onClick={() => open(id)}
                style={{ all: "unset", display: "block" }}
              >
                <div style={styles.thumbWrap}>
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title || "Video thumbnail"}
                    style={styles.thumb}
                    loading="lazy"
                  />
                  <div className="play-badge" style={styles.play}>
                    <FaPlay />
                  </div>
                </div>
                {title ? <div style={styles.title}>{title}</div> : null}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeId && (
        <div style={styles.modal} onClick={close} role="dialog" aria-modal="true">
          <div
            style={styles.modalInner}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.closeBtn} onClick={close} aria-label="Close video">
              <FaTimes />
              Close
            </button>
            <iframe
              style={styles.iframe}
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Small responsive tweak */}
      <style>{`
        @media (max-width: 992px) {
          .video-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .video-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default VideoGallery;
