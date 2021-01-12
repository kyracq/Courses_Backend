const db = require("./app/models");
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.courses.collection.drop().catch();

db.courses
  .create([
    {
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      viewCount: 9,
      imageUrl:
        "https://www.misesboston.com/wp-content/uploads/2015/05/us-money-1000x750.jpg",
      subject: "Social Sciences",
      duration: "5h 24m",
    },
    {
      title: "Macroeconomics 101",
      description: "Introductory course in Macroeconomics",
      author: "Jane Doe",
      viewCount: 1,
      imageUrl:
        "https://img.etimg.com/thumb/msid-55508187,width-300,imgsize-329126,,resizemode-4,quality-100/.jpg",
      subject: "Social Sciences",
      duration: "3h 30m",
    },
    {
      title: "Microecomonics 201",
      description: "Second level course in Microecomonics",
      author: "Jane Doe",
      viewCount: 0,
      duration: "4h 32m",
      imageUrl:
        "https://www.misesboston.com/wp-content/uploads/2015/05/us-money-1000x750.jpg",
      subject: "Social Sciences",
    },
    {
      title: "Figma",
      description: "How to get started with Figma",
      author: "ResInDe",
      viewCount: 0,
      duration: "6h 20m",
      imageUrl:
        "https://miro.medium.com/max/5236/1*jNGdZPcjAINHhBERw_gwPA.jpeg",
      subject: "Design",
    },
    {
      title: "Visual Design",
      description: "Introduction to visual design",
      author: "ResInDe",
      viewCount: 0,
      duration: "1h 22m",
      imageUrl: "https://miro.medium.com/max/2880/1*1FwgTDfcV2qbbIPKGoqzWg.png",
      subject: "Design",
    },
  ])
  .then((courses) => {
    console.log(`${courses.length} courses created`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    db.mongoose.connection.close();
  });
