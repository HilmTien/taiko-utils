import au from "public/mod-badges/au.png";
import cl from "public/mod-badges/cl.png";
import cn from "public/mod-badges/cn.png";
import dt from "public/mod-badges/dt.png";
import ez from "public/mod-badges/ez.png";
import fl from "public/mod-badges/fl.png";
import hd from "public/mod-badges/hd.png";
import hr from "public/mod-badges/hr.png";
import ht from "public/mod-badges/ht.png";
import nc from "public/mod-badges/nc.png";
import nf from "public/mod-badges/nf.png";
import nm from "public/mod-badges/nm.png";
import pf from "public/mod-badges/pf.png";
import rx from "public/mod-badges/rx.png";
import sd from "public/mod-badges/sd.png";
import v2 from "public/mod-badges/v2.png";

export type ODAdjustingMod = "ez" | "ht" | "hr" | "dt" | "nc";
export type PPAdjustingMod = "ez" | "hr" | "dt" | "nc" | "ht" | "hd" | "fl";
export type GameplayMod = "nf" | "sd" | "pf";
export type SpecialMod = "nm" | "v2" | "cl" | "rx" | "au" | "cn";
export type Mod = ODAdjustingMod | PPAdjustingMod | GameplayMod | SpecialMod;

export const modNames = {
  nm: "No Mod",
  hd: "Hidden",
  hr: "Hard Rock",
  dt: "Double Time",
  nc: "Nightcore",
  fl: "Flashlight",
  sd: "Sudden Death",
  pf: "Perfect",
  ez: "Easy",
  nf: "No Fail",
  ht: "Half Time",
  rx: "Relax",
  au: "Auto",
  cn: "Cinema",
  v2: "Score V2",
  cl: "Classic",
};

const icons = {
  dt,
  ez,
  hr,
  ht,
  hd,
  fl,
  nc,
  nf,
  v2,
  au,
  cn,
  rx,
  sd,
  pf,
  nm,
  cl,
}

export default icons;
