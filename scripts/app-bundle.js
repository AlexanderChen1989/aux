define('app',['exports', 'rxjs', 'aurelia-framework'], function (exports, _rxjs, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
    function App(element) {
      _classCallCheck(this, App);

      this.element = element;
      this.message = 'Hello World!';
      this.observable = _rxjs.Observable.create(function (observer) {
        observer.next('Simon');
        observer.next('Jen');
        observer.next('Sergi');
        observer.complete();
      });

      this.subject = new _rxjs.Subject();
      this.subject.subscribe(function (next) {
        return console.log("Subject: ", next);
      }, function (error) {
        return console.log("Error: ", error);
      }, function () {
        return console.log("Done!");
      });
    }

    App.prototype.subjectTest = function subjectTest() {
      this.subject.next("Hello");
      this.subject.next("world");
      this.subject.complete();
    };

    App.prototype.subscribe = function subscribe() {
      this.observable.subscribe(function (next) {
        return console.log("Next:", next);
      }, function (error) {
        return console.log("Error:", error);
      }, function () {
        return console.log("Done!");
      });
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1 id=\"head\">${message}</h1>\n  <button click.trigger=\"subscribe()\">Sub</button>\n  <button click.trigger=\"subjectTest()\">S</button>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map