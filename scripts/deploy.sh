launch-chrome () {
	echo "Launching google chrome: https://artemis-285b4.firebaseapp.com/"
	google-chrome "https://artemis-285b4.firebaseapp.com/"
}

rm -r ./dist/
npm run build:prod &&
./node_modules/.bin/firebase deploy &&
launch-chrome
