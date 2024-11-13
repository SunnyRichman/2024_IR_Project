const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require('cors');
const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'FgOhLz*X3cnOs4CU0BHH'
  },
  tls: {
    ca: fs.readFileSync('C:\\Users\\kornl\\OneDrive\\เดสก์ท็อป\\elasticsearch-8.15.3\\config\\certs\\http_ca.crt'),
    rejectUnauthorized: false
  }
})

app.use(cors({ origin: 'http://localhost:3000' }))

const router = express.Router();
app.use(router);

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/callSearch", async (req, res) => {
  try {
    // Retrieve the query parameter from the request
    let info = req.query.info;
    
    // Perform the search asynchronously
    const result = await client.search({
      index: "herbs",
      query: {
        query_string: {
          query: info
        }
      }
    });
    
    // Send the search hits back as the response
    res.send(result.hits.hits);
    
  } catch (error) {
    // Handle any errors that occur during the search
    console.error("Search error:", error);
    res.status(500).send({ error: "An error occurred during search." });
  }
});

router.get("/callDetail", async (req, res) => {
  try {
    // Retrieve the query parameter from the request
    let id1 = req.query.id;
    console.log(id1)
    
    // Perform the search asynchronously
    const result = await client.search({
      index: "herbs",
      query: {
        match: {
          _id: id1
        }
      }
    });
    
    // Send the search hits back as the response
    res.send(result.hits.hits);
    
  } catch (error) {
    // Handle any errors that occur during the search
    console.error("Search error:", error);
    res.status(500).send({ error: "An error occurred during search." });
  }
});

app.listen(3100, function() {console.log("Server listening at Port " + 3100);});