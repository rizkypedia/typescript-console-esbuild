import { fformat } from "../../src/util/line-up"

describe("Test ordinarnumber", () => {
        
    test("Lineup ordinal numeral 4", () => {
    const result = fformat("Gianna", 4)
       expect(result).toBe("Gianna, you are the 4th customer we serve today. Thank you!")
    })

    test("Lineup ordinal numeral 11", () => {
        const result = fformat('Jacqueline', 11)
        expect(result).toBe("Jacqueline, you are the 11th customer we serve today. Thank you!")
    })

    test("Lineup ordinal number 113", () => {
        const result = fformat('Flower', 113)
        expect(result).toBe("Flower, you are the 113th customer we serve today. Thank you!")
    })

    test("Lineup ordinal number 732", () => {
        const result = fformat('Juelz', 732)
        expect(result).toBe("Juelz, you are the 732nd customer we serve today. Thank you!")
    })
})