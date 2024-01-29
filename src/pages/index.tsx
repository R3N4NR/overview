import Header from "@/components/header/Header";
import Head from "next/head";
import styles from '../../styles/home.module.scss'
import { SectionAboutMe } from "@/components/sections/aboutme/SectionAboutMe";
import { SectionQualifications } from "@/components/sections/qualifications/SectionQualifications";
import { SectionProjects } from "@/components/sections/projects/Projects";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
   <>
   <Head><title>Renan Ramalho</title></Head>

   <Header/>
   <div className={styles.bodyContainer}>
    <div className={styles.bodyHeader}>
      <h1>RENAN ROCHA RAMALHO</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNiwlX_-FBGfgTkRwRevk8gT0fxlrTtlTxon0Uca-2g&s' alt=""/>
    </div>
   <SectionAboutMe title="Sobre mim" />
   <SectionQualifications/>
   <SectionProjects />
   
   </div>
   <Footer/>
   </>
  );
}
