const { Role, Permission } = require("../models/index");
const { isPermission } = require("../utils/permissions");
module.exports = {
  index: async (req, res) => {
    const roles = await Role.findAll({
      order: [["id", "desc"]],
    });
    res.render("roles/index", { roles, req });
  },
  add: (req, res) => {
    res.render("roles/add", { req });
  },
  handleAdd: async (req, res) => {
    let { name, permissions } = req.body;
    if (!permissions) {
      permissions = [];
    }
    permissions = Array.isArray(permissions) ? permissions : [permissions];

    //1. Thêm table roles --> Kiểm tra trùng lặp
    const role = await Role.create({
      name,
    });
    //2. Thêm table permissions --> Nếu tồn tại permissions lấy permission cũ, ngược lại thêm mới

    if (permissions.length && role) {
      //Mong muốn: Trả về 1 mảng chứa các instance của từng permission (Nếu tồn tại permissions lấy permission cũ, ngược lại thêm mới và trả instance vừa thêm)
      const permissionInstance = await Promise.all(
        permissions.map(async (permission) => {
          const [permissionInstance] = await Permission.findOrCreate({
            where: { value: permission.trim() },
            defaults: { value: permission.trim() },
          });
          return permissionInstance;
        }),
      );

      //3. Thêm table roles_permissions
      await role.addPermissions(permissionInstance);
    }

    return res.redirect("/roles");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const role = await Role.findOne({
        where: { id },
        include: {
          model: Permission,
          as: "permissions",
        },
      });
      if (!role) {
        throw new Error("Role không tồn tại");
      }

      res.render("roles/edit", { role, isPermission, req });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    let { name, permissions } = req.body;
    if (!permissions) {
      permissions = [];
    }
    permissions = Array.isArray(permissions) ? permissions : [permissions];

    //Update table roles
    await Role.update(
      {
        name,
      },
      {
        where: { id },
      },
    );

    //1. Lấy role từ id
    const role = await Role.findByPk(id);
    //2. Thêm table permissions --> Nếu tồn tại permissions lấy permission cũ, ngược lại thêm mới
    if (permissions.length && role) {
      //Mong muốn: Trả về 1 mảng chứa các instance của từng permission (Nếu tồn tại permissions lấy permission cũ, ngược lại thêm mới và trả instance vừa thêm)
      const permissionInstance = await Promise.all(
        permissions.map(async (permission) => {
          const [permissionInstance] = await Permission.findOrCreate({
            where: { value: permission.trim() },
            defaults: { value: permission.trim() },
          });
          return permissionInstance;
        }),
      );

      //3. Update table roles_permissions
      await role.setPermissions(permissionInstance);
    }

    return res.redirect("/roles/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const role = await Role.findOne({
      where: { id },
      include: {
        model: Permission,
        as: "permissions",
      },
    });
    if (role) {
      await role.removePermissions(role.permissions); //Xóa dữ liệu bảng trung gian
      await role.destroy();
      // Role.destroy({where: {id}});
    }

    return res.redirect("/roles");
  },
};
