const validator = require('../helpers/validation');

const saveAdmin = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    accessLevel: 'required|integer',
    department: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveEmployee = (req, res, next) => {
    const validationRule = {
      jobTitleName: 'required|string',
      firstName: 'required|string',
      lastName: 'required|string',
      preferredFullName: 'required|string',
      employeeCode: 'required|string',
      region: 'required|string',
      phoneNumber: 'required|string',
      emailAddress: 'required|email'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

const savePatient = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        address: 'required|string',
        birthday: 'required|string',
        phoneNumber: 'required|string',
        emergenyContactName: 'required|string',
        emergencyContactPhoneNumber: 'required|string',
        insuranceCarrier: 'required|string',
        insuranceId: 'required|string',
        reasonForVisit: 'required|string',
        primaryPhysician: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
        res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
        });
        } else {
        next();
        }
    });
};

const saveSchedule = (req, res, next) => {
    const validationRule = {
        patientFirstName: 'required|string',
        patientLastName: 'required|string',
        doctor: 'required|string',
        department: 'required|string',
        date: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
        res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
        });
        } else {
        next();
        }
    });
};

    
module.exports = {
    saveAdmin,
    saveEmployee,
    savePatient,
    saveSchedule
};