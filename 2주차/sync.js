/* setTimeout - Event Loop */

function greet() {
    console.log('Hi')
}

function timer() {
    return setTimeout(() => {
        console.log('End')
    }, 3000)
}

greet()
timer()
// 'Hi' 3초 뒤 'End'

function task1() {
    setTimeout(() => {
        console.log('1')
    }, 0)
}

function task2() {
    console.log('2')
}

function task3() {
    console.log('3')
}

task1()
task2()
task3()
// 2 - 3 - 1