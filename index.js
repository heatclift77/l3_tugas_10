var data = document.getElementById('data');
const api = 'http://localhost:5000/product'
fetch(api)
.then(res => res.json())
.then(response => {
    for(i = 0; i < response.length; i++){
        data.innerHTML +=`<tr>
                            <th>${i + 1}</th>
                            <td>${response[i].nama}</td>
                            <td>${response[i].keterangan}</td>
                            <td>${response[i].harga}</td>
                            <td>${response[i].jumlah}</td>
                            <td>
                                <a href="index.html" class="btn btn-danger" id="remove" data-id=${response[i]._id} onclick="remove(${i})"><i class="fas fa-trash"></i></a>
                                <a href="index.html" class="btn btn-primary" id="btn_update"><i class="fas fa-pen"></i></a>    
                            </td>
                        </tr>`
    }
})
.catch(err => data.innerHTML = err)

remove = (index)=> {
    let data = this.document.querySelectorAll("#remove")
    let id = data[index].getAttribute("data-id")
    fetch(api + id, {
        method : "delete"
    })
    // console.log(api + id)
}

