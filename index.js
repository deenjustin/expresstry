const express = require('express');
const { resolve } = require('path');

const app = express();
const port = process.env.PORT || 3010;

app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views','./views');


app.get('/', (req, res) => { 
  const sitedata=  
  res.render('index', {site:{
    name:'Mysite',
    dis:'New Dis'
  }});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
