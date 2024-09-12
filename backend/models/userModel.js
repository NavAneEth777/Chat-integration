const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: email,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        },

    },
    {
        timestamp: true,
    },
);

const User = mongoose.model("User", userModel);
module.exports = User;