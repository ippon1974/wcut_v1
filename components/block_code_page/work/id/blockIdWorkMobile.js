import classes from '../../../../styles/works_id.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockIdWorkMobile = () => {
    return (
        <>
             <div className={`${classes.newListWork}`}>

                <h2>Андресная табличка описане заголовок работы</h2>
             
             <div className={classes.hr}></div>

             <div className={classes.descwork}>
                <p><strong>Material</strong>: name </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor veritatis dolores fugit mollitia cumque non nobis magni nulla molestiae, nesciunt sed aspernatur obcaecati deserunt saepe.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis pariatur sapiente tempora beatae, mollitia, quod officia neque quaerat eum atque accusamus obcaecati aperiam quo aliquid incidunt culpa. Molestias asperiores distinctio facilis voluptatem ratione doloremque eos vel beatae sequi quo accusantium, aspernatur dolorum nostrum quam neque vitae similique. Fugit illum voluptates laudantium accusamus, iure suscipit.</p>
             </div>
             <div>
                <Image className={classes.responseImg} src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
             </div> 
             <div>
                <Image className={classes.responseImg} src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
             </div>
            </div>
            
            
        </>
    )
}
export default BlockIdWorkMobile;