import SingleArticle from "@/app/components/SingleArticle";
import { Articles } from '@/models/type';
import { NextPage,  } from 'next';
import article from "@/app/api/articles";



const PlantePage: NextPage<Articles> = ({id }) => {

  const selectedArticle = article.find(item => item.id === id);

  return (
    <div>

<p>test</p>
    </div>
  );
};




export default PlantePage