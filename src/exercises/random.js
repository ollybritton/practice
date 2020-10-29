export function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomScale(scales) {
    let scale = randomItem(scales)

    for (var key in scale) {
        if (Array.isArray(scale[key])) {
            scale[key] = randomItem(scale[key])
        }
    }

    return scale
}