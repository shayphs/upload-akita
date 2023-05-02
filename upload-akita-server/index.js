const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//start app 
const port = process.env.PORT || 3000;

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);

app.post('/upload-akita-file', async (req, res) => {
    try {
        if(!req.body) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            require("fs").writeFile('./uploads/' + req.body.fileName, req.body.file.content, 'base64', function(err) {
                res.send({
                    status: false,
                    message: err.toString()
                });
            });
            
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: req.body.fileName,
                    mimetype: req.body.file.fileData.type,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
