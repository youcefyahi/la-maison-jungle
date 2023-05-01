import SingleArticle from "@/app/components/SingleArticle"

const Plante = ({ plante }) => {
    return (
        <section>
            <p>ici plante</p>
            <p>    {plante.name}</p>
            <p>  {plante.description}</p>
            <p>
                {plante.price}</p>
            <p>   {plante.image}</p>
            <p>  {plante.livraison}</p>
            <p>      {plante.diametre}</p>
            <p>{plante.hauteur}</p>

            <SingleArticle plante={plante} />




        </section>
    )
}
export default Plante