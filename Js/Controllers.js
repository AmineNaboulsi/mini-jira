const tache_list = [] ;
tache_list.push({
    Id : 1 ,
    Name : 'tache 1 ' ,
    Desc : 'bla bla bla bla',
    date_limit : new Date() ,
    etat : 1,
});
tache_list.push({
    Id : 2 ,
    Name : 'tache 2 ' ,
    Desc : 'bla bla bla bla',
    date_limit : new Date() ,
    etat : 2,
});
tache_list.push({
    Id : 3 ,
    Name : 'tache 3 ' ,
    Desc : 'bla bla bla bla',
    date_limit : new Date() ,
    etat : 2,
});
console.log(tache_list);

const OpenEtatCombo = (num) => {
    const ComboContent = document.getElementById('combo-content'+num);

    if(ComboContent.getAttribute('isopened') == 'true'){
        ComboContent.classList.add('hidden');
        ComboContent.setAttribute('isopened','false');
    }
    else {
        ComboContent.classList.remove('hidden');
        ComboContent.setAttribute('isopened','true');
    }
        
}
const ChangeEtat = (id , pick)=> {
    tache_list.forEach((item , i) =>{
        if(item.Id == id ){
            tache_list[i].etat = pick;
        }
    })
    console.log(tache_list);
    FillGrid();
}
const Editcontent = (id)=> {
    const editmenu = document.getElementById('editmenu'+id);
    if(editmenu.getAttribute('ModeEdit') == 'true'){
        editmenu.classList.add('hidden');
        editmenu.setAttribute('ModeEdit','false');
    }else{
        editmenu.classList.remove('hidden');
        editmenu.setAttribute('ModeEdit','true');
    }
}

const CloseEditcontent = (id)=> {
    console.log("CloseEditcontent");
    const editmenu = document.getElementById('editmenu'+id);
    editmenu.classList.add('hidden');
    editmenu.setAttribute('ModeEdit','false');
}

const ValideEditcontent = (id)=> {
    console.log("ValideEditcontent");

    const txtEdit = document.getElementById('txtEdit'+id);
    const editmenu = document.getElementById('editmenu'+id);
    if(txtEdit.value != ""){
        editmenu.classList.add('hidden');
        editmenu.setAttribute('ModeEdit','false');
        tache_list.forEach((item , i) =>{
            if(item.Id == id ){
                tache_list[i].Name = txtEdit.value;
            }
        })
    }
    FillGrid();
}


const FillGrid = ()=>{
    tachegrid.innerHTML = ``;
    tache_list.forEach((item , i) =>{
        Totaltaches++;
        const newrow = document.createElement('div');
        newrow.innerHTML = `
         <div id="tacherow" data-id="${item.Id}" class="tacherow grid px-4 py-2 border-l-2 border-r-2 border-b-2 border-gray-300 items-center gap-5" style="grid-template-columns: 1fr auto auto ;">
                            <div class="relative flex items-center gap-3">
                                <h3>${item.Name}</h3>
                                <div id="edit" onclick='Editcontent(${item.Id})' class="editicon cursor-pointer">
                                    <i class="fa-solid fa-pen text-gray-400 text-sm"></i>
                                </div>
                                <div ModeEdit='false' id="editmenu${item.Id}" class="hidden flex items-center gap-1 absolute -top-1 h-auto w-auto">
                                    <input id="txtEdit${item.Id}" class="border-2 border-blue-400" type="text" />
                                    <div class="flex justify-end">
                                    <i onclick='ValideEditcontent(${item.Id})' class="fa-solid fa-check text-xs p-2 mt-1 bg-white border-2 border-gray-200 rounded-md cursor-pointer"></i>
                                    <i onclick='CloseEditcontent(${item.Id})' class="fa-solid fa-xmark text-xs p-2 mt-1 bg-white border-2 border-gray-200 rounded-md cursor-pointer"></i>
                                    </div>
                                </div>
                            </div>
    
                            <div class="relative">
                                <div onclick="OpenEtatCombo(${i+1})" class="flex gap-3 items-center px-2 rounded-sm cursor-pointer">
                                    <h3 class="${item.etat==1?`A faire`:item.etat==2?`text-blue-500`:`text-green-500`}" >${item.etat==1?`A faire`:item.etat==2?`En cours`:`Terminer`}</h3>
                                    <i class="fa-solid fa-chevron-down text-xs"></i>
                                </div>
                                <div id="combo-content${i+1}" class="z-10 hidden absolute w-full bg-white border-2 rounded-md  h-auto">
                                    <ul class="flex flex-col justify-center cursor-pointer">
                                        <li onclick="ChangeEtat(${item.Id} , 1)" class="cursor-pointer px-2 hover:bg-gray-300">A faire</li>
                                        <li onclick="ChangeEtat(${item.Id} , 2)" class="cursor-pointer px-2 hover:bg-gray-300 text-blue-500">En cours</li>
                                        <li onclick="ChangeEtat(${item.Id} , 3)" class="cursor-pointer px-2 hover:bg-gray-300 text-green-500">Terminer</li>
                                    </ul>
                                </div>
                            </div>
    
                            <i class="fa-solid fa-trash-can text-red-400 text-xs cursor-pointer"></i>
                        </div>
        ` ;
        tachegrid.appendChild(newrow);
    })
}
FillGrid();

const tachestotal = document.getElementById('tachestotal');
tachestotal.innerHTML = `Count ( ${Totaltaches} )`