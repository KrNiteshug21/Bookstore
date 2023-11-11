import mongoose from "mongoose";
import { Schema } from "mongoose";

const BookSchema = new Schema({
  title: string,
  authors: {
    name: string,
    birth_year: Number,
    death_year: Number,
  },
  subjects: [],
  image_src: string,
  download_count: Number,
});

module.exports = mongoose.model("Books", BookSchema);
