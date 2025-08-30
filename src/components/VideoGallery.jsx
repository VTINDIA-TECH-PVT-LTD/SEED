// src/components/VideoGallery.jsx
import React, { useMemo, useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

const VideoGallery = ({ videos = [], heading = "Videos", columns = 4 }) => {
  const [activeId, setActiveId] = useState(null);

  // Extract video ID
  const toId = (input) => {
    if (!input) return "";
    const str = typeof input === "string" ? input : input.id || input.url || "";
    if (/^[\w-]{11}$/.test(str)) return str;
    try {
      const url = new URL(str);
      const vParam = url.searchParams.get("v");
      if (vParam) return vParam.slice(0, 11);
      const parts = url.pathname.split("/");
      return parts.pop().slice(0, 11);
    } catch {
      return "";
    }
  };

  // Normalize
  const items = useMemo(() => {
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

  return (
    <section className="video-section">
      <div className="container">
        {heading && <h2 className="video-heading">{heading}</h2>}

        <div className="video-grid">
          {items.map(({ id, title }, idx) => (
            <div key={id + idx} className="video-card">
              <button
                aria-label={`Play ${title || "video"}`}
                onClick={() => open(id)}
                className="video-btn"
              >
                <div className="thumb-wrap">
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title || "Video thumbnail"}
                    loading="lazy"
                  />
                  <div className="overlay">
                    <FaPlay className="play-icon" />
                    {title && <span className="video-title">{title}</span>}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeId && (
        <div className="video-modal" onClick={close}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={close}>
              <FaTimes /> Close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        .video-section { padding: 40px 0; background: #f9f9f9; }
        
        .video-heading { text-align: center; font-size: 28px; font-weight: 700; margin-bottom: 24px; }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .video-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 14px rgba(0,0,0,.08);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .video-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,.12);
        }
        .video-btn { all: unset; display: block; width: 100%; cursor: pointer; }
        .thumb-wrap { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .thumb-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }
        .video-card:hover img { transform: scale(1.1); }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.05));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 12px;
          opacity: 0;
          transition: opacity .3s ease;
        }
        .video-card:hover .overlay { opacity: 1; }
        .play-icon {
          font-size: 40px;
          color: #4fad0a;
          margin-bottom: 8px;
        }
        .video-title { color: #fff; font-size: 16px; font-weight: 600; text-align: center; }

        /* Modal */
        .video-modal {
          position: fixed; inset: 0;
          background: rgba(0,0,0,.85);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; padding: 16px;
        }
        .modal-inner {
          width: min(100%, 960px);
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .modal-inner iframe { width: 100%; height: 100%; border: none; }
        .close-btn {
          position: absolute; top: -44px; right: 0;
          background: #4fad0a; color: #fff; border: none;
          padding: 10px 14px; border-radius: 8px;
          cursor: pointer; display: flex; align-items: center; gap: 6px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .video-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .video-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default VideoGallery;
