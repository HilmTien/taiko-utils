import Navbar from "@/components/general/navbar/Navbar";
import PPApp from "@/components/pp/PPApp";
import { PPStateProvider } from "@/components/pp/PPState";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-8 flex-1">
        <PPStateProvider>
          <PPApp />
        </PPStateProvider>
      </main>
    </>
  );
}
