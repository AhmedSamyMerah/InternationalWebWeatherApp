const request = require('request')


const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/0ef480635c8e9b659c8882e329eae64d/'+ latitude + ',' +longitude +'?units=si'
    
    request({url, json:true}, (error, {body} )=>{
        if (error){
            callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error){
            callback('Unable to find the location!')
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature + ' degrees out.' + 'There is a High of ' + body.daily.data[0].temperatureHigh + 'with a Low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + ' % chance of rain.')
        }
    })
}

module.exports = forecast