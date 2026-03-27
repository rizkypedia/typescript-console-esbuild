const ordinalNumber = (lastDigit: string) => {
    switch (lastDigit) {
        case "1":
            return `st`
        case "2":
            return `nd`
        case "3":
            return `rd`
        default:
            return `th`
    }
}


export const fformat = (name: string, number: number): string => {
    const bodyText = `${name}, you are the ##ORD## customer we serve today. Thank you!`
    let lastDigit = ""
    if (number > 999) {
        throw new Error('Only Max 999 is allowed')
    }
    if (number <= 10) {
        return bodyText.replace("##ORD##", `${number}${ordinalNumber(number.toString())}`)
    }

    if (number.toString().length == 2) {
        if (number > 10 && number <=20) {
            return bodyText.replace("##ORD##", `${number}th`)
        }
        lastDigit = number.toString().charAt(1)
        return bodyText.replace("##ORD##", `${number}${ordinalNumber(lastDigit)}`)
    }
    const strLen = number.toString().length
    const lastTwoPos = `${number.toString().charAt(strLen-2)}${number.toString().charAt(strLen-1)}`
    if(lastTwoPos === "11" || lastTwoPos === "12" || lastTwoPos === "13") {
        return bodyText.replace("##ORD##", `${number}th`)
    }
    lastDigit = number.toString().charAt(strLen-1)
    return bodyText.replace("##ORD##", `${number}${ordinalNumber(lastDigit)}`)
}