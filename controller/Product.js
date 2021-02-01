const Product = require("../model/product");

exports.getProduct = (req, res, next) => {
    Product.find()
    .then(data => {res.json(data)})
    .catch(err => res.status(404).json(err));
};
exports.addProduct = (req, res) => {
    const addData = new Product({
        nama : req.body.nama,
        keterangan :  req.body.keterangan,
        harga   :   req.body.harga,
        jumlah  :   req.body.jumlah
    })
    addData.save()
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => res.status(400).send(err))
}
exports.delProduct = (req, res) => {
    const id = req.params.id;
    Product.deleteOne({_id : id})
    .then(result => res.send(result).status(200))
    .catch(err => res.send(err).status(404))
}
exports.updateProduct = (req, res, next)=> {
    const Id = req.params.Id;
    siswa.findById(Id)
    .then(data => {
        data.nama = req.body.nama;
        data.keterangan = req.body.keterangan;
        data.harga = req.body.harga;
        data.jumlah = req.body.jumlah;
        return data.save()
    })
    .then(() => res.json({ message : "upadte sucess" }).status(201))
    .catch(err => {
        res.status(400).send(err);
    });
}