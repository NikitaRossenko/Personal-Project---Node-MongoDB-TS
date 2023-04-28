"use strict";
exports.__esModule = true;
exports.login = void 0;
exports.login = function (res, req) {
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username, password);
};
