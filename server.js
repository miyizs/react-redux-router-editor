var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, historyApiFallback: true }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/item",function (req,res) {
    var initialItemData = {
        items:[
            {inputType:"text",key:"i1",id:"item1"},
            {inputType:"date",key:"i2",id:"item2"},
            {inputType:"date",key:"i3",id:"item3"}
        ]
    }
    res.send(initialItemData);
});

app.post("/submitData", function(req, res) {
    
})

app.post("/", function(req, res) {
    res.render(game, {
        title : "begin"
    });
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
