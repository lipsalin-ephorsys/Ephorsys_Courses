import Slider from "../../components/ui/Slider.jsx";

import backend from "../../assets/backend.jpg";
import frontend from "../../assets/frontend.jpg";
import fullstack from "../../assets/fullstack.png";
import mentorship from "../../assets/mentorship.jpg";
import projects from "../../assets/projects.jpg";
import career from "../../assets/career.jpg";
import placement from "../../assets/placement.jpg";
import industry from "../../assets/industry.jpg";

const ImageSlider = () => {
  const images = [
    backend,
    frontend,
    fullstack,
    projects,
    career,
    placement,
    industry,
    mentorship,
  ];

  return (
    <section className="w-full px-10 py-6">
      <Slider>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex h-64 items-center justify-center px-3">
            
            <img src={image}  alt=""
              className="h-full w-full rounded-2xl object-cover"/>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;