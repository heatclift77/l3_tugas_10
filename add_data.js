

window.addEventListener('load', function(){

    const form = document.getElementById('form');
    const submit = document.getElementById('submit');


    const uri = 'http://localhost:5000/product'

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const keterangan = document.getElementById('keterangan').value;
        const harga = document.getElementById('harga').value;
        const jumlah = document.getElementById('jumlah').value;
        let data = {
            nama:nama,
            keterangan:keterangan,
            harga:harga,
            jumlah:jumlah
        }
        fetch(uri, {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"applicatin/json; charset=utf-8"
            }
        })
        .then(result => result.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
    })
})

