import Image from "next/image";
import styles from "./page.module.css"
const Hero = ({title,path}) => {
  console.log(path);
  
  return (
    <section className={styles.hero} style={{backgroundImage: `url(${path}) , background-size:cover , background-repeat: no-repeat`}}>
      <div>
        <Image src={path} width={200} height={200} alt={path}/>
      </div>
      <h1>{title}</h1>
    </section>
  )
}

export default Hero
