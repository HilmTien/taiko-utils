import dt from "../../public/mod-badges/dt.png";
import ez from "../../public/mod-badges/ez.png";
import fl from "../../public/mod-badges/fl.png";
import hd from "../../public/mod-badges/hd.png";
import hr from "../../public/mod-badges/hr.png";
import ht from "../../public/mod-badges/ht.png";

export type ODAdjustingMod = "ez" | "ht" | "hr" | "dt";
export type GameplayMod = "ez" | "hr" | "dt" | "ht" | "hd" | "fl";
export type Mod = "ez" | "hr" | "dt" | "ht" | "hd" | "fl"; // nf, v2

export const modNames = {
    nm: "No Mod",
    hd: "Hidden",
    hr: "Hard Rock",
    dt: "Double Time",
    ht: "Half Time",
    ez: "Easy",
    fl: "Flashlight"
}

export default { dt, ez, hr, ht, hd, fl };
