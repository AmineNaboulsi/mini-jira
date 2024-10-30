import React , { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import IconProjectManager from './assets/project-management.png' ;
import MiniJiraIcon from './assets/jira3124.webp' ;
import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { MdDone } from "react-icons/md";


import './index.css'
function App() {
    const [tachelist , settachelist] = useState([
        {
            Id : 1 ,
            Name : 'tache 1 ' ,
            NameEdit : '' ,
            Desc : 'bla bla bla bla',
            date_limit : new Date() ,
            etat : 1,
            isOpenedMenu : false ,
            EditMode : false 
        },
        {
            Id : 2 ,
            Name : 'tache 2 ' ,
            NameEdit : '' ,
            Desc : 'bla bla bla bla',
            date_limit : new Date() ,
            etat : 2,
            isOpenedMenu : false ,
            EditMode : false
        },   {
            Id : 3 ,
            Name : 'tache 3 ' ,
            NameEdit : '' ,
            Desc : 'bla bla bla bla',
            date_limit : new Date() ,
            etat : 1,
            isOpenedMenu : false ,
            EditMode : false 
        },
        {
            Id : 4 ,
            Name : 'tache 4 ' ,
            NameEdit : '' ,
            Desc : 'bla bla bla bla',
            date_limit : new Date() ,
            etat : 2,
            isOpenedMenu : false ,
            EditMode : false
        },
        {
            Id : 5 ,
            Name : 'tache 5 ' ,
            NameEdit : '' ,
            Desc : 'bla bla bla bla',
            date_limit : new Date() ,
            etat : 1,
            isOpenedMenu : false ,
            EditMode : false 
        },
        {
            Id : 6 ,
            Name : 'tache 6 ' ,
            NameEdit : '' ,
            Desc : 'bla bla bla bla',
            date_limit : new Date() ,
            etat : 2,
            isOpenedMenu : false ,
            EditMode : false
        }
    ]);
    const [slider , setslider] = useState(false)
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
    const SlideBarEventClick = () => setslider(!slider)
   
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
        <aside id="slider" className="relative border-r-2 border-gray-300 transition-all" style={{width : slider?'300px':'50px'}} /*style="width: 300px;"*/>
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
                    {/* <i id="tabheadericon" className="fa-solid fa-chevron-right text-xs transition-all" style="transform: rotate(90deg);"></i> */}
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
            <div className="flex justify-between items-center "> 
                <div className="">
                    <span>Projects / Bref 4</span>
                    <h2 className="font-bold text-2xl"> Gestion de taches</h2>
                </div>
                <div className="bg-blue-600 text-white px-5 py-1 cursor-pointer rounded-md">
                    <span>Créer</span>
                </div>
            </div>
            <div className="bg-gray-100 rounded-lg">
                <div className="flex flex-row justify-between px-5 py-2">
                    <h4>Tableau de taches</h4>
                    <h4 id="tachestotal"></h4>
                </div>
                <div id="tachegrid" className="bg-white h-auto mt-2 mr-2 ml-2 ">  
                    {tachelist && tachelist.map((item , i)=>(
                     
                         <div key={item.id} id="tacherow" className="tacherow grid px-4 py-2 border-l-2 border-r-2 border-b-2 border-gray-300 items-center gap-5" style={{gridTemplateColumns : "1fr auto auto "}}>
                            <div className="relative flex items-center gap-3">
                                <h3>{item.Name}</h3>
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
                
            </div>
        </div>
    </main>
    </div>
  )
}

export default App
