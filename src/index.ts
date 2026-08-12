import { arrayRange } from "./util/generatenumbers";

const a = arrayRange(-10, 10, 1)
console.log(`Range ${a}`)
const l = a.length / 2 
const r = Math.floor(l)
console.log(`Mid Length ${r}`)

console.log(`middlevalue ${a[r]}`)

console.log(a.slice(0, r+1))
console.log(a.slice(r))