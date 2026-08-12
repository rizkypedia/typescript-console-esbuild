enum StopWatchState {
  READY = "ready",
  STOPPED="stopped",
  RUNNNG = "running"
}
export class SplitSecondStopwatch {
   private _state: string
   private _currentLap: string
   private _total: string
   private _previousLaps: string[]

  constructor() {
    this._state = StopWatchState.READY
    this._currentLap="00:00:00"
    this._total="00:00:00"
    this._previousLaps = []
  }

  public get state(): string {
    return this._state
  }

  public get currentLap(): string {
    return this._currentLap
  }

  public get total(): string {
    return this._total
  }

  public get previousLaps(): string[] {
    return this._previousLaps
  }

  public start(): void {
    if (this._state === StopWatchState.RUNNNG) {
      throw new Error("cannot start an already running stopwatch")
    }
    this._state=StopWatchState.RUNNNG
  }

  public stop(): void {
    if (this._state === StopWatchState.READY || this._state === StopWatchState.STOPPED) {
      throw new Error("cannot stop a stopwatch that is not running") 
    }
    this._state = StopWatchState.STOPPED
  }

  public lap(): void {
    if (this._state === StopWatchState.READY || this._state === StopWatchState.STOPPED) {
      throw new Error('cannot lap a stopwatch that is not running')
    }
    this._previousLaps.push(this._currentLap)
    this._currentLap = "00:00:00"
  }

  public reset():void {
    if (this._state === StopWatchState.READY || this._state === StopWatchState.RUNNNG ) {
      throw new Error('cannot reset a stopwatch that is not stopped')
    }
    this._state = StopWatchState.READY
    this._currentLap = '00:00:00'
    this._previousLaps = []
  }

  public advanceTime(duration: string): void {
    if (this._state !== StopWatchState.STOPPED) {
     this._currentLap = this.combineTime(this._currentLap, duration)
     this._total = this.combineTime(this._total, duration)
    }
  }

  combineTime(start: string, end: string) {
    const [sHour, sMinute, sSeconds] = start.split(":")
    const [ehour, eMinute, eSeconds] = end.split(":")
    let timeonly = '00:00:00'
    if (sHour && sMinute && sSeconds) {
        const intHour = parseInt(sHour)
        const intMinute = parseInt(sMinute)
        const intSeconds = parseInt(sSeconds)
        const ct = new Date()
        ct.setUTCHours(intHour)
        ct.setUTCMinutes(intMinute)
        ct.setUTCSeconds(intSeconds)
        const eIntHour = parseInt(ehour ?? '0')
        const eIntMinute = parseInt(eMinute?? '0')
        const eIntSeconds = parseInt(eSeconds ?? '0')
        const completeSeconds = (60*60*eIntHour) + (60*eIntMinute) + eIntSeconds
        ct.setSeconds(ct.getSeconds() + completeSeconds)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [ddate, time] = ct.toISOString().split("T")
        if (time) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [tm, rest] = time.split(".")
            timeonly = tm ?? '00:00:00'
        }
    }
    return timeonly
  }
}
