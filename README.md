# PatientDB
Web-based Data visualization and search tools for cancer patients. Currently implemented Kaplan Meier Curves for leukemia patient subsets.

## installation

PatientDB is built upon the [Meteor platform](http://www.meteor.com/). You can install it with:

  curl https://install.meteor.com/ | sh

Meteor provides [node.js](http://nodejs.org) (if you have it installed already you can use the one
provided on your system). To add it into your environment, add `~/.meteor/tools/latest/bin` to your
environment `PATH` variable. For example, by running:

  export PATH=~/.meteor/tools/latest/bin:$PATH

PatientDB requires additional Meteor packages which are provided through
[Meteorite](http://oortcloud.github.com/meteorite/), a Meteor package manager.
Install it as well:

  npm install -g meteorite
