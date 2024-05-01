const button=document.querySelector('button');

const body=document.querySelector('body');

const color=['red','green','pink','yellow','orange'];
body.style.backgroundColor='purple';

button.addEventListener('click',changeB);

function changeB()
{
    const colorIndex= parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];

}