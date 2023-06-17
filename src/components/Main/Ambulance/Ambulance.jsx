import React, {useEffect, useState} from 'react';
import "./Ambulance.scss";



const ambulance_list_items = [
    {name: "Кан басымы жогорулап же төмөндөп кеткен учурда", video: "https://www.youtube.com/embed/YQNXJpuLKwU?start=1"},
    {name: "Баланын дене табы көтөрүлсө"},
    {name: "Тамак сиңирүү начарлаганда"},
    {name: "Бир нече күн ичи  катса"},
    {name: "Сууга чөккөн адамга жардам көрсөтуу"},
    {name: "Ымыркайдын ичи ооруса"},
    {name: "Эс учун жоготкон адамга жардам берүү. Кантип канды токтоттуу керек"},
    {name: "Бир нече күн ичи  катса"},
    {name: "Сууга чөккөн адамга жардам көрсөтуу"},
    {name: "Ымыркайдын ичи ооруса"},
    {name: "Эс учун жоготкон адамга жардам берүү. Кантип канды токтоттуу керек"},

]

const Ambulance = () => {

    const [chosenList, setChosenList] = useState({});
    const [isActive, setIsActive] = useState([]);

    
    const handleClick = (item, i) => {
        setChosenList(ambulance_list_items[item])

        if (isActive.indexOf(i) === -1) {
            setIsActive([isActive, item, i]);
        }
        
        
    }

    console.log(chosenList)

   

    return (
        <section className='ambulance flex flex-fw-w flex-jc-c'>
            <div className='flex flex-jc-c flex-fw-w flex-ai-c'>
                <h1>Медициналык тез жардам</h1>
                <p className='textCenter'>Биринчи жардам көрсөтүүдөн мурун, адамдын омурткасы же башы жаракат албагандыгын текшериңиз. 
                    Квалификациялуу дарыгерлердин катышуусуз денени кыймылдатуу, 
                    эгерде алар бар болсо, анда такыр болбойт!</p>
            </div>
            <div className='ambulance__content flex flex-jc-c flex-fw-w'>
                <div className='lists__scroll'>
                    <div className='ambulance__lists'>
                        {ambulance_list_items.map((lists, i) => {
                            return <div onClick={() => handleClick(i, lists)} className={isActive.indexOf(i) !== -1 ? "ambulance__list active" : "ambulance__list"} key={i}>{lists.name}</div>
                        })}
                    </div>
                    <div className='scroll__indicator'></div>
                </div>
                <div className='ambulance__video'>
                    <iframe width="100%" height="400" src={chosenList.video} 
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
           
        </section>
    );
};

export default Ambulance;