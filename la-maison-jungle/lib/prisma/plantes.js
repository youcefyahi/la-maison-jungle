import prisma from ".";



export async function getPlantes() {
    try {
        const plantes = await prisma.plante.findMany()
        return { plantes }
    } catch (error) {
        return { error }
    }
}
