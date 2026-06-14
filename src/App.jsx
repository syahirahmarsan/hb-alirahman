import HeroSection from "./birthdayApp/sections/HeroSection";
import QuizSection from "./birthdayApp/sections/QuizSection";
import TimelineSection from "./birthdayApp/sections/TimelineSection";
import WishesSection from "./birthdayApp/sections/WishesSection";
import { globalStyles } from "./birthdayApp/globalStyles";

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <HeroSection />
      <WishesSection />
      <TimelineSection />
      <QuizSection />
    </>
  );
}
