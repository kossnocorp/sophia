dev:
	@node --watch ./build.mjs --watch

build:
	@npx vsce package
	
publish:
	@npx vsce publish