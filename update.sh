#!/usr/bin/env bash
pm2 delete portfolio
cd /root/developer-portfolio/
git pull
npm run build
pm2 start npm --name "portfolio" -- start
