const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 5000

const app = express()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))