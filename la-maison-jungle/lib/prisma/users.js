import prisma from ".";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        console.log(users)
        return { users }
    } catch (error) {
        return { error }
    }
}