const algorithms = {

    indexOf(array, value) {
        let ticks = 0

        for (let i = 0; i < array.length; i++) {
            ticks++
            if (array[i] == value) {
                return {
                    index: i,
                    searches: ticks
                };
            }
        }
        return {
            index: 'Not Found',
            searches: ticks
        };
    },

    binarySearch(array, value, start, end, ticks) {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;
        var ticks = ticks === undefined ? 0 : ticks;
        if (start > end) {
            ticks++
            return {
                index: 'Not Found',
                searches: ticks
            };
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];

        console.log(start, end);
        if (item == value) {
            ticks++
            return {
                index: index,
                searches: ticks
            };
        }
        else if (item < value) {
            return this.binarySearch(array, value, index + 1, end, ticks + 1);
        }
        else if (item > value) {
            return this.binarySearch(array, value, start, index - 1, ticks + 1);
        }
    },
}

module.exports = algorithms