dev-run: dev run

build-run: build run

dev:
	npm run dev

build:
	npm run build

type-check:
	tsc --noEmit

run:
	node dist/index.js

test:
	npm test