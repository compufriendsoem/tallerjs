yauris = {} ;

    yauris.each = (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            fn(array[i], i)
        }
    }

    yauris.filter = (array, fn) => {
        const newArray = []
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i], i, array)) {
                newArray.push(array[i])
            }
        }
        return newArray
    }

    yauris.map = (array, fn) => {
        const newArray = []
            for (let i = 0; i < array.length; i++) {
            newArray.push(fn(array[i]));
        }
        return newArray
    }

    yauris.find = (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i]), i) {
                return array[i]
            }
        }
    }


    yauris.findIdex = (array, index) => {
        let plus = []
        for (let i = 0; i < array.length; i++) {
            if(array[i] == index) {
                plus.push(i)
            }
        }
        return plus
    }

    yauris.contains = (array, value, fromIndex) => {
        for(fromIndex = 0; fromIndex < array.length; fromIndex++) {
            if(array[fromIndex] == value) {
                return true
            }
        }
        return false
    }

    yauris.pluck = (array, key) => {
        const newArray = []
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i][key])
        }
        return newArray
    }

    yauris.without = (array, elemnt1, element2) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] != elemnt1 && array[i] != element2) {
                result.push(array[i])
            }
        }
        return result
    }


yauris.each(arr, (element) => {
    console.log(element)
})

const filterArr = yauris.filter(arr, (element) => element > 6);
console.log(filterArr)

const mapArr = yauris.map(arr, (element) => element + 4)
console.log(mapArr)

const pluckArr = yauris.pluck(stooges, 'name');
console.log(pluckArr)

const findArr = yauris.find(arr, (element) => element)
console.log(findArr)

const findIdexArr = yauris.findIdex(arr, (element) => element === 70)
console.log(findIdexArr)

const containsArr = yauris.contains(arr, 45);
console.log(containsArr)

const withoutArr = yauris.without(arr, 1, 45)
console.log(withoutArr)