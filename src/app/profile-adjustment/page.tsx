import Navbar from "@/components/general/navbar/Navbar";
import ProfileAdjustmentIndex from "@/components/profile-adjustment/ProfileAdjustmentIndex";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-8 flex-1">
        <ProfileAdjustmentIndex />
      </main>
    </>
  );
}
