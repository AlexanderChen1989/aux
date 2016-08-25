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
define('resources/attributes/number',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var NumberCustomAttribute = exports.NumberCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
    function NumberCustomAttribute(element) {
      _classCallCheck(this, NumberCustomAttribute);

      this.element = element;
    }

    NumberCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return NumberCustomAttribute;
  }()) || _class);
});
define('resources/value-converters/email',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EmailValueConverter = exports.EmailValueConverter = function () {
    function EmailValueConverter() {
      _classCallCheck(this, EmailValueConverter);
    }

    EmailValueConverter.prototype.toView = function toView(value) {};

    EmailValueConverter.prototype.fromView = function fromView(value) {};

    return EmailValueConverter;
  }();
});
define('login-form',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LoginForm = exports.LoginForm = function () {
    function LoginForm() {
      _classCallCheck(this, LoginForm);

      this.form = {};
      this.form.email = "";
      this.form.password = "";
    }

    LoginForm.prototype.submit = function submit() {
      console.log(this.form);
    };

    return LoginForm;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./login-form\"></require>\n  <h1 id=\"head\">${message}</h1>\n  <button click.trigger=\"subscribe()\">Sub</button>\n  <button click.trigger=\"subjectTest()\">S</button>\n  <login-form></login-form>\n</template>\n"; });
define('text!login-form.html', ['module'], function(module) { module.exports = "<template>\n  <form>\n    Email: <input type=\"text\" value.bind=\"form.email\">\n    <br>\n    Password: <input type=\"password\" value.bind=\"form.password\">\n    <br>\n    <button click.trigger=\"submit()\">Submit</button>\n  </form>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map