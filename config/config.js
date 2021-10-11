const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL:'mongodb+srv://mraykova:maria123@cluster0.qlvbe.mongodb.net/eshop?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token',
        STRIPE_PUBLISHABLE: "pk_test_51JdAdCF4Yqr45yd9fJBb7uulrO4Q53z6yUmxWbmKZwij2gbxlIzXZpZCdHzp6wD2jOyzfiO67n5BEKDbKCYwcF3Z00LU9IjWkv",
        STRIPE_SECRET_KEY: "sk_test_51JdAdCF4Yqr45yd9i965sqbZiaWiLtmwsWbtBYsk8JRWiCT99nQHZ6qQYawgOFIazchREfbGo4iVvOZt91dAyK4M00tz0gsAF0",
    },
    //mongodb+srv://mraykova:maria123@cluster0.n9z04.mongodb.net/eshop?retryWrites=true&w=majority
    production: {
        port: process.env.PORT || 9999,
        dbURL:'mongodb+srv://mraykova:maria123@cluster0.qlvbe.mongodb.net/eshop?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token',
        STRIPE_PUBLISHABLE: "pk_test_51JdAdCF4Yqr45yd9fJBb7uulrO4Q53z6yUmxWbmKZwij2gbxlIzXZpZCdHzp6wD2jOyzfiO67n5BEKDbKCYwcF3Z00LU9IjWkv",
        STRIPE_SECRET_KEY: "sk_test_51JdAdCF4Yqr45yd9i965sqbZiaWiLtmwsWbtBYsk8JRWiCT99nQHZ6qQYawgOFIazchREfbGo4iVvOZt91dAyK4M00tz0gsAF0",
    }
};

module.exports = config[env];