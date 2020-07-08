// jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB',{ useNewUrlParser: true,useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:[true,"Please check your data entry,no name specified !"]
    },
    rating:{
      type:Number,
      min:1,
      max:10
    },
    review:String
  });

  const Fruit = mongoose.model('Fruit',fruitsSchema);

  const fruit = new Fruit(
    {
      name:"Apple",
      rating:7,
      review:"Pretty solid as a fruit."
    }
  );
  // I have to comment the save method second time if i want to save it only once
  // fruit.save();

  const peach = new Fruit({
    name:"Peach",
    rating:9,
    review:"Awesome fruit"
  });

  peach.save();

  const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFruit:fruitsSchema
  });

  const Person = mongoose.model('Person',personSchema);

  const person = new Person(
    {
      name:"John",
      age:37
    }
  );

  // person.save();

  const guava = new Fruit(
    {
      name:"Guava",
      rating:8,
      review:"Great for health."
    }
  );

  // guava.save();

  const pineapple = new Fruit(
    {
      name:"PineApple",
      rating:9,
      review:"Great Fruit."
    }
  );

  // pineapple.save();

  const amy = new Person(
    {
      name:"Amy",
      age:12,
      favoriteFruit:pineapple
    }
  );

  // amy.save();

  const mango = new Fruit(
    {
      name:"Mango",
      rating:10,
      review:"The king of all fruits"
    }
  );

  const orange = new Fruit(
    {
      name:"Orange",
      rating:6,
      review:"Kinda sour"
    }
  );


  const banana = new Fruit(
    {
      name:"Banana",
      rating:3,
      review:"Weird texture"
    }
  );

  // To save the  many fruits on bulk
  // Fruit.insertMany([mango,orange,banana],function(err){
  //   if(err) console.log(err);
  //   else console.log("Successfully saved all fruits to fruitsDB");
  // });


Fruit.find(function(err,fruits){
  if(err) console.log(err);
  else {
    // Once the last functionality of mongoose is over
    // we've extracted our fruits array
    // we can close it
    mongoose.connection.close();

    fruits.forEach(function(fruit)
  {
    console.log(fruit.name);
  });

  }
});


// Person.updateOne({name:"John"},{favoriteFruit:guava},function(err)
// {
//   if(err) console.log(err);
//   else console.log("Successfully updated the document.");
// });

// Fruit.deleteOne({name:"PineApple"},function(err)
// {
//   if(err) console.log(err);
//   else console.log("Successfully deleted the document.");
// });
