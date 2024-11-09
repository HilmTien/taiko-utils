import Footer from "@/components/general/footer/Footer";
import Navbar from "@/components/general/navbar/Navbar";
import ProfileAdjustmentIndex from "@/components/profile-adjustment/ProfileAdjustmentIndex";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <ProfileAdjustmentIndex />
      </main>
      <Footer />
    </>
  );
}
