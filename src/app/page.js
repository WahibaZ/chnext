
import Image from 'next/image';
import style from "./page.module.css";
export default function Home(/* { portfolioData } */) {
  return (
    <div className={style.container}>
      <h1>Welcome to My Portfolio</h1>
      <Image
        src="/images/image.jpeg" // Chemin relatif à partir du dossier public
        alt="Description de l'image"
        width={1000} // Largeur de l'image
        height={400} // Hauteur de l'image
      />
     
    </div>
  );
}
