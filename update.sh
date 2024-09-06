#!/usr/bin/env bash

pm2 delete portfolio
npm run build
pm2 start npm --name "portfolio" -- start