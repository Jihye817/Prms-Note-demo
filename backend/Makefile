ARCH=amd64
IMG_TAG="..."

all:
	cat ./Makefile
test:
	npm test
node:
	npm ci
	npm run build
image: Dockerfile node
	docker build --platform=linux/${ARCH} --tag ${IMG_TAG} .