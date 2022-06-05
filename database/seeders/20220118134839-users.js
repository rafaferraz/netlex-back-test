"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Spiderman",
          email: "spiderman@test.com",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hulk",
          email: "hulk@test.com",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ironman",
          email: "ironman@test.com",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Doctor Strange",
          email: "doctor_strange@test.com",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Captain America",
          email: "captain_america@test.com",
          password: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
