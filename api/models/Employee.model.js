import mongoose from 'mongoose';


const employeeSchema = new mongoose.Schema({
 

  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  agency: {
    type: String, 
    required: true
  },
  employmentdate: {
    type: String, 
    required: true
  },
  contact: {
    type: String, 
    required: true
  },
   actions: {
    type: String, 
    required: true
  },
 
 
 
 
  
 
  
});


const Employee = mongoose.model('Employee', employeeSchema);

export default  Employee;