define('app',['exports', 'rxjs'], function (exports, _rxjs) {
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

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
      this.observable = _rxjs.Observable.create(function (observer) {
        observer.next('Simon');
        observer.next('Jen');
        observer.next('Sergi');
        observer.complete();
      });

      this.allMoves = _rxjs.Observable.fromEvent(document, 'mousemove');
      this.allMoves.subscribe(function (e) {
        console.log(e.clientX, e.clientY);
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
  }();
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n  <button click.trigger=\"subscribe()\">Sub</button>\n  <button click.trigger=\"subjectTest()\">S</button>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map