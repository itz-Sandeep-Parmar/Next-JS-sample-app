import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';



export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '9d7bda07cd04f030e01e',
            clientSecret:'084b05df59e43adb51fa720d32e6616e77df38fe'
        })
    ]
} 

export default NextAuth(authOptions);