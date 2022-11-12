const ApiModel = require("../models/api_model");

const getAll = async (request, response) => {
 const datos = await ApiModel.find()
 response.json(datos)
    
};

const postNuevo = async (request, response) => {
    const { title, description, completed} = request.body
    const user = new ApiModel();
    user.title = title
    user.description = description
    user.completed = completed
   

    user.save()
    .then( data => response.json(data))
    .catch(err => response.json(err));
       
   };


  const getId = async (request, response) => {
    let id = request.body._id;
    console.log(id)
    ApiModel.findOne({ _id: id })
        .then(data => response.json(data))
        .catch(err => response.json(err));
       
   };


   const putUpdateId = async (request, response) => {
    let id = request.body._id;
    ApiModel.updateOne({ _id: id },request.body)
    .then(data => response.json(data))
        .catch(err => response.json(err));

       
   };

   
   const deleteId = async (request, response) => {
    let id = request.body._id;    
   
    ApiModel.deleteOne({ _id: id })
    .then(data => response.json(data))
        .catch(err => response.json(err));

       
   };
   



module.exports = {
    getAll, postNuevo, getId, putUpdateId, deleteId
  };
  
