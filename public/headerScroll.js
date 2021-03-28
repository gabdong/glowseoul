function headerScroll(){

    const header = document.querySelector('.header');
    let scrollHeight = 0;

    setInterval(() => {

        scrollHeight = window.pageYOffset;

        if(scrollHeight > 150){
            header.classList.add('header_on');
            clearInterval();
        }else {
            header.classList.remove('header_on');
            clearInterval();
        };

    }, 100);
};
headerScroll();