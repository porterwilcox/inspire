export default class Weather {
    constructor(data){
        this.temp = data.temp
        this.maxTemp = data.temp_max
        this.minTemp = data.temp_min
        this.humidity = data.humidity
    }
}