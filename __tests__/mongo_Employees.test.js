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

    it('should insert a new Employee into the Employee collection', async () => {
        const Employee = db.collection('Employee');

        const mockEmployee = {
            id: 'some-Employee-id',
            jobTitleName: 'The Boss',
            firstName: "John",
            lastName: "Doe",
            preferredFullName: "John",
            employeeCode: "L1",
            region: "US",
            phoneNumber: "555-555-1234",
            emailAddress: "johndoe@gmail.com",
        }

        await Employee.insertOne(mockEmployee)

        const insertedEmployee = await Employee.findOne({ id: 'some-Employee-id' });

        expect(insertedEmployee).toEqual(mockEmployee)

        if (insertedEmployee.acknowledged) {
            expect(insertedEmployee.status).toBe(201);
        }
    },
        
    it('should delete a Employee from the Employee collection', async () => {
        const Employee = db.collection('Employee')
        await Employee.deleteMany({ id: 'some-Employee-id' })
        const deletedEmployee = await Employee.findOne({ id: 'some-Employee-id' });
        expect(deletedEmployee).toEqual(null)
    })
)})