let res=await fetch(localhost/clothes/findSet,
    body:{weather: {temperature: 15, precipitation: false}, user: {gender: 1}})

fetch(localhost/clothes/findSet, {  
    method: 'post',  
    headers: {  
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    },  
    body: 'foo=bar&lorem=ipsum'  
  })
  .then(json)  
  .then(function (data) {  
    console.log('Request succeeded with JSON response', data);  
  })  
  .catch(function (error) {  
    console.log('Request failed', error);  
  });




let response = await fetch(localhost/clothes/findSet); // завершается с заголовками ответа
let result = await response.json(); // читать тело ответа в формате JSON
let data=result.data;
console.log(result);

class Cloth {
    constructor(clothes_name, 
                clothes_type, 
                img_url) 
    {
        this.clothes_name = clothes_name;     // Название
        this.clothes_type = clothes_type;     // Тип одежды
        this.img_url = img_url; // ссылка на картинку
    }
    /*get_data(result)
    {
      ;
      data.forEach(let k => {
        clothes_name=data[k].clothes_name;
        img_url=data[k].img_url;
        clothes_type=data[k].clothes_type;
      });
      

    }*/
}
    create_cloth=(data) => {
        data.forEach(function(index{
            new Cloth((clothes_name=data[k].clothes_name,
                       img_url=data[k].img_url,
                       clothes_type=data[k].clothes_type)
        }
            
            
        )};
    //element = document.getElementById(out_n)=