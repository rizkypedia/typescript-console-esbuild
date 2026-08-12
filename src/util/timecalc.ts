/* eslint-disable @typescript-eslint/no-unused-vars */
export const addSeconds = (dt:Date, seconds: number) => {
    let timeonly = '00:00:00'
    dt.setSeconds(dt.getSeconds() + seconds)
    const [ddate, time] = dt.toISOString().split("T")
    if (time) {
        const [tm, rest] = time.split(".")
        timeonly = tm ?? '00:00:00'
    }
    
    return timeonly
}

export const transpileTime = (strTime: string):number => {
    const [hour, minute, seconds] = strTime.split(":")
    if (hour && minute && seconds) {
        const intHour = parseInt(hour)
        
        const intMinute = parseInt(minute)
        console.log(`minute ${intMinute}`)
        const intSeconds = parseInt(seconds)
        const completeSeconds = (60*60*intHour) + (60*intMinute) + intSeconds
        console.log(`completeSeconds ${completeSeconds}`)
        return completeSeconds
    }
    return 0
}

export const addTime = (base: string, increment: string): string => {
  const [bh, bm, bs] = base.split(":").map(Number)
  const [ih = 0, im = 0, is = 0] = increment.split(":").map(Number)
  if (!bh || !bm || !bs) {
     return '00:00:00'
  }
  const totalSeconds =
    bh * 3600 + bm * 60 + bs +
    ih * 3600 + im * 60 + is

  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  return [h, m, s].map(v => String(v).padStart(2, "0")).join(":")
}
