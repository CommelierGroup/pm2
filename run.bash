#!/usr/bin/env bash

nest build pm2

nest build service

pm2-runtime start ecosystem.config.cjs
