interface Prism {
    id: number
    x: number
    y: number
    angle: number
}

interface Beam {
    x: number
    y: number
    angle: number
}


const normalizeAngle = (angle: number) => {
    angle %= 360
    return angle < 0 ? angle + 360 : angle
}


const findNextPrism = (
    beam: Beam,
    prisms: Prism[]
): Prism | null => {
const radians = normalizeAngle(beam.angle) * Math.PI / 180

    const dirX = Math.cos(radians)
    const dirY = Math.sin(radians)

    const EPS = 1e-2

    let closest: Prism | null = null
    let closestDistance = Infinity

    for (const prism of prisms) {

        const dx = prism.x - beam.x
        const dy = prism.y - beam.y

        // Is the prism on the beam's line?
        const cross = dx * dirY - dy * dirX
        if (Math.abs(cross) > EPS) {
            continue
        }

        // Is it in front of the beam?
        const dot = dx * dirX + dy * dirY
        if (dot <= EPS) {
            continue
        }

        if (dot < closestDistance) {
            closestDistance = dot
            closest = prism
        }
    }

    return closest
}

export const findSequence = (
    start: Beam,
    prisms: Prism[]
): number[] => {
    const sequence: number[] = []

    

    let beam = { ...start }

    while (true) {
        const prism = findNextPrism(beam, prisms)
 
        if (!prism) {
            break
        }

        sequence.push(prism.id)

        beam = {
            x: prism.x,
            y: prism.y,
            angle: beam.angle + prism.angle
        }
    }

return sequence
}
