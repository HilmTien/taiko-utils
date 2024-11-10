import { Button } from "@/components/ui/atoms/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import odGraph from "public/landing-page/od-graph.png";

export default function ODSection() {
  return (
    <section className="flex flex-col gap-2 bg-secondary pt-40 h-[500px] px-5">
      <div className="mx-auto">
        <h1 className="text-4xl font-extrabold pb-3">OD after mod change?</h1>
        <p className="max-w-[700px] text-violet-200 mb-5">
          The OD application gives you the ability to find the correct
          &quot;Overall Difficulty&quot; after putting on mods. This is
          especially helpful for mods like Double Time or Half Time, where the
          actual OD is not shown. The application also includes a table and a
          graph to give you a visualization as well.
        </p>
        <div className="flex gap-64">
          <Link href={"/od"} className="h-12 w-32">
            <Button variant={"outline"} size={"default"} className="h-12 w-32">
              Try OD App
              <ChevronRight />
            </Button>
          </Link>
          <Image
            src={odGraph}
            alt="od graph"
            className="rounded-lg w-[600px] border shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
