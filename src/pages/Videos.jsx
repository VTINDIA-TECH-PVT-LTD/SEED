import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/innerbanner.png";
import VideoGallery from "../components/VideoGallery";


export default function Videos() {
  const videos = [
    {
      url: "https://www.youtube.com/embed/xgSv6_TsYKo?si=vdVx-nGQ7pzDRgiv",
      title: "Tree Plantation Drive "
    },
    {
      url: "https://www.youtube.com/embed/xgSv6_TsYKo?si=vdVx-nGQ7pzDRgiv",
      title: "Tree Plantation Drive "
    },
    {
      url: "https://www.youtube.com/embed/xgSv6_TsYKo?si=vdVx-nGQ7pzDRgiv",
      title: "Tree Plantation Drive "
    },
    {
      url: "https://www.youtube.com/embed/xgSv6_TsYKo?si=vdVx-nGQ7pzDRgiv",
      title: "Tree Plantation Drive "
    },

  ];


  return (
    <>

      <InnerPageBanner
        title="Video Gallery"
        background={bannerImage}
        breadcrumb="Gallery"
      />

      <VideoGallery heading="SEED Video Gallery" videos={videos} columns={3} />




    </>
  );

}

