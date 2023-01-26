const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const person = {
    'jordan': {
        'age': 34,
        'occupation': 'Baller',
        'status': 'parenting'
    },
    'tymon': {
        'age': 34,
        'occupation': 'Finance',
        'status': 'Soon to be parent'
    },
    'ben r': {
        'age': 35,
        'occupation': 'Solar',
        'status': 'Engaged'
    },
    'unknown': {
        'age': 0,
        'occupation': 'unknown',
        'status': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:personName', (req, res) => {
    const reqPerson = req.params.personName
    if(person[reqPerson]) {
        res.json(person[reqPerson])
    } else {
        res.json(person['unknown'])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})