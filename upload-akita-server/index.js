const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//add other middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//start app 
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);

app.post('/upload-akita-file', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(500).send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            require("fs").writeFile('./my-files/' + req.body.fileName, req.body.file.content, 'base64', function (err) {
                if (err) {
                    return res.status(500).send({
                        status: false,
                        message: err
                    });
                } else {
                    return res.status(201).send({
                        status: true,
                        message: 'File is uploaded',
                        data: {
                            name: req.body.fileName,
                            mimetype: req.body.file.fileData.type
                        }
                    });
                }

            });
        }
    } catch (err) {
        return res.status(500).send(err);
    }
});
