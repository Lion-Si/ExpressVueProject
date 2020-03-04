module.exports = options => {
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../models/AdminUser");
  const assert = require("http-assert");

  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    assert(token, 401, "token不存在");
    const { id } = jwt.verify(token, req.app.get("SECRET"));
    assert(id, 401, "无效的token");
    req.user = await AdminUser.findById(id);
    assert(req.user, 401, "请先登录");
    await next();
  };
};
