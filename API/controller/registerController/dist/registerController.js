"use strict";
exports.__esModule = true;
exports.register = void 0;
exports.register = function (res, req) {
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username, password);
};
