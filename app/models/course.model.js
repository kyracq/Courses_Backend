module.exports = (mongoose) => {
  const Course = mongoose.model(
    "course",
    mongoose.Schema(
      {
        title: String,
        description: String,
        author: String,
        viewCount: Number,
        imageUrl: String,
        subject: String,
      },
      { timestamps: true }
    )
  );

  return Course;
};
