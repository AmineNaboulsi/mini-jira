import React , { useState ,useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import IconProjectManager from './assets/project-management.png' ;
import MiniJiraIcon from './assets/jira3124.webp' ;
import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";


import './index.css'
function App() {
    const [TotalItems , setTotalItems] = useState(()=>{
        const lastid = localStorage.getItem('lastid');
        return lastid ? lastid : 1 ;
    });
    const [tachelist, settachelist] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            settachelist(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tachelist));
        localStorage.setItem('lastid' ,lastid );
    }, [tachelist] );


    const [SelectedTask , setSelectedTask] = useState( {
        Id : 0 ,
        Name : '' ,
        Desc : '',
        date_limit : new Date() ,
        etat : 1,
        isOpenedMenu : false ,
        EditMode : false 
    });
    const [slider , setslider] = useState(()=>{
        const pslider =  localStorage.getItem('pslider');
        return pslider==0?true :false ;
    });
    const [EditMode , setEditMode] = useState(false);

    const Editcontent = (id) =>{
        settachelist((prevList) =>
            prevList.map((item) =>
                item.Id === id
                    ? { ...item, 
                    EditMode: !item.EditMode }
                    : { ...item, 
                        EditMode: false }
            )
        );
    }
    const CloseEditcontent = (id) =>{
        settachelist((prevList) =>
            prevList.map((item) =>
                item.Id === id
                    ? { ...item, 
                    EditMode: !item.EditMode }
                    : { ...item, 
                        EditMode: false }
            )
        );
    }
    const ValideEditcontent = (id) =>{
        settachelist(prev=>(
            prev.map((item)=> item.Id === id ?
                {...item , 
                    Name : item.NameEdit ,
                    EditMode : false
                }
            : item)
        ))  
    } 
    const HandleEditNameChanged = (e , id) =>{
        const newname = e.target.value;
        settachelist((prev) => 
            prev.map((item)=> item.Id === id ? {
                ...item ,
                NameEdit : newname
            }:item )
        )
        console.log(tachelist)
    } 
    const SlideBarEventClick = () => {
        setslider(!slider);
        localStorage.setItem('pslider',slider?1:0);

    }
   
    const OpenEtatCombo = (id) => {
        settachelist((prevList) =>
            prevList.map((item) =>
                item.Id === id
                    ? { ...item, isOpenedMenu: !item.isOpenedMenu }
                    : {...item , isOpenedMenu: false } 
            )
        );
    };
    const ChangeEtat = (id , i) =>{
        settachelist((prevList) =>
            prevList.map((item) =>
                item.Id === id
                    ? { ...item, etat: i,isOpenedMenu : false}
                    : item 
            )
        );
    }
    const DeleteTask = (id)=>{
        settachelist(
            tachelist.filter(item => item.Id !== id )
        )
        localStorage.setItem('tasks', JSON.stringify(tachelist));
    }
    const AddTask = ()=>{
        tachelist.push({
            Id : TotalItems ,
            Name : 'nouvelle tache' ,
            NameEdit : '' ,
            Desc : '',
            date_limit : new Date() ,
            etat : 1,
            isOpenedMenu : false ,
            EditMode : false 
        })
        setTotalItems(TotalItems +1);
        localStorage.setItem('tasks', JSON.stringify(tachelist));
    }
    const HandledEditBtn = ()=>{
        setEditMode(false);
        const id = SelectedTask.Id?SelectedTask.Id:-1;
        settachelist(p=>
            p.map(item=> item.Id === id ? {
                ...item ,
                Name : SelectedTask && SelectedTask.Name , 
                Desc : SelectedTask && SelectedTask.Desc ,
                date_limit : new Date(SelectedTask.date_limit)
            } : item 
        )
        )
        localStorage.setItem('tasks', JSON.stringify(tachelist));

    }
  return (
    <div className='body'>
      <header className="border-b border-gray-300 flex items-center justify-between px-7 py-4 ">
        <div className="flex items-center gap-3 ">
        <BiSolidCategory />
        <img className='h-7' src={MiniJiraIcon} />
            <span >mini-jira</span>
        </div>
        <nav className="menunav flex gap-9">
            <div className="menu-item-active relative">Project</div>
            <div className="menu-item relative">filters</div>
            <div className="menu-item relative">Tableau de bord</div>
            <div className="menu-item relative">Plus</div>
        </nav>
        <div className="bg-red-500 rounded-full py-1 px-3 text-white font-semibold">
            <h2>A</h2>
        </div>
    </header>
    <main >
        <aside id="slider" className="relative border-r-2 border-gray-300 transition-all" style={{width : slider?'300px':'25px'}} /*style="width: 300px;"*/>
            <div id="slidericon" onClick={SlideBarEventClick} className="absolute flex justify-center items-center -right-5 top-6 cursor-pointer  h-10 w-10 border-2 border-gray-400 rounded-full bg-white">
                <IoIosArrowBack size={20} className={slider?'transition-all rotate-0':'transition-all rotate-180'}/>
            </div>
            {slider ? 
            <div id="asidecontent" >
            <div  className="flex gap-5 justify-center mt-4">
                <img className="h-auto w-12	" src={IconProjectManager} alt="" />
                <div className="">
                    <h4 className="font-bold">Bref 4</h4>
                    <p className="font-normal text-sm">Project youcode</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-10">
                <div onClick="MenuTabClick()" id="tabheader"  className="flex items-center ml-4 gap-3 cursor-pointer">
                    <IoIosArrowDown />
                    <h3 >Planification</h3>
                </div>
                
                <div id="tabcontent" className="flex flex-col gap-3 transition-all">
                    <div className="mx-10 py-1 px-2 border-2 rounded-lg cursor-pointer">Taches</div>
                    <div className="mx-10 py-1 px-2 border-2 rounded-lg cursor-pointer">Tableau</div>
                </div>
            </div>
        </div>
            :<></>}
            
            
        </aside>
        <div className="maintachepanel">
            <div className=" flex justify-between items-center "> 
                <div className="">
                    <span>Projects / Bref 4</span>
                    <h2 className="font-bold text-2xl"> Gestion de taches</h2>
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded-md flex items-center gap-1">
                    <IoMdShare  />
                    <span>Partager</span>
                </div>
            </div>
            <div className={EditMode?'panellisttask grid transition-all grid-cols-[70%,30%]':'grid transition-all grid-cols-[100%,0%]'}>
                <div >
                    {tachelist && tachelist.map(item=>(
                        (item.date_limit > new Date().setDate(new Date().getDate()+1) && !item.alertdate ) ? 
                            <div className="mb-2 text-gray-700 bg-red-100 p-2 flex justify-between rounded-md">
                                <div className="flex gap-1 items-center">
                                    <IoTimeSharp className='text-red-600' />
                                    <h2>Le délai du tache {item.Name} a finie </h2>
                                </div>
                                <FaTimes onClick={()=>{
                                    settachelist(p=>
                                        p.map(pre=> pre.Id === item.Id ? {
                                            ...pre ,
                                            alertdate : true
                                        } : pre 
                                    )
                                    )
                                }} className='cursor-pointer' size={10} />
                            </div>
                            : null
                        
                    ))}
                    

                <div className="bg-gray-100 rounded-lg grid grid-rows-[auto,1fr,auto]">

                    <div className="flex flex-row justify-between px-5 py-2">
                        <h4>Tableau de taches</h4>
                        <h4 id="tachestotal"></h4>
                    </div>

                 <div id="tachegrid" className="bg-white h-auto mt-2 mr-2 ml-2 border-t-2 border-gray-300 ">  
                    {tachelist && tachelist.map((item , i)=>(
                    
                        <div key={item.id} id="tacherow" className="tacherow grid px-4 py-2 border-l-2 border-r-2 border-b-2 border-gray-300 items-center gap-5" style={{gridTemplateColumns : "1fr auto auto "}}>
                            <div className="relative flex items-center gap-3">
                                <h3 onClick={()=>{
                                    setEditMode(true);
                                    setSelectedTask(p=>({
                                        ...p ,
                                        Id : item.Id ,
                                        Name :item.Name ,
                                        Desc : item.Desc ,
                                        date_limit : new Date(item.date_limit)
                                    }));
                                }} className='capitalize cursor-pointer hover:underline'>{item.Name}</h3>
                                <div id="edit" onClick={()=> Editcontent(item.Id)} class="editicon cursor-pointer">
                                    <FaPen className='text-gray-400 text-sm'  />
                                </div>
                                {item.EditMode ? 
                                
                                    <div className="flex items-center gap-1 absolute -top-1 h-auto w-auto">
                                                <input 
                                                    id="txtEdit${item.Id}" 
                                                    onChange={(e)=>HandleEditNameChanged(e , item.Id)}
                                                    value={tachelist[i].NameEdit}
                                                    className="border-2 border-blue-400" type="text" />
                                                <div className="flex ">
                                                <MdDone onClick={()=>ValideEditcontent(item.Id)} className='bg-white border-2 p-1 border-gray-200 h-6 w-6 rounded-md cursor-pointer' />
                                                <div onClick={()=>CloseEditcontent(item.Id)}  className='flex justify-center items-center bg-white border-2 p-1 border-gray-200 h-6 w-6 rounded-md cursor-pointer' >
                                                    <IoAdd className='rotate-45'/>
                                                </div>
                                                
                                                </div>
                                        </div>
                                    :
                                <>
                                </>
                                }
                                
                            </div>

                            <div className="relative">
                                <div onClick={()=> OpenEtatCombo(item.Id)} class="flex gap-3 items-center px-2 rounded-sm cursor-pointer">
                                    <h3 className={item.etat==1?`A faire`:item.etat==2?`text-blue-500`:`text-green-500`} >{item.etat==1?`A faire`:item.etat==2?`En cours`:`Terminer`}</h3>
                                    <i ></i>
                                    <IoIosArrowDown className="text-xs" />

                                </div>
                                {item && item.isOpenedMenu ? <>
                                        <div className="z-10 absolute w-full bg-white border-2 rounded-md  h-auto">
                                        <ul className="flex flex-col justify-center cursor-pointer">
                                            <li onClick={()=>ChangeEtat(item.Id , 1)} className="cursor-pointer px-2 hover:bg-gray-300">A faire</li>
                                            <li onClick={()=>ChangeEtat(item.Id , 2)} className="cursor-pointer px-2 hover:bg-gray-300 text-blue-500">En cours</li>
                                            <li onClick={()=>ChangeEtat(item.Id , 3)} className="cursor-pointer px-2 hover:bg-gray-300 text-green-500">Terminer</li>
                                        </ul>
                                    </div>

                                </> : <></>}
                                
                            </div>

                <FaRegTrashCan onClick={()=>DeleteTask(item.Id)} className='text-red-500 cursor-pointer' />
            </div>
        ))}                  
    </div>

                <div onClick={()=>AddTask()} className="flex flex-row items-center gap-1 mx-2 px-1 py-1 mt-2 mb-2 font-semibold rounded-md hover:bg-gray-200 cursor-pointer">
                    <IoAdd />
                    <h4 id="tachestotal">Créer une tache</h4>
                </div>
                </div>  
                </div>
               
                {EditMode && 
                <div  className="editmode">
                    <div className="editmodepanel pl-3 pt-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h2>Edit mode</h2>
                            <IoAdd onClick={()=>{
                                setEditMode(false);
                            }} className='rotate-45 cursor-pointer' size={25}/>
                        </div>
                        <div className="grid gap-2 mt-5">
                            <h2>Name</h2>
                            <input 
                            className='p-2 border-2 rounded-[4px] w-full'
                            type='text'
                            value={SelectedTask.Name}
                            onChange={(e)=>
                                setSelectedTask(prev=>({
                                    ...prev,
                                    Name : e.target.value
                                }))
                            }/>
                        </div>
                        <div className="grid gap-2">
                            <h2>Description</h2>
                            <input 
                            className='p-2 border-2  rounded-[4px] w-full ' 
                            type='text'
                            value={SelectedTask.Desc}
                            onChange={(e)=>
                            {
                                setSelectedTask(prev=>({
                                    ...prev,
                                    Desc : e.target.value
                                }));
                                console.log(SelectedTask)
                            }
                            }/>
                        </div>
                        <div className="grid gap-2">
                            <h2>Date limit</h2>
                            <input 
                            className='p-2 border-2 rounded-[4px] w-full'
                            type='date'
                            value={SelectedTask.date_limit.toISOString().split('T')[0]}
                            onChange={(e)=>
                                setSelectedTask(prev=>({
                                    ...prev,
                                    date_limit : new Date(e.target.value)
                                }))
                            } />
                        </div>
                        <div className="flex justify-end gap-2 mt-3">
                            <button onClick={()=>HandledEditBtn()} className='p-2 text-[0.9rem] bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 border-2 border-solid'>Enregistrer</button>
                            <button onClick={()=>{
                                setEditMode(false);
                            
                            }} className='p-2 text-[0.9rem] text-gray-600 font-medium rounded-md hover:bg-gray-100'>Annuler</button>
                        </div>
                    </div>
                </div>
                
                }
                
            </div>
            
        </div>
    </main>
    </div>
  )
}

export default App
