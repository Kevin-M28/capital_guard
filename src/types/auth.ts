import { DefaultSession } from "next-auth"


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

export interface Permission{
  id: string
  name: string
  description?: string
}