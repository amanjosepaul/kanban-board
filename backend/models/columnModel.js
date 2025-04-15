import mongoose from "mongoose";

const ColumnSchema = new mongoose.Schema(
  {
    column_name: {
      type: String,
      required: true,
    },
    column_key: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ColumnModel = mongoose.model("columns", ColumnSchema);

export default ColumnModel;
