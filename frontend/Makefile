ARCH=amd64
IMG_TAG="..."

all:
	cat ./Makefile
test:
	CI=true npm test
node:
	npm ci
	c8 -r html -o coverage --all npm test -- --watchAll=false
image: Dockerfile node
	docker build --platform=linux/${ARCH} --tag ${IMG_TAG} .