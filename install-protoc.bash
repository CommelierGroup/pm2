#!/usr/bin/env bash

arch=$(uname -m)

if [[ $arch == x86_64 ]]; then
  curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v25.2/protoc-25.2-linux-x86_64.zip
  unzip protoc-25.2-linux-x86_64.zip -d /usr
elif [[ $arch == aarch64 ]]; then
  curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v25.2/protoc-25.2-linux-aarch_64.zip
  unzip protoc-25.2-linux-aarch_64.zip -d /usr
else
  echo "아키텍처를 확인 후 조치 바랍니다. $arch"
  exit 1;
fi

echo "Installation completed 👍"
