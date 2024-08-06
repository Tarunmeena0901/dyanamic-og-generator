import { Request, Response } from "express";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/generate', (req: Request, res: Response) => {
  const { title, description, imageUrl } = req.body;
  const params = new URLSearchParams;
  params.append("title", title);
  params.append("description", description);
  params.append("imageUrl", imageUrl);

  const generatedUrl = `http://ec2-16-170-203-252.eu-north-1.compute.amazonaws.com/api/og-image?${params.toString()}`;

  res.json({ generatedUrl });
});

app.get('/og-image', (req: Request, res: Response) => {
  const { title, description, imageUrl } = req.query;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:type" content="website">
      <meta property="og:image" content="${imageUrl}">
      <title>${title}</title>
      <style>
        .container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: white;
          color: black;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
        }
        .header img {
          height: 40px;
        }
        .header span {
          font-weight: 600;
          font-size: 24px;
        }
        .image-container {
          width: 100%;
          height: auto;
          padding-top: 10px;
        }
        .image-container img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .description {
          padding: 10px 0;
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span>${title}</span>
        </div>
        <div class="description">${description}</div>
        <div class="image-container">
          <img src="${imageUrl}" >
        </div>
      </div>
    </body>
  </html>
  `;
  
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running`);
});