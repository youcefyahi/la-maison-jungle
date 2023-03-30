import SingleArticle from "@/app/components/SingleArticle";
import { Articles } from '@/models/type';
import { NextPage, GetServerSideProps } from 'next';
import article from "@/app/api/articles";


const PlantePage: NextPage<Articles> = ({id }) => {

  const selectedArticle = article.find(item => item.id === id);

  return (
    <div>
      <SingleArticle name={selectedArticle?.name} description={selectedArticle?.description} price={selectedArticle?.price} image={selectedArticle?.image}/>

    </div>
  );
};




export default PlantePage