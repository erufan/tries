import Tries from "./Tries";

const tries = new Tries();

tries.insert("car");
tries.insert("care");
tries.insert("careful");

tries.insert("egg");

console.log(tries.findWord(""));
