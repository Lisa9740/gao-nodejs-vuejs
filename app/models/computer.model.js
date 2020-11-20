module.exports = (sequelize, Sequelize) => {
    const Computer = sequelize.define("computer", {
       name: {
            type: Sequelize.STRING
        },
    });

    return Computer;
};
