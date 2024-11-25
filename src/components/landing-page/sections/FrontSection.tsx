import ProfileIcon from "@/components/ui/molecules/ProfileIcon";
import Image from "next/image";

import taiko from "public/landing-page/taiko.png";
import tien from "public/profile-pics/hiimtien.png";
import mrv from "public/profile-pics/mrv.png";
import tony from "public/profile-pics/tonyworep.png";

export default function FrontSection() {
  const profiles = [
    {
      src: tony,
      user: "TonyWorep",
      id: "16204122",
      className:
        "transform -rotate-6 hover:scale-110 hover:rotate-0 duration-100",
    },
    {
      src: tien,
      user: "Defectum",
      id: "8631719",
      className:
        "transform translate-y-5 hover:scale-150 hover:rotate-0 duration-100",
    },
    {
      src: mrv,
      user: "mrv",
      id: "12513942",
      className:
        "transform rotate-6 hover:scale-110 hover:rotate-0 duration-100",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center h-[550px] px-5">
      <Image src={taiko} alt="tako" className="w-96" />
      <h1 className="text-6xl font-extrabold text-center">Taiko Utils</h1>
      <p className="pt-5 text-lg text-center text-violet-200 opacity-50">
        We strive to deliver useful utilities for osu! players that specialize
        in Taiko.
      </p>
      <div className="flex gap-5 mt-24">
        {profiles.map((profile) => (
          <ProfileIcon {...profile} width={193} key={profile.id} />
        ))}
      </div>
    </section>
  );
}
