const products = [
  { id:1,name:"Iron Man Photo Frame",price:399,category:"Photo Frames",rating:4.9,image:"images/ironman.jpg",available:true,
    description:"A4 portrait frame with stylized Iron Man artwork. Matte black frame, glare-reduced front.",
    specs:["Size: A4 (210×297mm), Portrait","Frame: Matte Black","Front: Acrylic/Glass","Mount: Wall hook","Print: HD art"],
    reviews:[{user:"VIRK User",rating:5,comment:"Looks epic on the wall!"}],colors:["Black"],stock:25 },
  { id:2,name:"Hulk Photo Frame",price:299,category:"Photo Frames",rating:4.8,image:"images/hulk.jpg",available:true,
    description:"A4 portrait frame featuring bold Hulk-themed illustration. Ready to hang.",
    specs:["Size: A4 (210×297mm), Portrait","Frame: Matte Black","Front: Acrylic/Glass","Finish: Vibrant print","Mount: Wall"],
    reviews:[{user:"Aman",rating:5,comment:"Strong colors, great finish."}],colors:["Black"],stock:40 },
  { id:3,name:"Thor Photo Frame",price:399,category:"Photo Frames",rating:4.9,image:"images/thor.jpg",available:true,
    description:"A4 portrait deep-box style with Thor/Mjolnir-inspired art and matte premium print.",
    specs:["Size: A4 (210×297mm), Portrait","Frame: Deep box","Front: Acrylic","Finish: Matte premium","Mount: Wall"],
    reviews:[{user:"Neha",rating:5,comment:"Premium look and feel."}],colors:["Black"],stock:30 },
  { id:4,name:"Captain America Photo Frame",price:449,category:"Photo Frames",rating:4.7,image:"images/captain.jpg",available:true,
    description:"A4 portrait with shield-centric artwork, scratch-resistant HD print.",
    specs:["Size: A4 (210×297mm), Portrait","Frame: Matte Black","Front: Acrylic/Glass","Finish: Scratch-resistant","Mount: Desk/Wall"],
    reviews:[{user:"Karan",rating:4.7,comment:"Sharp details and colors."}],colors:["Black"],stock:20 },
  { id:5,name:"Wanda Photo Frame",price:399,category:"Photo Frames",rating:5.0,image:"images/wanda.jpg",available:true,
    description:"A4 portrait frame featuring elegant Wanda-themed artwork with red magical accents.",
    specs:["Size: A4 (210×297mm), Portrait","Frame: Matte Black","Front: Acrylic/Glass","Finish: HD print","Mount: Wall"],
    reviews:[{user:"Simran",rating:5,comment:"Stunning centerpiece!"}],colors:["Black"],stock:28 }
];
try{ localStorage.setItem('products', JSON.stringify(products)); }catch(e){}
