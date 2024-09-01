import Navbar from "@/components/general/navbar/Navbar";
import ODApp from "@/components/od/ODApp";
import { ODStateProvider } from "@/components/od/ODState";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <ODStateProvider>
          <ODApp />
        </ODStateProvider>
      </main>
    </>
  );
}
