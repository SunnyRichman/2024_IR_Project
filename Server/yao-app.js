const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();



const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'FgOhLz*X3cnOs4CU0BHH'
  },
  tls: {
    ca: fs.readFileSync('C:\Users\kornl\OneDrive\เดสก์ท็อป\elasticsearch-8.15.3\config\certs\http_ca.crt'),
    rejectUnauthorized: false
  }
})

app.listen(3100, function() {console.log("Server listening at Port " + 3100);});