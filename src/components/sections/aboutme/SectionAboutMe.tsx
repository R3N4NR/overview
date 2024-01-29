import { SectionInfo } from '@/models/interfaces/SectionInfo/SectionInfo';
import styles from './styles.module.scss';

export const SectionAboutMe = ({title, textBody, picture, subtitle}:SectionInfo) => {
    return(
        <div className={styles.sectionContainer}>
            <h1>About Me</h1>
        <section className={styles.sectionContent}> 
                
            <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis venenatis volutpat. Pellentesque hendrerit, nibh quis tincidunt eleifend, ante justo lobortis libero, at suscipit mi felis sit amet risus. Vestibulum gravida elit eu imperdiet posuere. Aliquam vel nisi augue. Curabitur vitae ullamcorper nunc. Integer vehicula libero dolor, quis vehicula ligula finibus ut. Duis interdum convallis nunc, in hendrerit metus aliquam vel. Nulla facilisi. Maecenas ornare eros et ultrices euismod. Nulla posuere tincidunt dui, eu aliquam elit convallis id. Aliquam scelerisque posuere elementum.  
            </article>
            
        </section>
        </div>
    )
}