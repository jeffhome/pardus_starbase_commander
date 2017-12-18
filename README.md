# Pardus Starbase Commander
A collection of tools for use by Starbase Commanders in Pardus (a MMORPG set in space).

## What is this?

This is a web extension that extends either Firefox or Chrome, adding some extra functionality for Starbase Commanders to assist them in successfully running their Starbase.

## What does it do?

The Pardus Starbase Commander web extension is a collection of tools that extend the various starbase management pages. It does not send any data anywhere, but uses the data available on your Starbase management screens.

It currently contains the following functionality:

 * Population Decline reporting on the Starbase Overview screen
 * Links added to Starbase Overview, Starbase and Main screen for all Starbase management pages
 * Equipment Pricing (the Set Equipment Prices and Set Ship Prices screens are enhanced to show actual cost and ease price management)

I will be adding the following functionality next:

 * Starbase Auditing Tool (allowing you to generate a report showing the value of resources, equipment, missiles and ships in your Starbase)

## Why have you made it?

After the release of Firefox v57 (Quantum) and the changes required for existing userscripts, I decided to bypass the likes of TamperMonkey and Greasemonkey by bundling my userscript functionality into a natice web extension.

## What am I supposed to do with it?

You can clone this repository and use the `build.sh` script to build the extension (for either Chrome, Firefox, or for both).

You might instead want to get the latest version from the following:

 * [Mozilla Addons - Pardus Starbase Commander](https://addons.mozilla.org/en-GB/firefox/addon/pardus-starbase-commander/) (Firefox)
 * [Chrome Store - Pardus Starbase Commander](https://chrome.google.com/webstore/detail/pardus-starbase-commander/ipddggkkdkdbkglpjenmpfieailhchhg/) (Chrome)

And unless you are playing [Pardus - a MMORPG set in space](http://www.pardus.at/) and are a Starbase Commander, then you will find this web extension of little use.

## License

Mozilla Public License, version 2.0 [details](http://www.mozilla.org/MPL/2.0/).
