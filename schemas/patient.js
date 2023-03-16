const mongoose = require("mongoose");
const patientSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  stats: {
    address: String,
    pin_code: String,
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    blood_group: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    allergy: {
      type: String,
    },
    bp_trend: [
      {
        high_bp: Number,
        low_bp: Number,
        date: {
          day: {
            type: Number,
          },
          month: {
            type: Number,
          },
          year: {
            type: Number,
          },
        },
      },
    ],
  },
  prev_record: [
    {
      image_url: {
        type: String,
        default: "",
      },
      date: {
        day: {
          type: Number,
        },
        month: {
          type: Number,
        },
        year: {
          type: Number,
        },
      },
      category: {
        type: String,
      },
    },
  ],
  new_records: [
    {
      name_of_doctor: {
        type: String,
      },
      diagnosis: {
        directions: String,
        medicine: [
          {
            name: String,
            dosage: String,
          },
        ],
        medical_condition: String,
      },
      date: {
        day: {
          type: Number,
        },
        month: {
          type: Number,
        },
        year: {
          type: Number,
        },
      },
      download_url: {
        type: String,
        default: "",
      },
    },
  ],
});
module.exports = mongoose.model("Patient", patientSchema);
