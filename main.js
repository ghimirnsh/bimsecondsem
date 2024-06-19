let indicator = document.querySelector('.indicator'); // Change to querySelector
let list = document.querySelectorAll('ul li');
let icon = document.querySelectorAll('i');

function moveIndicator(e) {
    indicator.style.left = e.target.offsetLeft + 'px'; // Access e.target.offsetLeft
    indicator.style.width = e.target.offsetWidth + 'px'; // Access e.target.offsetWidth
}

list.forEach(link => {
    link.addEventListener('click', (e) => {
        moveIndicator(e); // Pass the event object
    })
});

function activelink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
   
}


list.forEach((item) =>
    item.addEventListener('click', activelink)
);


 let subjectlist=()=>
    {
        let subject=document.getElementsByClassName('subjects');
        for(let i=0;i<subject.length;i++)
            {
                subject[i].style.opacity=1;
            }
    }