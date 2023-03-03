let form = document.getElementById('addform')
function windowrefresh(table){
    let arr = ['table1','table2','table3']
    for(let i=0;i<arr.length;i++){
    let list = document.getElementById(arr[i])
    while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
        }
    axios.get('https://crudcrud.com/api/67016cd1497e47b7be47647261f08bf3/resturentData')
    .then((res)=>{
        res.data.map((item)=>{
            showUserDetails(item)
            // console.log(item)
        })
    })
}

    form.addEventListener('submit',addData=(e)=>{
        e.preventDefault();
        let name  = document.getElementById('name').value 
        let price = document.getElementById('price').value
        let table = document.getElementById('table').value
        let obj = {
            name ,
            price,
            table
        }
        axios.post('https://crudcrud.com/api/67016cd1497e47b7be47647261f08bf3/resturentData',{obj})
        .then((res)=>{
            setTimeout(()=>{
                windowrefresh(table)
            },500)
            console.log(res)})
        .catch((err)=>console.log(err))
        
    })

// Loading in the screen
window.addEventListener('DOMContentLoaded',()=>{
    let table = 'table1'
    windowrefresh(table)
})
// 
    
    function showUserDetails(item){
    let list = document.getElementById(item.obj.table)
    // while (list.hasChildNodes()) {
    //     list.removeChild(list.firstChild);
    //   }
    let li = document.createElement('li');
    // li.textContent =''
    li.textContent = `Name : ${item.obj.name}  price : ${item.obj.price}  table :${item.obj.table}`
    // create Delete Button
    let deletebutton = document.createElement('button');
    deletebutton.textContent ='Delete'
    deletebutton.className ='btn btn-danger p-3 ms-3 float-right'
    // Create Edit Button
    // let editbtn = document.createElement('button')
    // editbtn.textContent = 'Edit'
    // editbtn.className ='btn btn-primary float-right'
    // delete
    deletebutton.onclick=()=>{
        
        axios.delete(`https://crudcrud.com/api/67016cd1497e47b7be47647261f08bf3/resturentData/${item._id}`)
        .then((res)=>{
            console.log(`Deletion Status: ${res.statusText}`)
            setTimeout(()=>{
                    windowrefresh(item.obj.table)
            },500)
        })
    }
    // editbtn.onclick=()=>{
    //     list.removeChild(li)
    //     let name1  = document.getElementById('name')
    //     let price1 = document.getElementById('price')
    //     let table1 = document.getElementById('table')
    //     name1.value = item.obj.name
    //     price1.value = item.obj.price
    //     table1.value = item.obj.table

    //     obj ={
    //         name1,
    //         price1,
    //         table1
    //     }

    //     axios.delete(`https://crudcrud.com/api/67016cd1497e47b7be47647261f08bf3/resturentData${item._id}`,)
    //     .then((res)=>{
    //         setTimeout(()=>{
    //             windowrefresh()
    //         },500)
    //         console.log(res)})
    //     .catch((err)=>console.log(err))
    // }
    // li.appendChild(editbtn)
    li.appendChild(deletebutton)
    list.appendChild(li)
    

}