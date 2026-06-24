.PHONY: dev build deploy

dev:
	hugo serve -D

build:
	rm -rf public && hugo --minify

deploy: build
	wrangler deploy
