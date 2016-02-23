# FC-Connect
> Mobile Vaccination Forecasting and Tracking


FC-Connect is a hybrid mobile app, it is written using modern web
technologies like HTML5, CSS, and Javascript.

## Toolchain

Our tool set pulls from the nodejs environment.

## Quick(ish) Start

* Install nodejs from nodejs.org. Windows users will download and run the installer while
Linux users will add the ppa and then use apt-get to install the package.
```
sudo apt-get install -y nodejs
```
* Download and install the Andoird SDK.
* Use npm to install the tools globally.
```
npm install -g bower gulp mocha ionic cordova
```
* Run the following commands in a shell to setup for the build.
```
npm install
bower install
gulp
ionic platform add android
ionic resources android
```
* Build the app!
```
ionic build android
```
