import { useState } from "react";
import { FaLeaf } from "react-icons/fa";

const PhotoGallery = ({ gallery }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const filteredGallery =
    activeFilter === "all"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, index: 0 });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % filteredGallery.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + filteredGallery.length) % filteredGallery.length,
    }));
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Filter Buttons */}


        <div className="filter">
          {["all", "Activities", "Others"].map((cat) => (
            <button
              key={cat}
              className={`btn ${activeFilter === cat ? "btn-active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              <span>{cat.toUpperCase()}</span>
              {activeFilter === cat && <span className="leaf-icon">🍃</span>}
            </button>
          ))}
        </div>



        {/* Gallery Grid */}
        <div className="gallery">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.category}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={`/uploads/gallery/${item.photo}`}
                alt={item.title}
              />
              <div className="gallery-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="openDiv">
          <img
            src={`/uploads/gallery/${filteredGallery[lightbox.index].photo}`}
            alt={filteredGallery[lightbox.index].title}
            className="imgPreview"
          />
          <div className="lightbox-title">
            {filteredGallery[lightbox.index].title}
          </div>

          <button className="closeBtn" onClick={closeLightbox}>
            ✕
          </button>
          <button className="nextButton" onClick={nextImage}>
            ➡
          </button>
          <button className="prevButton" onClick={prevImage}>
            ⬅
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
