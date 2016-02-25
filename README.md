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
* Download and install the Android SDK.
  * Installing Android studio will ensure you have everything you need and provide a
    good tool for setting up AVD's if you choose to attempt to emulate android (not
    recommended due to poor performance, use a physical android device if possible)
* Use npm to install the tools globally.
```
npm install -g bower gulp mocha ionic cordova
```
* Run the following commands in a shell to setup for the build.
  * If running OSX you may run into trouble with the android commands due to
    environment variables, this should help: http://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x
```
npm install
bower install
gulp
ionic platform add android
ionic platform add ios
ionic resources android
ionic resources ios
```
* Build the app!
```
ionic build android
ionic build ios
```
* Emulate
```
ionic emulate android (ionic run android if using genymotion)
ionic emulate ios
```
