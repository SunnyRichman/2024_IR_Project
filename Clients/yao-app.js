const express = require("express");
const path = require("path")
const app = express();
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/CSS',express.static(path.join(__dirname,'/CSS')));
app.use('/HTML',express.static(path.join(__dirname,'/HTML')));
app.use('/Server',express.static(path.join(__dirname,'../Server')));

app.use(router);

    router.get('/',(req,res) => { 
        console.log("Request at: /homepage")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/homepage.html`))
    })

    router.get('/results',(req,res) => { 
        console.log("Request at: /results")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/results.html`))
    })

    router.get('/detail',(req,res) => { 
        console.log("Request at: /detail")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/detail.html`))
    })

    // Every error detected on browser will be redirected to this page.
    router.use((req,res,next) => { 
        console.log("404: Invalid accesssed")        
        res.statusCode = 404; 
        res.sendFile(path.join(`${__dirname}/HTML/error.html`))
    })

/* Run Server */
app.listen(3000, function() {console.log("Server listening at Port " + 3000);});    