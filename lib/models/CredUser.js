const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);
import bcrypt from "bcrypt";
class CredUser extends Model {}

CredUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 100],
          msg: "name must be within 8 to 100 chars long",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "must be an email",
        },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["user", "admin", "mod"]],
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 100],
          msg: "password must be within 8 to 100",
        },
      },
    },
  },
  {
    sequelize,
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },

    modelName: "CredUser",
  }
);
CredUser.prototype.validPassword = async function (password) {
  const isMatched = await bcrypt.compareSync(password, this.password);
  return isMatched;
};
module.exports = CredUser;
