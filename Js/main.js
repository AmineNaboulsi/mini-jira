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