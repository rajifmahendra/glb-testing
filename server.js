const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());

app.get('/glb/:fileName', (req, res) => {
    const { fileName } = req.params;
    const filePath = path.join(__dirname, fileName);
    console.log(filePath)
    res.setHeader('Content-Type', 'model/gltf-binary');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
