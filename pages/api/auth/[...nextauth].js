import NextAuth from "next-auth"
import AADB2CProvider from "next-auth/providers/azure-ad-b2c"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        AADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
            authorization: { params: { scope: "offline_access openid" } },
        })
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                console.log(account)
                token.idToken = account.id_token
            }
            return token
          },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider
            console.log(token)
            session.idToken = token.idToken
            return session;
        }
    }
}
export default NextAuth(authOptions)