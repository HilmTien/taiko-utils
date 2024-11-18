import ODApp from "@/components/od/ODApp";
import { ODStateProvider } from "@/components/od/ODState";

export default function Page() {
  return (
    <>
      <main className="p-8">
        <ODStateProvider>
          <ODApp />
        </ODStateProvider>
      </main>
    </>
  );
}
