const Patient = require("../models/Patient");

class PatientController {
    async index(req, res) {
        const patient = await Patient.findAll();
        if (patient.length > 0) {
            const data = {
              message: "Show all Resource",
              data: patient,
            };
      
            return res.status(200).json(data);
          } else {
      
          // Jika array kosong
          const data = {
            message: "Resource is empty",
          };
      
          return res.status(200).json(data);
        }
    }

    async findById(req, res) {
        const patient = await Patient.findAll({
          where: {
            id: req.params.id
          }
        });
        if (patient.length > 0) {
          const data = {
            message: `Show detail Resource`,
            data: patient,
          };
          return res.status(200).json(data);
        }
        // Jika data tidak ditemukan
          const data = {
            message: `Resource not found`,
          };
          res.status(404).json(data);
    }

    async store(req, res) {
    
      // destructing
      const { name, phone, address, status, in_date_at } = req.body;
  
      // validasi data 
      if (!name || !phone || !address || !status || !in_date_at) {
        const data = {
          message: "All field must be filled correctly",
        };
  
        return res.status(422).json(data);
      }
  
      // Manggil method create dari model Patient.
      const patient = await Patient.create(req.body);
  
      const data = {
        message: "Resource is added succesfully",
        data: patient,
      };
  
      return res.status(201).json(data);
    }

    async update(req, res) {
      await Patient.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      const id = await Patient.findAll({
        where: {
          id: req.params.id
        }
      });

      if (id.length > 0) {
        const data = {
          message: `Resource successfully updated`,
          data: id,
        };
        return res.status(200).json(data);
      }
      // Jika data tidak ditemukan
        const data = {
          message: `Resource not found`,
        };
        res.status(404).json(data);
    }
    
    async destroy(req, res) {
      const patient = await Patient.destroy({
        where: {
          id: req.params.id
        }
      });

      if (patient) {
        const data = {
          message: `Resource is deleted`
        };
        return res.status(200).json(data);
      }
      
      const data = {
        message: `Resource not found`
      };
      return res.status(404).json(data);
    }

    async positive(req, res) {
      
      const patient = await Patient.findAll({
        where: {
          status: 'Positive'
        }
      });

      if(patient.length > 0) {
        const data = {
          message: `Get positive resource`,
          data: patient
        };
        return res.status(200).json(data);
      }

      const data = {
        message: `Resource not found`
      };
      return res.status(404).json(data);
    }

    async recovered(req, res) {
      
      const patient = await Patient.findAll({
        where: {
          status: 'Recovered'
        }
      });

      if(patient.length > 0) {
        const data = {
          message: `Get positive resource`,
          data: patient
        };
        return res.status(200).json(data);
      }

      const data = {
        message: `Resource not found`
      };
      return res.status(404).json(data);
    }

    async dead(req, res) {
      
      const patient = await Patient.findAll({
        where: {
          status: 'Dead'
        }
      });

      if(patient.length > 0) {
        const data = {
          message: `Get dead resource`,
          data: patient
        };
        return res.status(200).json(data);
      }

      const data = {
        message: `Resource not found`
      };
      return res.status(404).json(data);
    }

    async search(req, res) {

      const { name } = req.params;
      
      const patient = await Patient.findAll({
        where: {
          name: name
        }
      });

      if(patient.length > 0) {
        const data = {
          message: `Get searched resource`,
          data: patient
        };
        return res.status(200).json(data);
      }

      const data = {
        message: `Resource not found`
      };
      return res.status(404).json(data);
    }
}

const object = new PatientController;

module.exports = object;