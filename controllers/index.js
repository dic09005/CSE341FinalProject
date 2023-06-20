
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//////////////////////////////////GET CALL//////////////////////////////////////////////
// getAdminData, getEmployeeData, getPatientData, getScheduleData

const getAdminData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('MedData').collection('Admin').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    } catch (err) {
      res.status(500).json(err);
    }
};

const getEmployeeData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('MedData').collection('Employee').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    } catch (err) {
      res.status(500).json(err);
    }
};

const getPatientData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('MedData').collection('Patient').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    } catch (err) {
      res.status(500).json(err);
    }
};

const getScheduleData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('MedData').collection('Schedule').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    } catch (err) {
      res.status(500).json(err);
    }
};

//////////////////////////////////GET BY ID//////////////////////////////////////////////
// getAdminObject, getEmployeeObject, getPatientObject, getScheduleObject

const getAdminObject = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid Admin id to find a Admin.');
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('MedData').collection('Admin').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getEmployeeObject = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid Employee id to find a Employee.');
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('MedData').collection('Employee').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPatientObject = async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid Patient id to find a Patient.');
      }
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('MedData').collection('Patient').find({ _id: userId });
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const getScheduleObject = async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid Schedule id to find a Schedule.');
      }
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('MedData').collection('Schedule').find({ _id: userId });
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

//////////////////////////////////CREATE OBJECT//////////////////////////////////////////////
// createAdmin, createEmployee, createPatient, createSchedule

const createAdmin = async (req, res) => {
  try {
    const Admin = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      accessLevel: req.body.accessLevel,
      department: req.body.department
    };
    const response = await mongodb.getDb().db('MedData').collection('Admin').insertOne(Admin);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Error occurred while creating Admin.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createEmployee = async (req, res) => {
  try {
    const Employee = {
      jobTitleName: req.body.jobTitleName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      preferredFullName: req.body.preferredFullName,
      employeeCode: req.body.employeeCode,
      region: req.body.region,
      phoneNumber: req.body.phoneNumber,
      emailAddress: req.body.emailAddress
    };
    const response = await mongodb.getDb().db('MedData').collection('Employee').insertOne(Employee);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Error occurred while creating Employee.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createPatient = async (req, res) => {
    try {
      const Patient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        birthday: req.body.birthday,
        phoneNumber: req.body.phoneNumber,
        emergenyContactName: req.body.emergenyContactName,
        emergencyContactPhoneNumber: req.body.emergencyContactPhoneNumber,
        insuranceCarrier: req.body.insuranceCarrier,
        insuranceId: req.body.insuranceId,
        reasonForVisit: req.body.reasonForVisit,
        primaryPhysician: req.body.primaryPhysician
      };
      const response = await mongodb.getDb().db('MedData').collection('Patient').insertOne(Patient);
      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Error occurred while creating Patient.');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const createSchedule = async (req, res) => {
    try {
      const Schedule = {
        patientFirstName: req.body.patientFirstName,
        patientLastName: req.body.patientLastName,
        doctor: req.body.doctor,
        department: req.body.department,
        date: req.body.date
      };
      const response = await mongodb.getDb().db('MedData').collection('Schedule').insertOne(Schedule);
      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Error occurred while creating Schedule.');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

//////////////////////////////////UPDATE OBJECT//////////////////////////////////////////////
// updateAdmin, updateEmployee, updatePatient, updateSchedule

const updateAdmin = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const Admin = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accessLevel: req.body.accessLevel,
        department: req.body.department
    };
    const response = await mongodb.getDb().db('MedData').collection('Admin').replaceOne({ _id: userId }, Admin);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error occurred while updating Admin.');
    }
    console.log(req.body)
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const Employee = {
        jobTitleName: req.body.jobTitleName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        preferredFullName: req.body.preferredFullName,
        employeeCode: req.body.employeeCode,
        region: req.body.region,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress
    };
    const response = await mongodb.getDb().db('MedData').collection('Employee').replaceOne({ _id: userId }, Employee);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error occurred while updating Employee.');
    }
    console.log(req.body)
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePatient = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const Patient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        birthday: req.body.birthday,
        phoneNumber: req.body.phoneNumber,
        emergenyContactName: req.body.emergenyContactName,
        emergencyContactPhoneNumber: req.body.emergencyContactPhoneNumber,
        insuranceCarrier: req.body.insuranceCarrier,
        insuranceId: req.body.insuranceId,
        reasonForVisit: req.body.reasonForVisit,
        primaryPhysician: req.body.primaryPhysician
      };
      const response = await mongodb.getDb().db('MedData').collection('Patient').replaceOne({ _id: userId }, Patient);
      if (response.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Error occurred while updating Patient.');
      }
      console.log(req.body)
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const updateSchedule = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const Schedule = {
        patientFirstName: req.body.patientFirstName,
        patientLastName: req.body.patientLastName,
        doctor: req.body.doctor,
        department: req.body.department,
        date: req.body.date
      };
      const response = await mongodb.getDb().db('MedData').collection('Schedule').replaceOne({ _id: userId }, Schedule);
      if (response.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Error occurred while updating Schedule.');
      }
      console.log(req.body)
    } catch (err) {
      res.status(500).json(err);
    }
  };

//////////////////////////////////DELETE OBJECT//////////////////////////////////////////////
// deleteAdmin, deleteEmployee, deletePatient, deleteSchedule

const deleteAdmin = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid Admin id to delete a Admin.');
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('MedData').collection('Admin').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Error occurred while deleting Admin');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid Team id to delete a Team.');
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('MedData').collection('Employee').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Error occurred while deleting Employee');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePatient = async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid Admin id to delete a Admin.');
      }
      const userId = new ObjectId(req.params.id);
      const response = await mongodb.getDb().db('MedData').collection('Patient').deleteOne({ _id: userId }, true);
      console.log(response);
      if (response.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(response.error || 'Error occurred while deleting Patient');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const deleteSchedule = async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid Team id to delete a Team.');
      }
      const userId = new ObjectId(req.params.id);
      const response = await mongodb.getDb().db('MedData').collection('Schedule').deleteOne({ _id: userId }, true);
      console.log(response);
      if (response.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(response.error || 'Error occurred while deleting Schedule');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = { getAdminData, getEmployeeData, getPatientData, getScheduleData, getAdminObject, getEmployeeObject, getPatientObject, getScheduleObject, createAdmin, createEmployee, createPatient, createSchedule, updateAdmin, updateEmployee, updatePatient, updateSchedule, deleteAdmin, deleteEmployee, deletePatient, deleteSchedule};