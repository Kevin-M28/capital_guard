import { prisma } from "@/lib/prisma"

/**
 * Obtiene los permisos de un usuario por su ID
 * @param userId - ID del usuario
 * @returns Array de nombres de permisos
 */
export async function getUserPermissions(userId: string): Promise<string[]> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: {
          include: {
            rolePermissions: {
              include: {
                permission: true
              },
              where: { isActive: true }
            }
          }
        }
      }
    })

    if (!user?.role) return []

    return user.role.rolePermissions.map((rp: any) => rp.permission.name)
  } catch (error) {
    console.error('Error getting user permissions:', error)
    return []
  }
}

/**
 * Verifica si un usuario tiene un permiso específico
 * @param userId - ID del usuario
 * @param permission - Nombre del permiso a verificar
 * @returns true si tiene el permiso, false si no
 */
export async function hasPermission(userId: string, permission: string): Promise<boolean> {
  const permissions = await getUserPermissions(userId)
  return permissions.includes(permission)
}

/**
 * Verifica si un usuario tiene alguno de los permisos especificados
 * @param userId - ID del usuario
 * @param permissions - Array de nombres de permisos
 * @returns true si tiene al menos uno, false si no tiene ninguno
 */
export async function hasAnyPermission(userId: string, permissions: string[]): Promise<boolean> {
  const userPermissions = await getUserPermissions(userId)
  return permissions.some(permission => userPermissions.includes(permission))
}

/**
 * Verifica si un usuario tiene todos los permisos especificados
 * @param userId - ID del usuario
 * @param permissions - Array de nombres de permisos
 * @returns true si tiene todos, false si le falta alguno
 */
export async function hasAllPermissions(userId: string, permissions: string[]): Promise<boolean> {
  const userPermissions = await getUserPermissions(userId)
  return permissions.every(permission => userPermissions.includes(permission))
}
