const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('MedData')
    });
    afterAll(async() => {
        await connection.close()
    })

    it('should insert a new Admin into the Admin collection', async () => {
        const Admin = db.collection('Admin');

        const mockAdmin = {
            id: 'some-Admin-id',
            firstName: "John",
            lastName: "Doe",
            accessLevel: "johnDoe@gmail.com",
            department: "pediatrics",
        }

        await Admin.insertOne(mockAdmin)

        const insertedAdmin = await Admin.findOne({ id: 'some-Admin-id' });

        expect(insertedAdmin).toEqual(mockAdmin)

        if (insertedAdmin.acknowledged) {
            expect(insertedAdmin.status).toBe(201);
        }
    },
        
    it('should delete a Admin from the Admin collection', async () => {
        const Admin = db.collection('Admin')
        await Admin.deleteMany({ id: 'some-Admin-id' })
        const deletedAdmin = await Admin.findOne({ id: 'some-Admin-id' });
        expect(deletedAdmin).toEqual(null)
    })
)})