const express = require('express');
const bodyParser = require('body-parser');
const qr = require('qr-image');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate-qr', (req, res) => {
    const { url, type } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const qr_svg = qr.image(url, { type: type });
        const fileName = `QRbuddy.${type}`;
        const filePath = path.join(__dirname, 'public', fileName);
        const writeStream = fs.createWriteStream(filePath);
        
        qr_svg.pipe(writeStream);

        writeStream.on('finish', () => {
            res.json({ message: 'QR code generated successfully', fileName: fileName });
        });

        writeStream.on('error', (error) => {
            res.status(500).json({ error: 'Error writing file' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error generating QR code' });
    }
});

app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'public', fileName);
    res.download(filePath, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Error downloading file');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
