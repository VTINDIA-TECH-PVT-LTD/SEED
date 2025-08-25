import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/innerbanner.png";
import PhotoGallery from "../components/PhotoGallery";



// Mock gallery data (replace with API or props)
const galleryData = [
  { type: "Photo", category: "Activities", title: "Activities1", photo: "act6.png" },
  { type: "Photo", category: "Others", title: "Others", photo: "vision.png" },
  { type: "Photo", category: "Activities", title: "Activities2", photo: "act2.jpg" },
  { type: "Photo", category: "Activities", title: "Activities2", photo: "act4.png" },

];

/**
 * Photo page component
 *
 * This component renders the photo gallery page which displays photos
 * from various events and Activities. It also includes the inner page
 * banner, footer and floating social media links.
 *
 * @returns {ReactElement} The photo page component
 */
const Photos = () => {
  return (
    <>

       <InnerPageBanner
        title="Photo Gallery"
        background={bannerImage}
        breadcrumb="Gallery"
      />


      <PhotoGallery gallery={galleryData} />

    </>
  );
};

export default Photos;
