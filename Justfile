dev:
	@node --watch ./build.mjs --watch

build:
	@pnpm exec vsce package
	
publish: build
	@pnpm exec vsce publish