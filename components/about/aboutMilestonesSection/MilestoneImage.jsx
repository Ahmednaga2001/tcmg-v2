import styles from "@/components/about/aboutMilestonesSection/aboutMilestonesSection.module.css";
import Image from 'next/image'

const MilestoneImage = ({path}) => {
  console.log(path);
  
  return (
    <div className={styles.milestoneImageContainer}>
    <Image  src={path} width={468.98} height={287}  className={styles.img}  alt={path}/>
    </div>
  )
}

export default MilestoneImage
