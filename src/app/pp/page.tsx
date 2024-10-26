import PPApp from "@/components/pp/PPApp";
import { PPStateProvider } from "@/components/pp/PPState";

export default function Page() {
  return (
    <main className="p-8">
      <PPStateProvider>
        <PPApp />
      </PPStateProvider>
    </main>
  );
}
