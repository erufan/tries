import Tries from "./Tries";

const tries = new Tries();

tries.insert("sta");
tries.insert("sba");

tries.remove("sta");
console.log(tries);
