import classes from '../../styles/works.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWorkMobile = () => {
    return (
        <>
            <div className={`${classes.newListWork}`}>
                        <Link href={'#'}>    
                        <div>
                            <div>
                                <Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>

                        <Link href={'#'}>    
                        <div>
                            <div>
                                <Image src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>
                        
                        <Link href={'#'}>    
                        <div>
                            <div>
                                <Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>
                    </div>
        </>
    )         
}
export default BlockWorkMobile;