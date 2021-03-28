function sliderInIt(){

    const button = document.querySelectorAll('.slider_button');
    const sliderBgWrap = document.querySelector('.slider_bg');
    const sliderBgItems = document.querySelectorAll('.slider_item');
    const sliderCount = sliderBgItems.length;
    let left = 0;

    sliderBgWrap.style.width = window.innerWidth * sliderCount + 'px';
    sliderBgWrap.style.left = left;

    for(let i = 0 ; i < sliderCount ; i++){
        sliderBgItems[i].style.width = window.innerWidth + 'px';
    };

    function prev(){
        
        if(left < 0 ){
            left += window.innerWidth;
            sliderBgWrap.style.left = left + 'px';
        }else if(left >= 0){
            left = 0;
            sliderBgWrap.style.left = left + 'px';
        };
    };

    function next(){

        if(left > -window.innerWidth * (sliderCount - 1)){
            left -= window.innerWidth;
            sliderBgWrap.style.left = left + 'px';
        }else if(left <= -window.innerWidth * (sliderCount - 1)){
            left = -window.innerWidth * (sliderCount -1);
            sliderBgWrap.style.left = left + 'px';
        };
    };

    for(i = 0 ; i < button.length ; i++){
        button[i].addEventListener('click', (e) => {

            const id = e.target.getAttribute('id');

            if(id === 'prev'){
                prev();
            }else if(id === 'next'){
                next();
            }else {
                console.log('something is wrong');
            };
        });
    };

};
sliderInIt();

const logo = document.querySelector('.logo');

logo.addEventListener('click', sliderInIt);