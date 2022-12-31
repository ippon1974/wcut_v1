import Link from "next/link";
import classes from '../../../styles/index.module.scss';

const TextHead = () => {
   return (
    <>
        <div className={classes.blockDesc}>
           <h2><Link href={"/technology"}>Гидроабразивная резка</Link></h2>
           <p>Более 70 видов материалов для раскроя. Холодный раскрой без тепловой деформации материала. Подготовка чертежей.</p>
        </div>
    </>
   )     
}
export default TextHead;