import ColumnModel from "../models/columnModel.js";

// POST /api/strings
export const addColumn = async (req, res) => {
  const { column_name } = req.body;

  try {
    const column = await ColumnModel.findOne({
      column_name,
    });

    if (column) {
      return res.status(409).json({
        message: "Column already exists",
        success: false,
      });
    }
    const column_key = column_name.split(" ").join("-").toLowerCase();
    const newColumn = new ColumnModel({ column_name, column_key });
    await newColumn.save();
    res.status(201).json({
      message: "Column Created Successfully.",
      data: newColumn,
      success: true,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server error", error: err.message, success: false });
  }
};
