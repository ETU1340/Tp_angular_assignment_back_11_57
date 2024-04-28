const Teacher = require("./../model/teacher.model");
const Subject = require("./../model/subject.model");

async function initTeacher() {
  const teachers = [
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Naomi",
        last: "Boyer",
      },
      location: {
        street: {
          number: 7563,
          name: "Avenue des Ternes",
        },
        city: "Amiens",
        state: "Var",
        country: "France",
        postcode: 77660,
        coordinates: {
          latitude: "-16.3105",
          longitude: "31.5999",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "naomi.boyer@example.com",
      login: {
        uuid: "d1dfc00e-c392-4a1b-897b-bad832e88642",
        username: "sadpeacock700",
        password: "jellybea",
        salt: "oJjPeRFJ",
        md5: "726bbf5fe6d9844358a89763ea638f3c",
        sha1: "31901140c38de0ce21e6e8306dcc6d1ab02daaf7",
        sha256:
          "da50912033b16f0f32828a0b8d055f3b0aca1726a9608c4300431b1f771a6e30",
      },
      dob: {
        date: "1992-01-02T16:27:26.807Z",
        age: 32,
      },
      phone: "01-95-54-21-18",
      cell: "06-95-43-70-16",
      picture: {
        large: "https://randomuser.me/api/portraits/women/19.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      },
      nat: "FR",
      isAdmin: true,
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Alejandro",
        last: "Domínguez",
      },
      location: {
        street: {
          number: 8178,
          name: "Calle de La Democracia",
        },
        city: "Albacete",
        state: "Cantabria",
        country: "Spain",
        postcode: 59531,
        coordinates: {
          latitude: "-64.6212",
          longitude: "112.5637",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "alejandro.dominguez@example.com",
      login: {
        uuid: "f975b02a-db58-42c2-8510-37d803881ece",
        username: "brownleopard474",
        password: "scotland",
        salt: "Ie4W6saP",
        md5: "118ca15fe124b48496a5425398ffd0af",
        sha1: "58e24b125db47d6d958a0cb89107ba7fa91e3233",
        sha256:
          "611f6c900aad2249dc5d7449067739b4b5f26c66aa9931886540d4718225eed5",
      },
      dob: {
        date: "1945-05-20T21:25:56.687Z",
        age: 78,
      },
      phone: "999-340-921",
      cell: "619-703-273",
      picture: {
        large: "https://randomuser.me/api/portraits/men/79.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
      },
      nat: "ES",
      isAdmin: false,
    },
    {
      gender: "female",
      name: {
        title: "Mademoiselle",
        first: "Sabine",
        last: "Roy",
      },
      location: {
        street: {
          number: 1983,
          name: "Rue des Écoles",
        },
        city: "Vucherens",
        state: "Zürich",
        country: "Switzerland",
        postcode: 9692,
        coordinates: {
          latitude: "-37.2554",
          longitude: "-179.4322",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "sabine.roy@example.com",
      login: {
        uuid: "ac38605c-ef56-40e4-92fb-153c56af8986",
        username: "blackcat616",
        password: "sounds",
        salt: "NdfUys9e",
        md5: "224988f4dc3d4f3fe8084f9f03132ef4",
        sha1: "2b7917bc7905cf1c243a51c98a01b20ad7540f7b",
        sha256:
          "1fa7c1a8908bda9f72fc379ce92616f73de263c70e9457ecf0b3952695e78a5c",
      },
      dob: {
        date: "2000-10-26T02:45:48.991Z",
        age: 23,
      },
      phone: "076 079 63 98",
      cell: "077 660 42 79",
      picture: {
        large: "https://randomuser.me/api/portraits/women/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
      },
      nat: "CH",
      isAdmin: false,
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Gorimir",
        last: "Palamar",
      },
      location: {
        street: {
          number: 8700,
          name: "Provulok Generala Dovatora",
        },
        city: "Yuzhne",
        state: "Mikolayivska",
        country: "Ukraine",
        postcode: 29232,
        coordinates: {
          latitude: "-73.7367",
          longitude: "-14.9501",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "gorimir.palamar@example.com",
      login: {
        uuid: "3ddfe13b-ef1a-401c-a4f1-d229f055f51c",
        username: "brownelephant824",
        password: "tetsuo",
        salt: "2oM977pt",
        md5: "f9dc01b699947d11c2d67c649f72c9cc",
        sha1: "d04497843c632066b0072ccde0f0f6e2161a05d4",
        sha256:
          "94433ef8a20e13675e90f20167ce29c281ab2f429bd05a7e2b8460aac868f293",
      },
      dob: {
        date: "1958-01-20T05:17:53.409Z",
        age: 66,
      },
      phone: "(066) P29-0864",
      cell: "(099) A16-9163",
      picture: {
        large: "https://randomuser.me/api/portraits/men/26.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
      },
      nat: "UA",
      isAdmin: false,
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Maria",
        last: "Stewart",
      },
      location: {
        street: {
          number: 6121,
          name: "Ormond Quay",
        },
        city: "Kilcoole",
        state: "Tipperary",
        country: "Ireland",
        postcode: 44646,
        coordinates: {
          latitude: "77.8812",
          longitude: "44.8074",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "maria.stewart@example.com",
      login: {
        uuid: "5fe7aa07-3beb-4d5a-b416-0ef04aed4f93",
        username: "goldensnake370",
        password: "longjohn",
        salt: "v28bnyyE",
        md5: "d4b3be58d58d2e968b7feefe4ddf15d1",
        sha1: "ceded29c972fcaff047a2f175d53c080393ee18c",
        sha256:
          "6bbd4221d2f04bb97ed2c8bcec590b4aa161c8a3f6376d2782dc58d9e3dc45af",
      },
      dob: {
        date: "1964-01-21T05:31:49.790Z",
        age: 60,
      },
      phone: "011-652-5019",
      cell: "081-749-1170",
      picture: {
        large: "https://randomuser.me/api/portraits/women/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
      },
      nat: "IE",
      isAdmin: false,
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Lucas",
        last: "Jaimes",
      },
      location: {
        street: {
          number: 4955,
          name: "Eje vial Lucio",
        },
        city: "El Sauz(Villaseñor)",
        state: "Michoacan",
        country: "Mexico",
        postcode: 85521,
        coordinates: {
          latitude: "65.5572",
          longitude: "-94.0201",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "lucas.jaimes@example.com",
      login: {
        uuid: "9fff45e4-4c34-4409-bf0d-97e029f2957c",
        username: "smallleopard917",
        password: "norris",
        salt: "GbrKRGlL",
        md5: "1e707b72f892b75057313eb926e54286",
        sha1: "f2ca31dfb1df2e327fe0b811863eef45e2e9cc46",
        sha256:
          "ec5fe088603c92bb219f1b9bef0ffb6043989f6951bdc6a72b0c1a151c2e515b",
      },
      dob: {
        date: "1986-08-13T00:06:25.440Z",
        age: 37,
      },
      phone: "(633) 035 8678",
      cell: "(623) 321 0589",
      picture: {
        large: "https://randomuser.me/api/portraits/men/50.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
      },
      nat: "MX",
      isAdmin: false,
    },
  ];

  try {
    Teacher.deleteMany({}, (err) => {
      if (err) {
        console.error("Error deleting documents:", err);
      } else {
        console.log("Documents deleted successfully");
      }
    });
    for (const teacherData of teachers) {
      const teacher = new Teacher(teacherData);
      await teacher.save();
    }
    console.log("Teacher inserted successfully.");
  } catch (error) {
    console.error("Error inserting teacher:", error);
  }
}

async function initSubject() {
  const Subjects = [
    {
      title: "NoeJs Express API",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/file-server-2ab8d.appspot.com/o/angular-mbds-10%2Fapi.png?alt=media&token=b58f82ca-8dc4-457c-9f6d-fb65519f6d33",
      teacher: {
        fullName: "Naomi Boyer",
        picture: "https://randomuser.me/api/portraits/women/19.jpg",
      },
    },
    {
      title: "React",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/file-server-2ab8d.appspot.com/o/angular-mbds-10%2Fatom.png?alt=media&token=ebf31142-d71e-4109-9d0a-cb1b6ec84c40",
      teacher: {
        fullName: "Alejandro Domínguez",
        picture: "https://randomuser.me/api/portraits/men/79.jpg",
      },
    },
    {
      title: "Big Data",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/file-server-2ab8d.appspot.com/o/angular-mbds-10%2Fbig-data.png?alt=media&token=4f6c0c5c-ed36-4f3c-a57a-477b92bd8203",
      teacher: {
        fullName: "Sabine Roy",
        picture: "https://randomuser.me/api/portraits/women/32.jpg",
      },
    },
    {
      title: "Cloud",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/file-server-2ab8d.appspot.com/o/angular-mbds-10%2Fdata.png?alt=media&token=f1ea008f-d9b3-47a9-b544-72485ef5a9d1",
      teacher: {
        fullName: "Gorimir Palamar",
        picture: "https://randomuser.me/api/portraits/men/26.jpg",
      },
    },
    {
      title: "Maths",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/file-server-2ab8d.appspot.com/o/angular-mbds-10%2Fmath.png?alt=media&token=642276fb-f1a5-485b-99ce-1c1cf2c15263",
      teacher: {
        fullName: "Maria Stewart",
        picture: "https://randomuser.me/api/portraits/women/32.jpg",
      },
    },
    {
      title: "dDatabase",
      picture:
        "https://firebasestorage.googleapis.com/v0/b/file-server-2ab8d.appspot.com/o/angular-mbds-10%2Fserver.png?alt=media&token=69dc9775-f063-487a-894d-ecc8255726c8",
      teacher: {
        fullName: "Lucas Jaimes",
        picture: "https://randomuser.me/api/portraits/men/50.jpg",
      },
    },
  ];
  try {
    for (const subjectData of Subjects) {
      const subject = new Subject(subjectData);
      await subject.save();
    }
    console.log("Subject inserted successfully.");
  } catch (error) {
    console.error("Error inserting subject:", error);
  }
}

module.exports = {
  initTeacher,
  initSubject,
};
