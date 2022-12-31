import Link from "next/link";
import classes from '../../../styles/index.module.scss';
import Image from "next/image";

const TextHeadMobile = () => {
    return (
     <>
         <div className={classes.blockDesc}>
          <Link href={'/technology'} title={'Технология гидроабразивной резки'}><Image className={classes.responseImg} src={'/text_logo_414_2.png'} width={'378'} height={'43'} alt={'Технология гидроабразивной резки'} /></Link>
           <p>Более 70 видов материалов для раскроя. Холодный раскрой без тепловой деформации материала. Подготовка чертежей.</p>
        </div>
     </>
    )     
 }
 export default TextHeadMobile;