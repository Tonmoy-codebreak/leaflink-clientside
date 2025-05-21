import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import EventSlideOne from "../EvenSlides/EventSlideOne";
import Swal from "sweetalert2";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="text-center">
      <Slider {...settings}>
        {/* Slide 1 ------------------------------------------------------------------------ */}
        <div>
          <EventSlideOne
            bgImage="https://i.ibb.co/5WzPrmYn/spring-Event.jpg"
            title="Spring Gardening Contest"
            about="Join fellow green thumbs in our annual Spring Gardening Contest!
            Showcase your lushest balcony gardens, creative compost setups, or blooming backyard beds.
            Submit photos, share techniques, and compete for eco-friendly prizes."
            date="May 30, 2025"
            location="Online"
            onParticipate={() =>
              Swal.fire({
                title: "Participated!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                toast: true,
                position: "top-end",
              })
            }
          />
        </div>
        {/* Slide 2 ------------------------------------------------------------------------ */}
        <div>
          <EventSlideOne
            bgImage="https://i.ibb.co/3yG8GmG4/garden-Event.jpg"
            title="Urban Garden Showcase"
            about="Celebrate the beauty of small-space gardening! Share your innovative rooftop setups, container gardens, or balcony plant havens. 
            Get inspired and connect with city gardeners from around the world."
            date="June 12, 2025"
            location="Virtual Meetup"
            onParticipate={() =>
              Swal.fire({
                title: "Participated!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                toast: true,
                position: "top-end",
              })
            }
          />
        </div>
        {/* Slide 3 ------------------------------------------------------------------------ */}
        <div>
          <EventSlideOne
            bgImage="https://i.ibb.co/PvbCy43X/leaf-Link-Event.jpg"
            title="The Art of the Leaf"
            about="Celebrate nature’s design in The Art of the Leaf Event!
            From unique shapes to vibrant colors, showcase stunning leaf photography, pressed leaf crafts, or fun facts about your favorite foliage. 
            A relaxing, creative event for all nature lovers!"
            date="July 5, 2025"
            location="Online Submissions & Gallery"
            onParticipate={() =>
              Swal.fire({
                title: "Participated!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                toast: true,
                position: "top-end",
              })
            }
          />
        </div>
      </Slider>
    </div>
  );
}
