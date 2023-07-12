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

    it('should insert a new Patient into the Patient collection', async () => {
        const Patient = db.collection('Patient');

        const mockPatient = {
            id: 'some-Patient-id',
            firstName: "John",
            lastName: "Doe",
            address: "2225 Honey Lane, Salt Lake City, UT  96584",
            birthday: "12/25/1999",
            phoneNumber: "865-485-3589",
            emergenyContactName: "Bob Ross",
            emergencyContactPhoneNumber: "855-559-2575",
            insuranceCarrier: "Blue Cross of Utah",
            insuranceId: "2549658365",
            reasonForVisit: "Rash",
            primaryPhysician: "Dr. Sarah Roberts",
        }

        await Patient.insertOne(mockPatient)

        const insertedPatient = await Patient.findOne({ id: 'some-Patient-id' });

        expect(insertedPatient).toEqual(mockPatient)

        if (insertedPatient.acknowledged) {
            expect(insertedPatient.status).toBe(201);
        }
    },
        
    it('should delete a Patient from the Patient collection', async () => {
        const Patient = db.collection('Patient')
        await Patient.deleteMany({ id: 'some-Patient-id' })
        const deletedPatient = await Patient.findOne({ id: 'some-Patient-id' });
        expect(deletedPatient).toEqual(null)
    })
)})