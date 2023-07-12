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

    it('should insert a new Schedule into the Schedule collection', async () => {
        const Schedule = db.collection('Schedule');

        const mockSchedule = {
            patientFirstName: "Grassy",
            patientLastName: "Wizard",
            doctor: "P. Philips",
            department: "Derm",
            date: "10/14/2023",
        }

        await Schedule.insertOne(mockSchedule)

        const insertedSchedule = await Schedule.findOne({ id: 'some-Schedule-id' });

        expect(insertedSchedule).toEqual(mockSchedule)

        if (insertedSchedule.acknowledged) {
            expect(insertedSchedule.status).toBe(201);
        }
    },
        
    it('should delete a Schedule from the Schedule collection', async () => {
        const Schedule = db.collection('Schedule')
        await Schedule.deleteMany({ id: 'some-Schedule-id' })
        const deletedSchedule = await Schedule.findOne({ id: 'some-Schedule-id' });
        expect(deletedSchedule).toEqual(null)
    })
)})