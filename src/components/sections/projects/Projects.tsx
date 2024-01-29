import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel} from 'react-responsive-carousel';
import styles from './style.module.scss'
export const SectionProjects = () => {

    return(
        <>
        <div className={styles.sectionContainer}>
            <h1>Projects</h1>
        <section className={styles.sectionContent}> 
        <Carousel>

<div>
    <img src="https://aguiarbuenosaires.com/wp-content/uploads/2019/07/DESTACADA-ESCADARIA.png" />
    <p className="legend" >Legend 1</p>
</div>
<div>
    <img src="https://aguiarbuenosaires.com/wp-content/uploads/2019/07/DESTACADA-ESCADARIA.png" />
    <p className="legend">Legend 2</p>
</div>
<div>
    <img src="https://aguiarbuenosaires.com/wp-content/uploads/2019/07/DESTACADA-ESCADARIA.png" />
    <p className="legend">Legend 3</p>
</div>
</Carousel>
            
        </section>
        </div>
        </>
    )
}