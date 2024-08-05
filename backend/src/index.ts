import { Request, Response } from "express";
import { Browser, Page } from "puppeteer";

const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json)

app.get('/ogImage', async (req: Request, res: Response) => {

    const { title, content, image } = req.query;

    const browser: Browser = await puppeteer.launch();
    const page: Page = await browser.newPage();

    const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { width: 1200px; height: 630px; padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #f3f4f6; }
          .title { font-size: 48px; font-weight: bold; text-align: center; margin-bottom: 20px; }
          .content { font-size: 24px; text-align: center; }
          .image { margin-top: 20px; max-width: 100%; max-height: 300px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="title">${title}</div>
          <div class="content">${content}</div>
          ${image ? `<img class="image" src="${image}" />` : ''}
        </div>
      </body>
    </html>
  `;

  await page.setContent(html);
  const screenshotBuffer = await page.screenshot({type: "jpeg"});
  browser.close();

  res.setHeader('Content-Type', 'image/jpeg');
  res.send(screenshotBuffer)
})

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});