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

  public lap(): string {
    return ""
  }

  public reset(): string {
    return ""
  }

  public advanceTime(duration: string): void {
    if (this._state !== StopWatchState.STOPPED) {
      this._currentLap = duration
      this._total = duration
    }
  }
}
