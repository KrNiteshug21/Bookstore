import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    password: "leanBret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    password: "ervinHowell",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    password: "samBauch",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    password: "Karsack",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    password: "KamDiet",
  },
];

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password...",
        },
      },
      async authorize(credentials) {
        const user = users.find(
          (user) => credentials.username === user.username
        );

        if (
          credentials?.username === user.username &&
          credentials.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
