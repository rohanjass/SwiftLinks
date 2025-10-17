import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  tls: true,
  tlsAllowInvalidCertificates: true,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,
  maxPoolSize: 10,
  retryWrites: true,
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise


// mongodb logics