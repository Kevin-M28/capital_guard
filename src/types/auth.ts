import { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

type Permission = {
  id: string
  name: string
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
      permissions: string[]
      status: string
      firstName?: string
      lastName?: string
    } & DefaultSession["user"]
  }

  interface User {
    role: string
    permissions: string[]
    status: string
    firstName?: string
    lastName?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    permissions: string[]
    status: string
    firstName?: string
    lastName?: string
    permissionsUpdatedAt?: string
  }
}