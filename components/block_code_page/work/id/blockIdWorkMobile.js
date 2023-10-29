import classes from '../../../../styles/works_id.module.scss';
import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

const BlockIdWorkMobile = (props) => {

    const { asPath, pathname } = useRouter();
    const idworkold = asPath.split('/');
    const idworknew = idworkold[2];

    const[w, setW] = useState(props.work);
    useEffect(()=>{
        async function load() {
            // const res = await fetch(`http://23.105.246.179:7000/works?id=${idworknew}`);
            const res = await fetch(`/api/works/id/${idworknew}`);
            const d = await res.json();
            setW(d);
        }
            load();
    },[idworknew])// eslint-disable-line react-hooks/exhaustive-deps

    const[prev, setPrev] = useState(props.prevPage);
    const[next, setNext] = useState(props.nextPage);
    const[max, setMax] =  useState(props.maxId);
    const[min, setMin] =  useState(props.minId);

    return (
        <>
             <div className={`${classes.newListWork}`}>

                <h2>{w.title}</h2>
                <div className={classes.subMenuPreNext}>
                  <div><Link href={'/works'} title={'Все работы'}>Работы</Link></div>
                  <div></div>
                  {w.id === props.minId  ?
                    <div>
                        {/* <Link href={`/works/${props.prevPage}`} title={"Предыдущая работа"}>&#8592; Предыдущая</Link> */}
                    </div>
                  : 
                    <div><Link href={`/works/${props.prevPage}`} title={"Предыдущая работа"}>&#8592; Предыдущая</Link></div>
                  }
                    
                  {w.id === props.maxId  ?
                  <div>
                    {/* <Link href={`/works/${props.nextPage}`} title={"Следующая работа"}>Следующая &#8594;</Link> */}
                  </div>
                    :
                  <div>
                    <Link href={`/works/${props.nextPage}`} title={"Следующая работа"}>Следующая &#8594;</Link>
                  </div>
                  }
                </div>
             
             <div className={classes.hr}></div>

             <div className={classes.descwork}>
                <p><strong>Материал:</strong>: {w.materialname}</p>
                <div dangerouslySetInnerHTML={{__html: w.body}} />
                <div><Link style={{
                textDecoration: 'none',
                color: 'red',
                fontSize: 12,
              }}
                href={"/materials"} title={"Весь прайс на раскрой"}>Весь прайс на раскрой</Link></div>
             </div>

             {w.img_1 ? <div><Image className={classes.responseImg} src={`/works/small/${w.img_1}.jpg`} width={'303'} height={'227'} alt={w.title}></Image></div> : ""} 
             {w.img_2 ? <div><Image className={classes.responseImg} src={`/works/small/${w.img_2}.jpg`} width={'303'} height={'227'} alt={w.title}></Image></div> : ""}
             {w.img_3 ? <div><Image className={classes.responseImg} src={`/works/small/${w.img_3}.jpg`} width={'303'} height={'227'} alt={w.title}></Image></div> : ""}
             {w.img_4 ? <div><Image className={classes.responseImg} src={`/works/small/${w.img_4}.jpg`} width={'303'} height={'227'} alt={w.title}></Image></div> : ""}
             {w.img_5 ? <div><Image className={classes.responseImg} src={`/works/small/${w.img_5}.jpg`} width={'303'} height={'227'} alt={w.title}></Image></div> : ""}
            
            </div>
        </>
    )
}
export default BlockIdWorkMobile;