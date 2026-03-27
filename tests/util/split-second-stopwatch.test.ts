import { SplitSecondStopwatch } from "../../src/util/split-second-stopwatch"

describe("test stop watch", () => {
    it("should initially set the state to ready", () => {
        const stopwatch = new SplitSecondStopwatch()
        expect(stopwatch.state).toBe("ready")
    })

    it("should initialy set the current lap to 00:00:00", () => {
        const stopwatch = new SplitSecondStopwatch()
        expect(stopwatch.currentLap).toBe("00:00:00")
    })

    it("should have no elapsed time", () => {
        const stopwatch = new SplitSecondStopwatch()
        expect(stopwatch.total).toBe('00:00:00')
    })

    it("should not have previous laps", () => {
        const stopwatch = new SplitSecondStopwatch()
        expect(stopwatch.previousLaps).toEqual([])
    })

    it("start from ready state changes state to running", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        expect(stopwatch.state).toBe("running")
    })

    it("start initiates time tracking for current lap", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.advanceTime('00:00:05')
        expect(stopwatch.currentLap).toBe('00:00:05')
    })
    it("start initiates time tracking for total", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.advanceTime('00:00:23')
        expect(stopwatch.total).toBe('00:00:23')
    })

    it("start cannot be called from running state", ()=> {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        expect(() => stopwatch.start()).toThrow(
        'cannot start an already running stopwatch'
        )
    })

    it("stop from running state changes state to stopped", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.stop()
        expect(stopwatch.state).toBe('stopped')
    })

    it("stop pauses time tracking for current lap", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.advanceTime('00:00:05')
        stopwatch.stop()
        stopwatch.advanceTime('00:00:08')
        expect(stopwatch.currentLap).toBe('00:00:05')
    })

    it("stop pauses time tracking for total", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.advanceTime('00:00:13')
        stopwatch.stop()
        stopwatch.advanceTime('00:00:44')
        expect(stopwatch.total).toBe('00:00:13')
    })

    it("stop cannot be called from ready state", () => {
        const stopwatch = new SplitSecondStopwatch()
        expect(() => stopwatch.stop()).toThrow(
            'cannot stop a stopwatch that is not running'
        )
    })

    it("stop cannot be called from stopped state", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.stop()
        expect(() => stopwatch.stop()).toThrow(
            'cannot stop a stopwatch that is not running'
        )
    })

    it("start from stopped state changes state to running", () => {
        const stopwatch = new SplitSecondStopwatch()
        stopwatch.start()
        stopwatch.stop()
        stopwatch.start()
        expect(stopwatch.state).toBe('running')
    })
})