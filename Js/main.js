const tachegrid = document.querySelector('#tachegrid');
const allBtnIcons = tachegrid.querySelectorAll('div');
const tacherow = document.getElementById('tacherow');
const edit = document.getElementById('edit');
let counter = 0 ;
let Totaltaches = 0 ;

const SlideBarEventClick = ()=>{
    const slider = document.getElementById('slider');
    const slidericon = document.getElementById('slidericon');
    const asidecontent = document.getElementById('asidecontent');
    
    const isOpen = slider.getAttribute('isopened');

    if(isOpen =='true'){
        slider.setAttribute('isopened' , 'false');
        slidericon.style.transform = 'rotate(180deg)';
        asidecontent.style.display = 'none' ;
        slider.style.width = '50px' ;
    }
    else{
        slider.setAttribute('isopened' , 'true');
        slidericon.style.transform = 'rotate(0deg)';
        asidecontent.style.display = 'block' ;
        slider.style.width = '300px' ;
    }
}
const MenuTabClick = ()=>{
    const tabcontent = document.getElementById('tabcontent');
    const tabheader = document.getElementById('tabheader');
    const tabheadericon = document.getElementById('tabheadericon');
    
    const isOpen = tabheader.getAttribute('isopened');

    if(isOpen =='true'){
        tabheader.setAttribute('isopened' , 'false');
        tabheadericon.style.transform = 'rotate(0deg)';
        tabcontent.style.scale = '0' ;
    }
    else{
        tabheader.setAttribute('isopened' , 'true');
        tabheadericon.style.transform = 'rotate(90deg)';
        tabcontent.style.scale = '1' ;
    }
}


// allBtnIcons.forEach((divedit , index) => {
//     if (divedit.id === 'edit') {
//         divedit.addEventListener('click' , ()=>{
//             alert(`click on ${counter}`)
//         })
//         divedit.classList.toggle('active');
//         counter++;
//     }
// });


