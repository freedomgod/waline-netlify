process.env.DETA_RUNTIME = 'true';

const http = require('http');
const Waline = require('@waline/vercel');
const serverless = require('serverless-http');

const app = Waline({
  emoji: [
    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/alus',
  ],
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

module.exports.handler = serverless(http.createServer(app));
