async function createId() {
    var now = Date.now();
    var id = now + Math.floor(Math.random() * now / 1000) * 1000 + (now % 1000);
    return id;
  }
  
  async function create(modelCtor, data, id) {
    data.id = id;
    const object = await modelCtor.create(data);
    return object;
  }
  
  async function bulkCreate(modelCtor, query) {
    const object = await modelCtor.bulkCreate(query);
    return object;
  }
  
  async function update(modelCtor, data) {
    const object = await modelCtor.update(data);
    return object;
  }
  
  async function updateByQuery(modelCtor , data,query){
    const object = await modelCtor.update(data,{
      where : query
    })
    return object
  } 
  
  async function findById(modelCtor, id) {
    const foundObejct = await modelCtor.findByPk(id);
    return foundObejct;
  }
  
  async function find(modelCtor, criteria, attributes = "") {
    var query = {
      where: criteria,
      defaults: { criteria: {} },
      attributes: attributes,
      
    };
    const objects = await modelCtor.findAll(query);
    return objects;
  }
  
  module.exports = {
    create,
    update,
    findById,
    find,
    bulkCreate,
    createId,
    updateByQuery
  };