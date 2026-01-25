import "./Home.css";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutUs.jsx";
import UpcomingEvents from "./UpcomingEvent.jsx";
import Testimonials from "./Testimonial.jsx";
import MeetTheTeam from "./Meet the Team/MeetTheTeam.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <UpcomingEvents/>
      <Testimonials/>
      <MeetTheTeam/>
    </div>
  );
}
