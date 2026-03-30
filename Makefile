dev-run: dev run

build-run: build run

dev:
	npm run dev

build:
	npm run build

type-check:
	tsc --noEmit

run:
	npm start

test:
	npm test