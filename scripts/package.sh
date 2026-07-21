#!/usr/bin/env bash

# This script builds and packages the VS Code extension.

source "$(dirname "$0")/_package_env.sh"

echo -e "🚧️ Packaging VS Code extension\n"

cd "$root_dir"

echo "🌀 Building VS Code extension source code..."

if ! output=$(mise build 2>&1); then

	echo "🔴 Failed to build"
	echo "--- Output ------------------------------------------"
	echo "$output"
	echo "-----------------------------------------------------"
	exit 1
fi
echo "🟢 Built"

echo
echo "🌀 Packaging vsix..."

mkdir -p "$(dirname "$package_path")"

if ! output=$(pnpm vsce pack \
	--no-dependencies \
	--out "$package_path" \
	2>&1); then

	echo "🔴 Failed to package"
	echo "--- Output ------------------------------------------"
	echo "$output"
	echo "-----------------------------------------------------"
	exit 1
fi
echo "🟢 Packaged: $package_path"

echo -e "\n💚 Extension package is ready!"
