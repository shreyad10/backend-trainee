let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getCityTemp = async function (req, res) {
    let store = []
    try {

        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < city.length; i++) {
            q = city[i]
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=8483e59d8860872343402229a619f6f7`
            }
            let result = await axios(options)

            store.push({ city: city[i], temp: result.data.main.temp, })
        }
        res.status(200).send({ data: store.sort((a, b) => a.temp - b.temp) })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let memeHandler = async function (req, res) {
    try {

        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=129242436&text0=Hi&text1=Awesome&username=chewie12345&password=meme@123`,
           
        }

        let result = await axios(options)
       
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather
module.exports.getCityTemp = getCityTemp
module.exports.memeHandler = memeHandler



