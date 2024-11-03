const express = require("express");
const path = require("path")
const app = express();
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/CSS',express.static(path.join(__dirname,'/CSS')));
app.use('/HTML',express.static(path.join(__dirname,'/HTML')));
// app.use('/Backend',express.static(path.join(__dirname,'../Backend')));

app.use(router);

    router.get('/',(req,res) => { 
        console.log("Request at: /homepage")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/homepage.html`))
    })

    // Every error detected on browser will be redirected to this page.
    router.use((req,res,next) => { 
        console.log("404: Invalid accesssed")        
        res.statusCode = 404; 
        res.sendFile(path.join(`${__dirname}/HTML/error.html`))
    })

/* Run Server */
app.listen(3000, function() {console.log("Server listening at Port " + 3000);});    