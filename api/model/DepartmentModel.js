import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  parentid: Number,
  order: Number,
});

departmentSchema.set('timestamps', {});

const DepartmentModel = mongoose.model('Department', departmentSchema);

export default DepartmentModel;
