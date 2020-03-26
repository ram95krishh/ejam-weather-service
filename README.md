# ejam-weather-service

### Overview
A NodeJs service with APIs that takes Zipcode(s) as input and returns weather info as response!
Hosted at https://ejam-weather-service.herokuapp.com/
## Api Info
Health-check:
```
    GET - https://ejam-weather-service.herokuapp.com/health

    RESP: 200 - OK
```

Weather api:
```
    POST - https://ejam-weather-service.herokuapp.com/weather/getbyzipcodes
    BODY:  {
        zipCodes: ["36101"]
    }
    RESP: {
        "36101": {
            "temp": 58.32
            "feelsLike": 50.92
            "max": 60.01
            "min": 55.99
            "humidity": 44
            "sunset": 1585273456
            "sunrise": 1585228982
            "description": "broken clouds"
            "icon": "http://openweathermap.org/img/wn/04d@2x.png"
        }
    }
```
## Installation

Clone the repositiory into a folder and get into the folder

```
        $ git clone https://github.com/ram95krishh/ejam-weather-service.git
        $ cd ejam-weather-service
```

Now make sure node is installed, then run the following command

```
        $ npm i
```

Create .env files for environmental variables
```
        touch .env
```

Write env values into .env file...
Finally, run the service with the following command...
```
    npm start
```

The Service will now be up and available at http://localhost:7600

## Some key Libraries used in this project
- ExpressJs
- RamdaJS