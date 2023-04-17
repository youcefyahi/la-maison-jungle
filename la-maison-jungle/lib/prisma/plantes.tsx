import prisma from '../../lib/prisma';
import { Plante } from '../../lib/prisma/type';

export const getPlantes = async (): Promise<{ plantes: Plante[] }> => {
  try {
    const plantes = await prisma.plante.findMany();

    return { plantes };
  } catch (error) {
    console.error(error);
    return { plantes: [] };
  }
};

export async function getOnePlante(id:string){
  try{
    const plante = await prisma.plante.findUnique({where: {id}})
    return {plante}
  }catch (error){
    return {error}
  }
  
}
