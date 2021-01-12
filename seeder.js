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
      title: "Macroeconomics 102",
      description: "Introductory course in Macroeconomics",
      author: "John Doe",
      viewCount: 1,
      imageUrl:
        "https://img.etimg.com/thumb/msid-55508187,width-300,imgsize-329126,,resizemode-4,quality-100/.jpg",
      subject: "Social Sciences",
      duration: "4h 30m",
    },
    {
      title: "Economics",
      description: "Introductory course on ecomonics in general",
      author: "John Doe",
      viewCount: 1,
      imageUrl:
        "https://www.investopedia.com/thmb/Hw5nYtli637A1oqmkyer6COmVVc=/1200x800/filters:fill(auto,1)/economics1-47c6be284e7c448aa084543c417301fc.jpg",
      subject: "Social Sciences",
      duration: "2h 12m",
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
      title: "Figma 2",
      description: "Advanced course in Figma",
      author: "ResInDe",
      viewCount: 0,
      duration: "6h 22m",
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
    {
      title: "Visual Design 2",
      description: "Second level course in visual design",
      author: "ResInDe",
      viewCount: 0,
      duration: "1h 22m",
      imageUrl: "https://miro.medium.com/max/2880/1*1FwgTDfcV2qbbIPKGoqzWg.png",
      subject: "Design",
    },
    {
      title: "Design Thinking",
      description: "Introduction to design thinking",
      author: "ResInDe",
      viewCount: 0,
      duration: "1h 40m",
      imageUrl:
        "https://httpsak-a.akamaihd.net/2071817190001/2071817190001_6000898326001_4443548301001-vs.jpg?pubId=2071817190001&videoId=4443548301001",
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
