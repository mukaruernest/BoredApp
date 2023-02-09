
const getItems =  async function(){
    const response = await fetch('https://www.boredapi.com/api/activity?type=recreational')
    const data = await response.json()
    return data
}
getItems()
.then((data)=>{
    
const select = document.querySelector('#membership');
const options = select.querySelectorAll('option');

const values = [];
options.forEach(option => {
  values.push(option.value);
});

console.log(values);
    
   


// if(data['type'] == 'recreational'){
//     console.log(data) 
// }
 
})
