import Link from 'next/link'
import styles from './styles.module.scss'
export const SectionQualifications = () => {
    return(
        <>
        <div className={styles.sectionContainer}>
            <h1>Qualifications</h1>
        <section className={styles.sectionContent}> 
                
            <article>
                <ul>
                    <li>
                        Title : 
                    </li>
                    <li>
                    Description : 
                   <span className={styles.listDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis venenatis volutpat. Pellentesque hendrerit, nibh quis tincidunt eleifend, ante justo lobortis libero, at suscipit mi felis sit amet risus. Vestibulum gravida elit eu imperdiet posuere. Aliquam vel nisi augue. Curabitur vitae ullamcorper nunc. Integer vehicula libero dolor, quis vehicula ligula finibus ut. Duis interdum convallis nunc, in hendrerit metus aliquam vel. Nulla facilisi. Maecenas ornare eros et ultrices euismod. Nulla posuere tincidunt dui, eu aliquam elit convallis id. Aliquam scelerisque posuere elementum.  
                   </span>
                    </li>
                    <li>
                        Start :
                    </li>
                    <li>
                        End :
                    </li>
                </ul>
                    </article>
            
        </section>
        <h2><Link href="#">Certificate :</Link> </h2>
        </div>
        </>
    )
}