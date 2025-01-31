#!/usr/bin/env bash
cd /root/developer-portfolio/
pm2 delete portfolio
#npm run build
pm2 start npm --name "portfolio" -- start
