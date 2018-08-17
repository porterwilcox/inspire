

let time = new Date()
let hour
let greetings = {
    n5n6n7n8n9n10n11: "Good Morning,",
    n12n13n14n15: "Good Afternoon,",
    n16n17n18n19n20: "Good Evening,",
    n21n22n23n24n0n1n2n3n4: "Good Night,"
}

export default class GreetingService {
    constructor() {

    }
    getGreeting(callback) {
        hour = time.getHours()
        let hourStr = hour.toString()
        Object.keys(greetings).forEach(str => {
            let arr = str.replace(/n/g, ' ').split(' ')
            if (arr.includes(hourStr)) {
                callback(greetings[str])
            }
        })
    }
    saveName(name) {
        localStorage.setItem("name", name)
    }
}