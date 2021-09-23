fetch('https://mocki.io/v1/c780d07a-f011-4a22-b28a-240551396d33?fbclid=IwAR2RJZchU7_wR2g5heAx8b9c9vomxZtmFvgmnL8IM9EpheA1Hlm6c_j6Ylw')
  .then(response => response.json())
  .then(json => usingapi(json))

const usingapi=(collectingapi)=>{
     console.log(collectingapi);
     collectingapi.forEach(getobject=>{
         //console.log(getobject);
         cuisine(getobject.CuisineStyle);
     })
}
const cuisine=(cuisinearray)=>{
    //debugger;
   const show= document.getElementById('show');
    const normalarray=cuisinearray.replace(/\[|\]/g,'').split(',');
    normalarray.forEach(getvalue=>{
        const ul=document.createElement('ul');
        console.log(getvalue);
        ul.innerHTML=`
           <li>${getvalue}</li>
        `;
        show.appendChild(ul);
    })
    // console.log(cuisinearray);
    // const newarray=cuisinearray.replace(/\[|\]/g,'').split(',');
    // //console.log(newarray[0]);
    // // const p=document.createElement('p');
    // newarray.forEach(data=>{
       
    //     document.getElementById('show').innerText=data;
    // })
    
}