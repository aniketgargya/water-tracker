module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-offline",
            options: {
                precachePages: ["/"],
            }
        }
    ]
};