/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, t * 1000)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, t * 1000)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, t * 1000)
    })
}

async function calculateTime(t1, t2, t3) {
    let startTime1 = Date.now()
    await wait1(t1).then(() => {
        let endTime1 = Date.now()
        return timeOne = endTime1 - startTime1
    })
    let startTime2 = Date.now()
    await wait2(t2).then(() => {
        let endTime2 = Date.now()
        return timeTwo = endTime2 - startTime2
    })
    let startTime3 = Date.now()
    await wait3(t3).then(() => {
        let endTime3 = Date.now()
        return timeThree = endTime3 - startTime3
    })
    return timeOne + timeTwo + timeThree
}

module.exports = calculateTime;
