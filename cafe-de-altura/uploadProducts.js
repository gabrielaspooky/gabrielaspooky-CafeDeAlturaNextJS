const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://gabrielanava01:Kiwi6969@cluster0.evour.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbName = 'cafedealtura';
const collectionName = 'products';

const products = [
  {
    brand: "Costa Rica Tarrazú",
    price: 9.0,
    img_url: "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_tarrazu_jejzcp.png",
    available: true,
  },
  // ...other products
];

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Get a reference to the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert the products
    const result = await collection.insertMany(products);
    console.log(`Inserted ${result.insertedCount} products`);
  } catch (err) {
    console.error('Error occurred while running the script:', err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
