"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json);
app.get('/ogImage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, image } = req.query;
    const browser = yield puppeteer.launch();
    const page = yield browser.newPage();
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
    yield page.setContent(html);
    const screenshotBuffer = yield page.screenshot({ type: "jpeg" });
    browser.close();
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(screenshotBuffer);
}));
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
