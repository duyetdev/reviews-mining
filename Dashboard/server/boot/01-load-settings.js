'use strict';

// to enable these logs set `DEBUG=boot:01-load-settings` or `DEBUG=boot:*`
var log = require('debug')('boot:01-load-settings');

module.exports = function(app) {

  var Setting = app.models.Setting;

  function loadDefaultSettings() {
    console.error('Creating default settings');

    var settings = [{
      type: 'string',
      key: 'appName',
      value: 'DCrawler'
    }, {
      type: 'select',
      key: 'appTheme',
      value: 'skin-black',
      options: [
        'skin-blue',
        'skin-black'
      ]
    }, {
      type: 'select',
      key: 'appLayout',
      value: 'fixed',
      options: [
        'skin-blue',
        'not-fixed'
      ]
    }, {
      type: 'string',
      key: 'formLayout',
      value: 'horizontal'
    }, {
      type: 'int',
      key: 'formLabelSize',
      value: 3
    }, {
      type: 'int',
      key: 'formInputSize',
      value: 9
    }, {
      type: 'boolean',
      key: 'com.module.users.enable_registration',
      value: true
    }, {
      type: 'array',
      key: 'labelList',
      value: ['none', 'pos', 'neg', 'neu']
    }];

    settings.forEach(function(setting) {
      console.log("Loading setting: ", setting.key);
      Setting.create(setting, function(err) {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  function loadExistingSettings() {
    console.error('Loading existing settings');

    Setting.find(function(data) {
      log(data);
    });
  }


  Setting.count(function(err, result) {
    if (err) {
      console.error(err);
    }

    Setting.destroyAll(function() {
      loadDefaultSettings();
    })

    if (result < 1) {
      loadDefaultSettings();
    } else {
      loadExistingSettings();
    }
  });


};
