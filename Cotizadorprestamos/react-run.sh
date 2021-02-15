#!/bin/bash

react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android

echo "Todo bien! Hasta luego"

exit

