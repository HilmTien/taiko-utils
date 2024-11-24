import FrontSection from "./sections/FrontSection";
import ODSection from "./sections/ODSection";
import PPSection from "./sections/PPSection";
import ProfileAdjustmentSection from "./sections/ProfileAdjustmentSection";

export default function LandingPageApp() {
  return (
    <main className="mt-10">
      <FrontSection />
      <ODSection />
      <ProfileAdjustmentSection />
      <PPSection />
    </main>
  );
}
