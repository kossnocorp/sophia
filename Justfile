dev:
	@node --watch ./build.mjs --watch

build:
	@pnpm exec vsce package
	
publish:
	@pnpm exec vsce publish