import mongoose from 'mongoose';


const saleSchema = new mongoose.Schema({
 

  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    
  },
  quantity: {
    type: String,
    required: true
  },
  price: {
    type: String, 
    required: true
  },
  Sale: {
    type: String, 
    required: true
  },
  ShopName: {
    type: String, 
    required: true
  },
  RepId: {
    type: String, 
    required: true
  },
 
 
  
 
  
});


const Sale = mongoose.model('Sale', saleSchema);

export default  Sale;