dev:
	@node --watch ./build.mjs

build:
	@npx vsce package
	
publish:
	@npx vsce publish