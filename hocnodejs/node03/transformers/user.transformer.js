const Transformer = require("../core/transformer");
class UserTranformer extends Transformer {
  response(instance) {
    return {
      UID: instance.id,
      fullName: instance.fullname,
      email: instance.email,
      status: instance.status,
      statusText: instance.status ? "Kích hoạt" : "Chưa kích hoạt",
      createdAt: instance.created_at,
      updatedAt: instance.updated_at,
    };
  }
}

module.exports = UserTranformer;
