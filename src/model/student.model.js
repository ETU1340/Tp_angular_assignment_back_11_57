let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let StudentSchema = new Schema({
  gender: {
    type: String,
    required: true,
  },
  name: {
    title: {
      type: String,
      required: true,
    },
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  location: {
    street: {
      number: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    coordinates: {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      },
    },
    timezone: {
      offset: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
  email: {
    type: String,
    required: true,
  },
  login: {
    uuid: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    md5: {
      type: String,
      required: true,
    },
    sha1: {
      type: String,
      required: true,
    },
    sha256: {
      type: String,
      required: true,
    },
  },
  dob: {
    date: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  registered: {
    date: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  phone: {
    type: String,
    required: true,
  },
  cell: {
    type: String,
    required: true,
  },
  picture: {
    large: {
      type: String,
      required: true,
    },
    medium: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  nat: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("students", StudentSchema);
