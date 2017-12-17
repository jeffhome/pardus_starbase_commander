#!/bin/bash
#
# Example syntax:
#
# ./build.sh pardus_starbase_commander-1.0.0 chrome
# ./build.sh pardus_starbase_commander-1.0.0 firefox
# ./build.sh pardus_starbase_commander-1.0.0 all
#

# Set up some variables based on what was supplied to the script
FILE_NAME=$1
TARGET_BROWSER=$2

# Some simple error checking to ensure all parameters were supplied
if [ -v $2 ]; then
	echo "Error!"
	echo ""
	echo "You need to provide all parameters for this build script"
	echo ""
	echo "Use the following syntax:"
	echo "  ./build.sh filename [chrome|firefox|all]"
	echo ""
	echo "Example:"
	echo "  ./build.sh pardus_drugclock-1.0.0 chrome"
	echo "  ./build.sh pardus_drugclock-1.0.0 firefox"
	echo "  ./build.sh pardus_drugclock-1.0.0 all"
	exit
fi

# Move into our web FILE_NAME directory
cd web_extension

# Remove all the invisible files we don't need
find . -name .DS_Store -print -delete

# Build for firefox
if [ "$2" = "firefox" ]; then
	echo "Building for Firefox..."
	cp ../manifest_firefox.json manifest.json
	zip -r $FILE_NAME.xpi ./*
	mv $FILE_NAME.xpi ../
	echo "Done!"
fi

# Build for chrome
if [ "$2" = "chrome" ]; then
	echo "Building for Chrome..."
	cp ../manifest_chrome.json manifest.json
	zip -r $FILE_NAME.zip ./*
	mv $FILE_NAME.zip ../
	echo "Done!"
fi

# Build for all browsers
if [ "$2" = "all" ]; then
	echo "Building for all TARGET_BROWSERs..."
	cp ../manifest_firefox.json manifest.json
	zip -r $FILE_NAME.xpi ./*
	mv $FILE_NAME.xpi ../

	cp ../manifest_chrome.json manifest.json
	zip -r $FILE_NAME.zip ./*
	mv $FILE_NAME.zip ../
	echo "Done!"
fi

# Mmove back up again
cd ../
exit