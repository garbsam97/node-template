const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("*", function(req, res){
    res.render('body');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Web server running on port 3000!");
})