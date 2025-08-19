#!/usr/bin/env bash

# This script is when the container is updated.

set -e

# Pull git submodules
git submodule update --recursive --init --remote

# Trust all mise configs
mise trust --yes --all
git submodule foreach --recursive "mise trust"

# Update mise
mise self-update -y

# Install stack
mise install

# Install dependencies
if [ -f ./pnpm-lock.yaml ]; then
  yes | pnpm install
else if [ -f ./yarn.lock ]; then
  yes | yarn install
else if [ -f ./package-lock.json ]; then
  yes | npm install
fi