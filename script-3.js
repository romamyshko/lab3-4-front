// ЗАВДАННЯ 1
const randomUserMock = [
  {
    gender: "male",
    name: { title: "Mr", first: "Norbert", last: "Weishaupt" },
    location: {
      street: { number: 5597, name: "Mittelstraße" },
      city: "Rhön-Grabfeld",
      state: "Mecklenburg-Vorpommern",
      country: "Germany",
      postcode: 52640,
      coordinates: { latitude: "-42.1817", longitude: "-152.1685" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
    },
    email: "norbert.weishaupt@example.com",
    login: {
      uuid: "bfe8ab77-36f2-4853-973a-c3241cfd3e18",
      username: "brownmouse804",
      password: "inside",
      salt: "nz7kIxow",
      md5: "e5a4c7f88c23a92ff703e79b95080c2b",
      sha1: "5cf24c4fc40e3d7ca2d626f0c26670a2c834f739",
      sha256:
        "150c20b6af123eb7603ebb80ba42301465aea1f9df012680c5a6e17c6d5f46b5",
    },
    dob: { date: "1956-12-23T19:09:19.602Z", age: 65 },
    registered: { date: "2004-09-01T12:10:49.583Z", age: 17 },
    phone: "123-456-7890",
    cell: "0179-1899833",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Claude", last: "Payne" },
    location: {
      street: { number: 939, name: "Church Road" },
      city: "Skerries",
      state: "Longford",
      country: "Ireland",
      postcode: 64451,
      coordinates: { latitude: "-81.9272", longitude: "179.5544" },
      timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" },
    },
    email: "claude.payne@example.com",
    login: {
      uuid: "f2deed66-a32b-4011-9995-bc18f33084c6",
      username: "orangefish809",
      password: "1234qwer",
      salt: "uUYfF7nl",
      md5: "777720d4bf06d66800efa8950d2f5439",
      sha1: "a431174184fd105768f4852541dc31dc2d421fc0",
      sha256:
        "bf9cb533527bf2679a77cc4913577badecebdc08b6a3c2b260027a33633fd5a5",
    },
    dob: { date: "1966-07-31T21:57:32.876Z", age: 55 },
    registered: { date: "2004-06-20T11:20:57.243Z", age: 17 },
    phone: "123-456-7890",
    cell: "081-533-7908",
    id: { name: "PPS", value: "2340626T" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/40.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
    },
    nat: "IE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Curtis", last: "Mendoza" },
    location: {
      street: { number: 6483, name: "First Street" },
      city: "Bowral",
      state: "Western Australia",
      country: "Australia",
      postcode: 5234,
      coordinates: { latitude: "-66.8661", longitude: "-35.7288" },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "curtis.mendoza@example.com",
    login: {
      uuid: "f99d4fc3-855c-4f0e-b561-a390039fa42e",
      username: "crazyelephant618",
      password: "lback",
      salt: "8gqeuk66",
      md5: "6e3848bb0013e407e68875188c89f9d4",
      sha1: "2fdfd5f5dbf305a6036838e151326308cbfbc33c",
      sha256:
        "928e051ba3bd22a59a65a05c3d02d87fae2681e15ec50a55fc46794772f1bb13",
    },
    dob: { date: "1975-04-02T02:31:00.130Z", age: 46 },
    registered: { date: "2018-08-09T16:52:29.559Z", age: 3 },
    phone: "02-6397-0344",
    cell: "0497-219-830",
    id: { name: "TFN", value: "505504341" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
    },
    nat: "AU",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Darren", last: "Wood" },
    location: {
      street: { number: 5066, name: "Miller Ave" },
      city: "Surrey",
      state: "Alabama",
      country: "United States",
      postcode: 52941,
      coordinates: { latitude: "79.5827", longitude: "164.6189" },
      timezone: { offset: "-9:00", description: "Alaska" },
    },
    email: "darren.wood@example.com",
    login: {
      uuid: "14152ee8-4399-4e03-a6ec-1567ec42fd61",
      username: "greenkoala817",
      password: "caramel",
      salt: "dBI0MrHz",
      md5: "ffa5075e20a0fb67684c2042dbfaa2a5",
      sha1: "b9e43ddfaa2bfb06b42280bf8a26728f6e6d24ea",
      sha256:
        "6f8ab1df1a442044a0a26f0892f7a672945ab95ec8a6c102d2a774ea57fded88",
    },
    dob: { date: "1974-11-15T10:40:20.306Z", age: 47 },
    registered: { date: "2016-12-29T05:41:51.796Z", age: 5 },
    phone: "(720)-981-1014",
    cell: "(549)-096-3862",
    id: { name: "SSN", value: "769-88-9330" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
    },
    nat: "US",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Elias", last: "Tikkanen" },
    location: {
      street: { number: 8511, name: "Hämeenkatu" },
      city: "Nousiainen",
      state: "Ostrobothnia",
      country: "Finland",
      postcode: 67794,
      coordinates: { latitude: "1.4218", longitude: "-169.0904" },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "elias.tikkanen@example.com",
    login: {
      uuid: "88065628-f73f-4188-a070-78fa486357c8",
      username: "ticklishpeacock599",
      password: "swordfish",
      salt: "QL8uU8Ci",
      md5: "1fd332481474935c7d8f5262cae87865",
      sha1: "4bb66c4c823b66cbbf30ced32575570b06e57b2a",
      sha256:
        "94a4a049fdf0498c298e83b22a51b5a336c9751c6a0d83dafd9f13915c15ccc0",
    },
    dob: { date: "1985-09-28T12:59:41.244Z", age: 36 },
    registered: { date: "2011-11-12T05:35:59.336Z", age: 10 },
    phone: "04-531-159",
    cell: "047-685-48-86",
    id: { name: "HETU", value: "NaNNA013undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Tessa", last: "Möllmann" },
    location: {
      street: { number: 3702, name: "Gartenweg" },
      city: "Hohenstein-Ernstthal",
      state: "Bayern",
      country: "Germany",
      postcode: 87827,
      coordinates: { latitude: "61.8456", longitude: "67.6500" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "tessa.mollmann@example.com",
    login: {
      uuid: "c40fd210-2787-4f0e-a5eb-3cafecf54076",
      username: "angrybutterfly143",
      password: "salomon",
      salt: "fXqngwS1",
      md5: "47f2df267eae3fb9c49bc24fabf4e0f6",
      sha1: "9c03e07bbee8a47a3edff4cdcb99a98eb35a42ba",
      sha256:
        "211f9a5feafbad5ff3fad4335ad212e7680b0324dfb12965e9ed0bbea553c407",
    },
    dob: { date: "1986-05-08T09:19:12.021Z", age: 35 },
    registered: { date: "2010-11-11T20:29:09.690Z", age: 11 },
    phone: "0358-7950096",
    cell: "0174-4297315",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Maxine", last: "James" },
    location: {
      street: { number: 408, name: "Samaritan Dr" },
      city: "Brisbane",
      state: "Northern Territory",
      country: "Australia",
      postcode: 797,
      coordinates: { latitude: "-41.1464", longitude: "142.0238" },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "maxine.james@example.com",
    login: {
      uuid: "bd388aa9-f5cf-472e-9c8c-85486119ecad",
      username: "crazywolf106",
      password: "jack",
      salt: "c8wqqkpf",
      md5: "db2be13fdeee1ac99afd2d5c1599f714",
      sha1: "e636cf16e0271a2e4c3c2dd69106df5d520545e3",
      sha256:
        "f288f89234645f4093dce1be9ae117ade786fdf4c6abd12194b425e2ad943356",
    },
    dob: { date: "1974-08-10T01:12:04.592Z", age: 47 },
    registered: { date: "2003-04-05T17:59:08.752Z", age: 18 },
    phone: "02-7976-3904",
    cell: "0449-588-001",
    id: { name: "TFN", value: "386597027" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/94.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
    },
    nat: "AU",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Mestan", last: "Pektemek" },
    location: {
      street: { number: 9264, name: "Necatibey Cd" },
      city: "İstanbul",
      state: "Karaman",
      country: "Turkey",
      postcode: 81972,
      coordinates: { latitude: "16.6664", longitude: "-0.4745" },
      timezone: {
        offset: "+8:00",
        description: "Beijing, Perth, Singapore, Hong Kong",
      },
    },
    email: "mestan.pektemek@example.com",
    login: {
      uuid: "dd90244b-e9fa-4556-9d1c-4315bdc010c7",
      username: "browngoose703",
      password: "success1",
      salt: "HqT3s4JX",
      md5: "aac57f7760b5648410bfd711f5cf93a0",
      sha1: "cc540165fcbc8249352d1fd2dac78644262e77a2",
      sha256:
        "c2ef6fc34ea1783353c395a09f8f65684dcbe5baa66677d38078ebd85d56edd6",
    },
    dob: { date: "1975-08-20T23:05:13.239Z", age: 46 },
    registered: { date: "2019-04-07T08:47:38.424Z", age: 2 },
    phone: "(038)-418-1407",
    cell: "(961)-255-4503",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
    },
    nat: "TR",
  },
  {
    gender: "male",
    name: { title: "Monsieur", first: "Viktor", last: "Legrand" },
    location: {
      street: {
        number: 2508,
        name: "Place de L'Abbé-Georges-Hénocque",
      },
      city: "Gy",
      state: "Solothurn",
      country: "Switzerland",
      postcode: 4919,
      coordinates: { latitude: "-73.3324", longitude: "-63.8552" },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "viktor.legrand@example.com",
    login: {
      uuid: "8cbf901f-a763-4fb4-a90b-a73a0b3490f5",
      username: "ticklishrabbit934",
      password: "mobile",
      salt: "ekpEgDHE",
      md5: "da97686cb0e79abeecf43a51b7af1e23",
      sha1: "6269704b556f3dd0935fd3de6ec817c9dd6e8f88",
      sha256:
        "c4a5068d2b31e0fbc499ef8d286dcd75e6ade918f8ed5300146097f6f35f3f6c",
    },
    dob: { date: "1994-07-04T12:08:05.427Z", age: 27 },
    registered: { date: "2008-03-26T05:07:43.196Z", age: 13 },
    phone: "077 863 38 70",
    cell: "079 039 17 19",
    id: { name: "AVS", value: "756.2023.5649.57" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Deniz", last: "Yıldırım" },
    location: {
      street: { number: 2460, name: "Filistin Cd" },
      city: "Bolu",
      state: "Ardahan",
      country: "Turkey",
      postcode: 12234,
      coordinates: { latitude: "-42.0389", longitude: "-86.4817" },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "deniz.yildirim@example.com",
    login: {
      uuid: "23174f08-0f4c-4eba-9f06-6f9cc0015ea8",
      username: "ticklishduck876",
      password: "temp",
      salt: "MyR9iFxx",
      md5: "9804ccf57b8828466e7bac4e264da097",
      sha1: "a173efe6e94e858f44f9a4e3eabd8b9a282b05f9",
      sha256:
        "125d12981fb45ef2980788b8af13f433434e1433ea5bcce3ac63e5df622cfe4c",
    },
    dob: { date: "1981-12-12T17:49:30.416Z", age: 40 },
    registered: { date: "2011-07-08T06:17:24.923Z", age: 10 },
    phone: "(602)-541-0650",
    cell: "(755)-905-0921",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/99.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Matilda", last: "Aalto" },
    location: {
      street: { number: 5102, name: "Hämeentie" },
      city: "Tornio",
      state: "Central Ostrobothnia",
      country: "Finland",
      postcode: 88244,
      coordinates: { latitude: "79.9136", longitude: "83.6836" },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "matilda.aalto@example.com",
    login: {
      uuid: "04b0ed9a-8de8-46dc-84be-4e9cd35a9fb0",
      username: "blackmouse948",
      password: "pokey",
      salt: "T4HRKqy8",
      md5: "a65cf121d950a742dd9f4586fd464613",
      sha1: "eadc224db68920a0cc730eb18cfa6ab0114f9d33",
      sha256:
        "4bdbdbf588aa913f416eed3bbf8ba55704a89c75591be7206722bacad8f3c692",
    },
    dob: { date: "1995-09-12T20:08:25.350Z", age: 26 },
    registered: { date: "2016-03-13T20:50:36.903Z", age: 5 },
    phone: "06-843-874",
    cell: "042-102-12-42",
    id: { name: "HETU", value: "NaNNA760undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Lucy", last: "Walker" },
    location: {
      street: { number: 168, name: "Devon Street" },
      city: "Nelson",
      state: "Southland",
      country: "New Zealand",
      postcode: 82655,
      coordinates: { latitude: "-27.4724", longitude: "132.5136" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "lucy.walker@example.com",
    login: {
      uuid: "62d270bf-a138-4878-8524-f8c435ae1247",
      username: "smallmouse861",
      password: "coral",
      salt: "5Z1OOC3c",
      md5: "4f616b8380708546136c758b7f02c23e",
      sha1: "d56ebc0641e92b694de2809b24d047fc3606249b",
      sha256:
        "11ff85f8171ea5da1f1997709d28b0a43deac6a2e9279e1970039d92be5cae40",
    },
    dob: { date: "1967-07-08T22:51:02.434Z", age: 54 },
    registered: { date: "2002-11-23T23:33:32.082Z", age: 19 },
    phone: "(018)-588-0617",
    cell: "(608)-820-9479",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Antonio", last: "Gil" },
    location: {
      street: { number: 9565, name: "Calle de Alcalá" },
      city: "Cuenca",
      state: "Castilla la Mancha",
      country: "Spain",
      postcode: 91659,
      coordinates: { latitude: "-71.7038", longitude: "-10.4243" },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "antonio.gil@example.com",
    login: {
      uuid: "879dcee5-868d-4a55-9b0f-04f3c2f30458",
      username: "organickoala351",
      password: "cccccc",
      salt: "wAVO9OPb",
      md5: "3dea9043473fb4822582a0b2ad673e77",
      sha1: "71423d900d191c9f09471edce4c061047039271e",
      sha256:
        "542de3e0e01ceaadd753da8960018458bb6b69abb09b48d2b32f8e7fbc878126",
    },
    dob: { date: "1974-05-10T02:24:28.197Z", age: 47 },
    registered: { date: "2003-09-11T19:00:02.000Z", age: 18 },
    phone: "921-757-670",
    cell: "687-905-929",
    id: { name: "DNI", value: "63719733-L" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "August", last: "Bertheussen" },
    location: {
      street: { number: 2984, name: "Granittveien" },
      city: "Arendal",
      state: "Nord-Trøndelag",
      country: "Norway",
      postcode: "8518",
      coordinates: { latitude: "25.1087", longitude: "-0.6986" },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "august.bertheussen@example.com",
    login: {
      uuid: "e8be13ec-392e-4096-bf28-66ed3db8fb04",
      username: "greenbutterfly634",
      password: "huan",
      salt: "OmTjVDaO",
      md5: "adde0bce18700199d67661aa8c7fdc66",
      sha1: "a5b46da93996dcc147f037b5c246211d461e80a4",
      sha256:
        "b8456cc083f487abcd273e5e2ed0112e58889832c0dd28172d0ba30daaf27836",
    },
    dob: { date: "1956-04-28T08:50:01.255Z", age: 65 },
    registered: { date: "2007-12-22T23:23:48.998Z", age: 14 },
    phone: "36513745",
    cell: "40455724",
    id: { name: "FN", value: "28045612378" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/87.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
    },
    nat: "NO",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Lana", last: "Ottesen" },
    location: {
      street: { number: 557, name: "Ålmoveien" },
      city: "Sand",
      state: "Description",
      country: "Norway",
      postcode: "0576",
      coordinates: { latitude: "4.9713", longitude: "-14.3459" },
      timezone: { offset: "-10:00", description: "Hawaii" },
    },
    email: "lana.ottesen@example.com",
    login: {
      uuid: "20a90c99-f080-4e41-be80-dc84e1dbe8b9",
      username: "ticklishmeercat290",
      password: "shiloh",
      salt: "69CKmE1k",
      md5: "53cff3dde36ad4dc4bdaae95ea60c3cc",
      sha1: "30d1e1ac753946eaf57d6b6c9fc953a53beba7f2",
      sha256:
        "1c25e751c9477da82ad5025487a4bcc7bc7c57b70e5cd53e876e1d6ca317e718",
    },
    dob: { date: "1952-03-09T08:28:33.451Z", age: 69 },
    registered: { date: "2013-05-11T09:32:31.190Z", age: 8 },
    phone: "76565355",
    cell: "46390572",
    id: { name: "FN", value: "09035238279" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/87.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
    },
    nat: "NO",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Adeline", last: "Weigand" },
    location: {
      street: { number: 5217, name: "Kirchstraße" },
      city: "Fürth",
      state: "Mecklenburg-Vorpommern",
      country: "Germany",
      postcode: 80819,
      coordinates: { latitude: "-41.5020", longitude: "-36.1579" },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "adeline.weigand@example.com",
    login: {
      uuid: "fb2affcd-9e75-4dc7-b113-1364ca0d99c3",
      username: "blacksnake238",
      password: "878787",
      salt: "FHzZ22ng",
      md5: "0cd2d1c5396fb24e34ae913f695c202b",
      sha1: "231dcbeee6ea8fde0d0a34852669532de01a1b82",
      sha256:
        "c48793df9169211ffa9ac864b8b9256f8078819271865928b32a82f78a5f535b",
    },
    dob: { date: "1971-06-08T09:57:13.975Z", age: 50 },
    registered: { date: "2008-09-04T08:52:53.199Z", age: 13 },
    phone: "0596-1926541",
    cell: "0170-0909811",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/43.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Oona", last: "Kokko" },
    location: {
      street: { number: 2399, name: "Itsenäisyydenkatu" },
      city: "Iisalmi",
      state: "Central Ostrobothnia",
      country: "Finland",
      postcode: 71206,
      coordinates: { latitude: "28.3369", longitude: "-173.9575" },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "oona.kokko@example.com",
    login: {
      uuid: "38acedda-a7e0-44c9-9601-12d8de0a2ca0",
      username: "silverfish264",
      password: "spartans",
      salt: "2D7awnZM",
      md5: "aa74499546e936547485b33982246e31",
      sha1: "94c5ca3a5395c4c931ff7d8fc73a4699ad60284d",
      sha256:
        "52559bbb2ab8b897ed0ab7f516dc91215f0bb05ccbb613f7407491c865c6ba04",
    },
    dob: { date: "1959-03-24T21:00:30.775Z", age: 62 },
    registered: { date: "2016-05-08T10:11:55.005Z", age: 5 },
    phone: "07-130-008",
    cell: "044-721-80-27",
    id: { name: "HETU", value: "NaNNA402undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Emil", last: "Madsen" },
    location: {
      street: { number: 1503, name: "Præstevej" },
      city: "Kongsvinger",
      state: "Sjælland",
      country: "Denmark",
      postcode: 65053,
      coordinates: { latitude: "60.3062", longitude: "138.5907" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "emil.madsen@example.com",
    login: {
      uuid: "41e7be55-258f-4434-a56c-afaa03964812",
      username: "sadpanda411",
      password: "thecrow",
      salt: "LIpuarZf",
      md5: "d29a1f7b867643687c28ef2f06a499c3",
      sha1: "9d16103c993c1f5066629089293e355ee0180419",
      sha256:
        "47cdbedc41b73bf794ae57029dd92b936e494a4217db5f3d53bad922bd02f097",
    },
    dob: { date: "1993-12-30T02:54:32.845Z", age: 28 },
    registered: { date: "2015-08-05T09:02:51.129Z", age: 6 },
    phone: "33373580",
    cell: "23921183",
    id: { name: "CPR", value: "301293-2636" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/40.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Mario", last: "Saez" },
    location: {
      street: { number: 4459, name: "Calle de La Almudena" },
      city: "Gandía",
      state: "Cataluña",
      country: "Spain",
      postcode: 49123,
      coordinates: { latitude: "-46.9749", longitude: "-126.6882" },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "mario.saez@example.com",
    login: {
      uuid: "b8c9c0eb-f09f-43fa-ac2e-b556c311f440",
      username: "bluebutterfly518",
      password: "100000",
      salt: "L369lyTA",
      md5: "0555a19d343478f782bdc13abbf09794",
      sha1: "a2b561c512465a573655a713210e030379d777e8",
      sha256:
        "90eab29d4d2fac03a900adc96b77dfe47121f578ebade054b85717b226c4ff12",
    },
    dob: { date: "1985-11-01T17:08:44.642Z", age: 36 },
    registered: { date: "2016-11-12T22:02:53.487Z", age: 5 },
    phone: "907-066-616",
    cell: "672-591-124",
    id: { name: "DNI", value: "04671126-X" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "آدرینا", last: "صدر" },
    location: {
      street: { number: 4442, name: "موسیوند" },
      city: "ارومیه",
      state: "کرمان",
      country: "Iran",
      postcode: 48391,
      coordinates: { latitude: "-5.2616", longitude: "-95.9339" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "adryn.sdr@example.com",
    login: {
      uuid: "a3b2c70a-7519-435d-8b81-6b7910798c37",
      username: "organicleopard141",
      password: "admin",
      salt: "rPRrv0qf",
      md5: "8c2908725310eeb7eb0f4a89a59c89b5",
      sha1: "4675141616b6d5818aba8cc848fad0864ba3a963",
      sha256:
        "d36ece075761beb0fd2cbe3a8d4bf7f992b42c29ceb3be4be804a0a23bfa3001",
    },
    dob: { date: "1977-01-03T08:07:23.555Z", age: 44 },
    registered: { date: "2019-06-23T09:48:40.645Z", age: 2 },
    phone: "008-22619690",
    cell: "0909-246-6237",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Joe", last: "Mitchell" },
    location: {
      street: { number: 9327, name: "Lakeview St" },
      city: "Norwalk",
      state: "New Jersey",
      country: "United States",
      postcode: 83924,
      coordinates: { latitude: "45.4790", longitude: "143.8132" },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "joe.mitchell@example.com",
    login: {
      uuid: "cb8a310f-a3ee-4f79-b7d2-cd932aecb8a8",
      username: "blackswan266",
      password: "charisma",
      salt: "HT8fnovJ",
      md5: "f545a06c74876f87573873286c89ad1d",
      sha1: "1bbd06fe67a3a74b4fb6be5db61ccb7657b00757",
      sha256:
        "f96fc3e481adfc423c381a525cc5a6125e84cc230d235eea3e5176a9a66f9d46",
    },
    dob: { date: "1948-07-07T06:09:20.491Z", age: 73 },
    registered: { date: "2017-01-14T23:50:33.708Z", age: 4 },
    phone: "(210)-514-4881",
    cell: "(028)-696-2120",
    id: { name: "SSN", value: "273-52-2514" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/78.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Maeva", last: "Walker" },
    location: {
      street: { number: 1052, name: "Arctic Way" },
      city: "Cumberland",
      state: "Saskatchewan",
      country: "Canada",
      postcode: "Z6T 3E6",
      coordinates: { latitude: "-31.2136", longitude: "16.8355" },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "maeva.walker@example.com",
    login: {
      uuid: "96a5f09b-4314-4f0e-8788-47c886ddd310",
      username: "blackfrog545",
      password: "wutang",
      salt: "SUB2OQvB",
      md5: "107f44d918d22c68cae2e84dfb4cb168",
      sha1: "36f844ce23ac44e1eacd19e05be1f8527a53c9e1",
      sha256:
        "90d5acef6b726f7ba054cc2eaf24519e048ed0541237a689d0a9d9ca6a85803e",
    },
    dob: { date: "1963-04-17T16:40:45.773Z", age: 58 },
    registered: { date: "2004-06-14T17:53:20.602Z", age: 17 },
    phone: "636-857-3801",
    cell: "385-677-6520",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Tim", last: "Roy" },
    location: {
      street: { number: 3173, name: "Rue Saint-Georges" },
      city: "Créteil",
      state: "Haut-Rhin",
      country: "France",
      postcode: 65772,
      coordinates: { latitude: "-63.5272", longitude: "115.8694" },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "tim.roy@example.com",
    login: {
      uuid: "27578ea2-f4a9-4720-8f1f-d227ab527342",
      username: "heavyleopard665",
      password: "seneca",
      salt: "BVML7Gft",
      md5: "c90f2eeabd5eb212d4c4581823ac4718",
      sha1: "ce3cc6ae7c7a9f6b344cb9b083705f8d0a718a1e",
      sha256:
        "7f2bbcabcd444ad0fca0f783d513352cd275d056efcc1442f258821fa3782503",
    },
    dob: { date: "1983-09-20T17:50:52.872Z", age: 38 },
    registered: { date: "2017-07-12T16:14:30.322Z", age: 4 },
    phone: "05-70-80-69-86",
    cell: "06-38-09-51-89",
    id: { name: "INSEE", value: "1NNaN94113447 74" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    },
    nat: "FR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Tristan", last: "Petersen" },
    location: {
      street: { number: 1994, name: "Strandengen" },
      city: "Stenderup",
      state: "Syddanmark",
      country: "Denmark",
      postcode: 88496,
      coordinates: { latitude: "-77.4835", longitude: "64.8261" },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "tristan.petersen@example.com",
    login: {
      uuid: "d7f053da-dc42-44cf-a161-10d7c42e13b6",
      username: "orangeostrich252",
      password: "customer",
      salt: "Ra5J9sYc",
      md5: "bc403ba975333724792edabdc604c0e1",
      sha1: "63989e719f436ff6341dab19159562575555761a",
      sha256:
        "04aa7449271a5e3b4dcc23943eec9bd81e437cae974ef025ac189164d14cf10a",
    },
    dob: { date: "1950-11-26T15:19:28.764Z", age: 71 },
    registered: { date: "2008-05-04T12:00:05.860Z", age: 13 },
    phone: "61523239",
    cell: "11842563",
    id: { name: "CPR", value: "261150-5443" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/97.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Kristina", last: "Skjold" },
    location: {
      street: { number: 8951, name: "Pasopveien" },
      city: "Kolnes",
      state: "Vest-Agder",
      country: "Norway",
      postcode: "4085",
      coordinates: { latitude: "-76.9661", longitude: "-95.2957" },
      timezone: { offset: "-2:00", description: "Mid-Atlantic" },
    },
    email: "kristina.skjold@example.com",
    login: {
      uuid: "534752a6-d998-4350-8d1e-bb5ec6545c59",
      username: "silvercat494",
      password: "mayday",
      salt: "eSP4csaB",
      md5: "989b8d9617163ff0e517eaf6c1a6fd69",
      sha1: "86816882897a0bd12ba52f0ffd09064a8a8dfab6",
      sha256:
        "730f78d7fe634dcda6b2d267c73073698d88da33b7cab483810cc69c893dd156",
    },
    dob: { date: "1972-11-21T18:04:12.259Z", age: 49 },
    registered: { date: "2007-06-03T19:46:15.377Z", age: 14 },
    phone: "71350190",
    cell: "90523357",
    id: { name: "FN", value: "21117225647" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/92.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg",
    },
    nat: "NO",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "آراد", last: "زارعی" },
    location: {
      street: { number: 9089, name: "شهید آرش مهر" },
      city: "اردبیل",
      state: "کرمان",
      country: "Iran",
      postcode: 84902,
      coordinates: { latitude: "57.8145", longitude: "-146.6983" },
      timezone: { offset: "+5:45", description: "Kathmandu" },
    },
    email: "ard.zraay@example.com",
    login: {
      uuid: "35e331c5-4b69-462c-9477-4669eef26b60",
      username: "redbutterfly574",
      password: "maxime",
      salt: "3QQqBnej",
      md5: "b0ddc2e3553a6eea6378b5b00956fdad",
      sha1: "180db2865049a354dd27b36c2269a7c778e8b83e",
      sha256:
        "127768995f929ca6b1ac24ada5c4e43a548371cdb5b1791efbb0586ff05c4161",
    },
    dob: { date: "1989-02-12T18:41:45.531Z", age: 32 },
    registered: { date: "2004-08-25T10:18:42.677Z", age: 17 },
    phone: "029-39614780",
    cell: "0937-316-9404",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "آوینا", last: "نجاتی" },
    location: {
      street: { number: 2278, name: "فلسطین" },
      city: "قائم‌شهر",
      state: "مرکزی",
      country: "Iran",
      postcode: 21415,
      coordinates: { latitude: "-51.3076", longitude: "-146.1861" },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "awyn.njty@example.com",
    login: {
      uuid: "7cd81b1a-aa2b-4b48-b124-606ac224bebf",
      username: "bluegorilla782",
      password: "sauron",
      salt: "niDSSeaU",
      md5: "56ddd6ef151244b4b8d5bbcfed141c56",
      sha1: "93ee7d5503c49ff558860b10bd9aac66bf0d9a74",
      sha256:
        "dfb6570c4b725f4313a827db90006ee1338fb99225f87e37508f06e5f28b3f41",
    },
    dob: { date: "1968-11-13T05:41:01.302Z", age: 53 },
    registered: { date: "2011-03-13T10:12:08.860Z", age: 10 },
    phone: "049-44129055",
    cell: "0984-409-8781",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Ronja", last: "Marttila" },
    location: {
      street: { number: 1821, name: "Satakennankatu" },
      city: "Kotka",
      state: "Ostrobothnia",
      country: "Finland",
      postcode: 52545,
      coordinates: { latitude: "-88.5101", longitude: "-32.2106" },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "ronja.marttila@example.com",
    login: {
      uuid: "727a1c64-ab45-4f41-9980-9f81e43a2faf",
      username: "goldensnake499",
      password: "2727",
      salt: "FkROdNBb",
      md5: "aa720232488f868c8d3c099883ff9b1a",
      sha1: "462197855cc567b126504fd177241969e19bdb2e",
      sha256:
        "30c290547ef87daab62b49f1257600f6dd940801d5334873a3c176cbb73daf59",
    },
    dob: { date: "1946-02-27T02:50:54.842Z", age: 75 },
    registered: { date: "2013-07-17T08:46:16.692Z", age: 8 },
    phone: "04-421-028",
    cell: "043-393-03-32",
    id: { name: "HETU", value: "NaNNA728undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Elcke", last: "Graumans" },
    location: {
      street: { number: 5424, name: "Doarpswei" },
      city: "Eemshaven",
      state: "Groningen",
      country: "Netherlands",
      postcode: 79822,
      coordinates: { latitude: "-73.7593", longitude: "-162.6167" },
      timezone: { offset: "-2:00", description: "Mid-Atlantic" },
    },
    email: "elcke.graumans@example.com",
    login: {
      uuid: "f37aa35c-f689-4ee6-99d8-bf1335932d21",
      username: "tinyfrog736",
      password: "blue42",
      salt: "gEQgrPXQ",
      md5: "f8e30ad2f07aca30b75ed1781bc98a5c",
      sha1: "0286ded4a32d19e5ac381b88e64036b303159e03",
      sha256:
        "7e74461afa5cc9002ee1c3ac25f948549fc09fa3546f38039854f0d103c95aa8",
    },
    dob: { date: "1987-12-26T20:55:07.940Z", age: 34 },
    registered: { date: "2002-11-10T00:07:46.970Z", age: 19 },
    phone: "(938)-352-7475",
    cell: "(697)-629-3170",
    id: { name: "BSN", value: "26586375" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Sigrid", last: "Sviggum" },
    location: {
      street: { number: 8019, name: "Lerdalsveien" },
      city: "Ramsøy",
      state: "Hordaland",
      country: "Norway",
      postcode: "5904",
      coordinates: { latitude: "62.3170", longitude: "102.2678" },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "sigrid.sviggum@example.com",
    login: {
      uuid: "3308266e-d303-4daf-a423-03b68339272b",
      username: "silverleopard489",
      password: "porsche9",
      salt: "TTODLzXU",
      md5: "866206c778c5a0b8b99bbc34414a5223",
      sha1: "f76487fb0f7f63de1f17666cbb0ff5e834fa1d54",
      sha256:
        "63f625e2a3737d4162b4ae0882178a6901caf39f1085674888d0eaeaa2007587",
    },
    dob: { date: "1993-10-03T01:40:10.720Z", age: 28 },
    registered: { date: "2008-07-17T07:10:21.274Z", age: 13 },
    phone: "32189027",
    cell: "97814009",
    id: { name: "FN", value: "03109315264" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
    nat: "NO",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Emil", last: "Møller" },
    location: {
      street: { number: 183, name: "Irisvej" },
      city: "Ansager",
      state: "Danmark",
      country: "Denmark",
      postcode: 49442,
      coordinates: { latitude: "44.9585", longitude: "152.8104" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "emil.moller@example.com",
    login: {
      uuid: "79123d1b-c6da-4a57-b257-52aa5ac8b6e1",
      username: "purplerabbit361",
      password: "message",
      salt: "GwllENgQ",
      md5: "c8a3f4a68df4febf988492d47ba58e9e",
      sha1: "2cae23fb7e96b5cc71bf0a6dab5a481ef91191c4",
      sha256:
        "57cc0c099649e4d308447a565e6504d1df558d84ed0dc2ff78fb7e504f057e5f",
    },
    dob: { date: "1954-07-15T07:55:58.285Z", age: 67 },
    registered: { date: "2012-07-20T14:46:53.999Z", age: 9 },
    phone: "17760878",
    cell: "65898767",
    id: { name: "CPR", value: "150754-2317" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Darrell", last: "Dunne" },
    location: {
      street: { number: 4537, name: "New Road" },
      city: "Tullow",
      state: "Wexford",
      country: "Ireland",
      postcode: 39242,
      coordinates: { latitude: "-68.2633", longitude: "-70.6858" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "darrell.dunne@example.com",
    login: {
      uuid: "e9abca83-1fbc-4629-b7ef-a5f4596c99f8",
      username: "happytiger152",
      password: "bluemoon",
      salt: "ITiYnJAD",
      md5: "461f22ec3f25f361408c868f605465c6",
      sha1: "6df198052e341d50ff724b8926c5039eda28ba54",
      sha256:
        "8be8659c247ead3f01fb09001eeb426d669626b1458249c85b7f3520021a7d82",
    },
    dob: { date: "1997-11-21T06:35:55.528Z", age: 24 },
    registered: { date: "2018-11-04T20:11:55.803Z", age: 3 },
    phone: "071-488-9968",
    cell: "081-201-9167",
    id: { name: "PPS", value: "7847438T" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/36.jpg",
    },
    nat: "IE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Jordan", last: "Vidal" },
    location: {
      street: { number: 5479, name: "Avenue Debrousse" },
      city: "Aubervilliers",
      state: "Hauts-de-Seine",
      country: "France",
      postcode: 19716,
      coordinates: { latitude: "-74.1635", longitude: "-67.0556" },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "jordan.vidal@example.com",
    login: {
      uuid: "c78abd3f-c1c0-4aed-b6e1-f92dee622676",
      username: "bluemouse816",
      password: "skyline",
      salt: "BPcSfJuI",
      md5: "07de66e955d928257c64e923190e17e1",
      sha1: "d3ebc8186d53b30bf00217fc71b8e9398f1efd44",
      sha256:
        "5e97c37af303fa51a7036084da8abce97c04406003e2aaf5b014489149109165",
    },
    dob: { date: "1977-03-05T13:35:14.295Z", age: 44 },
    registered: { date: "2015-01-04T20:52:30.240Z", age: 6 },
    phone: "04-31-67-71-51",
    cell: "06-46-68-87-68",
    id: { name: "INSEE", value: "1NNaN34394721 96" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/94.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/94.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
    },
    nat: "FR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "عرشيا", last: "كامياران" },
    location: {
      street: { number: 9792, name: "دکتر چمران" },
      city: "اهواز",
      state: "گلستان",
      country: "Iran",
      postcode: 71779,
      coordinates: { latitude: "41.1604", longitude: "82.3069" },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "aarshy.kmyrn@example.com",
    login: {
      uuid: "946ec43c-cfdb-40e9-b4d0-48a215fa2846",
      username: "brownelephant553",
      password: "nascar24",
      salt: "75hsTRAI",
      md5: "b95fdee7fe74012c413e59bfe08ff2d3",
      sha1: "c317c46c5e487c9b3e2e4febaba348c2b8199fa1",
      sha256:
        "76a8e2920a63d28d118ee8d816e38b84dc581ab77b827365276c3bb3a1d1b691",
    },
    dob: { date: "1965-12-08T22:45:18.878Z", age: 56 },
    registered: { date: "2016-04-16T19:10:11.494Z", age: 5 },
    phone: "083-31098334",
    cell: "0958-233-9565",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Esat", last: "Köylüoğlu" },
    location: {
      street: { number: 9247, name: "Bağdat Cd" },
      city: "Giresun",
      state: "Konya",
      country: "Turkey",
      postcode: 50870,
      coordinates: { latitude: "-44.0832", longitude: "-64.5925" },
      timezone: { offset: "+5:45", description: "Kathmandu" },
    },
    email: "esat.koyluoglu@example.com",
    login: {
      uuid: "e22d748a-4977-46cb-8c96-ea6ee1bae040",
      username: "blueduck823",
      password: "jiang",
      salt: "dx67FTF0",
      md5: "c4c2a48ececa3bab96334d4d49a1af7e",
      sha1: "3d7fd0dc61bee080bd4cb4f440000488926ccbfd",
      sha256:
        "4d911a613aaa4fa3685276d9959a43717fe1f21a60c48519625f2f2d35bd65fd",
    },
    dob: { date: "1956-01-28T20:25:36.209Z", age: 65 },
    registered: { date: "2011-10-13T08:23:50.033Z", age: 10 },
    phone: "(472)-638-0730",
    cell: "(926)-873-9121",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: { title: "Madame", first: "Anouk", last: "Simon" },
    location: {
      street: { number: 672, name: "Rue Dugas-Montbel" },
      city: "Dompierre (Vd)",
      state: "Aargau",
      country: "Switzerland",
      postcode: 7118,
      coordinates: { latitude: "-9.6384", longitude: "31.7436" },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "anouk.simon@example.com",
    login: {
      uuid: "c2784fb2-6802-4e19-8836-68c77a604be6",
      username: "bigmouse950",
      password: "jammin",
      salt: "mIZ0WhOs",
      md5: "d8f773e6a31ecc1aec82e3954f112fcf",
      sha1: "b5b99dc90cb842e6aacde824b3332f80503de8db",
      sha256:
        "0d5deefeeffb6eb2fa5bfe3245755177fdefbd5c496405a34e5240ab4a0b4422",
    },
    dob: { date: "1982-04-05T14:22:44.269Z", age: 39 },
    registered: { date: "2006-05-03T07:52:29.527Z", age: 15 },
    phone: "078 059 73 14",
    cell: "077 903 84 50",
    id: { name: "AVS", value: "756.6671.9396.83" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Sara", last: "Velasco" },
    location: {
      street: { number: 3665, name: "Calle del Pez" },
      city: "Madrid",
      state: "Islas Baleares",
      country: "Spain",
      postcode: 68699,
      coordinates: { latitude: "-78.4139", longitude: "115.4609" },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "sara.velasco@example.com",
    login: {
      uuid: "deba4631-29b1-48d2-b4e5-e927bd05b62b",
      username: "purpleladybug205",
      password: "zheng",
      salt: "dRCN7liG",
      md5: "0c616d8d29a0f1e9c02056220ab2af6f",
      sha1: "13a724f4d206007279bade60cbf42ee439491c9e",
      sha256:
        "cd3efc3f1c40994c125e808ee5e8a600aee7cf0a1b3b58b342f175c41998b4da",
    },
    dob: { date: "1980-04-17T20:07:31.899Z", age: 41 },
    registered: { date: "2015-07-24T16:02:07.548Z", age: 6 },
    phone: "987-689-092",
    cell: "679-845-968",
    id: { name: "DNI", value: "23347090-X" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Leah", last: "Diaz" },
    location: {
      street: { number: 4785, name: "W Belt Line Rd" },
      city: "Vallejo",
      state: "Wyoming",
      country: "United States",
      postcode: 38797,
      coordinates: { latitude: "85.7862", longitude: "-0.6726" },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "leah.diaz@example.com",
    login: {
      uuid: "06ab1b3f-39aa-4232-bbb1-0bc26c7837f7",
      username: "beautifulduck467",
      password: "redline",
      salt: "ae55ZwbY",
      md5: "213d6ba25f0e66e248ea4bd1647d59a7",
      sha1: "eed0a30d06903197d99a8a9d89bcd708cf90ba30",
      sha256:
        "ac99a795be342770682ba972b757d4533910388f0aabfadbb0e2bd9c0d8bca99",
    },
    dob: { date: "1992-12-20T09:32:27.922Z", age: 29 },
    registered: { date: "2005-04-06T09:42:59.495Z", age: 16 },
    phone: "(173)-797-7689",
    cell: "(295)-788-3662",
    id: { name: "SSN", value: "807-33-0374" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    },
    nat: "US",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Quido", last: "Van der Zalm" },
    location: {
      street: { number: 7011, name: "Arcadestraat" },
      city: "Noordeinde Gld",
      state: "Drenthe",
      country: "Netherlands",
      postcode: 34404,
      coordinates: { latitude: "-11.1926", longitude: "-140.8227" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "quido.vanderzalm@example.com",
    login: {
      uuid: "3e189e66-1fdc-4d27-ad9f-f2c58782ba0a",
      username: "orangepanda910",
      password: "gangster",
      salt: "v58weSKQ",
      md5: "2188af4c295f3d9b69da661872f187ee",
      sha1: "b77531a083538316d21b8c566708881e43acee3c",
      sha256:
        "b431badeb6bb076cd407787ccb133635734c183987aebbd2354d982b21cb5d38",
    },
    dob: { date: "1961-12-02T13:05:04.807Z", age: 60 },
    registered: { date: "2015-04-30T23:10:20.958Z", age: 6 },
    phone: "(144)-684-1967",
    cell: "(526)-391-5578",
    id: { name: "BSN", value: "59554936" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Vanessa", last: "Morgan" },
    location: {
      street: { number: 9893, name: "Bollinger Rd" },
      city: "Houston",
      state: "Florida",
      country: "United States",
      postcode: 69723,
      coordinates: { latitude: "-8.8001", longitude: "-168.5588" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
    },
    email: "vanessa.morgan@example.com",
    login: {
      uuid: "05c70a05-7421-44c5-af50-554c4fc83366",
      username: "angrycat172",
      password: "cookies",
      salt: "i0aFFxqt",
      md5: "6187266fb6e9e11ab6a71a7c58906d8e",
      sha1: "1539bc847894a41920e3b9ca124a0bfa81d02755",
      sha256:
        "44d2a2fa3b03d9d67dab6d1264f52cdee90a9e2c67ec4911a08f75cbba36fbc6",
    },
    dob: { date: "1955-11-22T15:47:38.848Z", age: 66 },
    registered: { date: "2019-07-30T22:09:21.378Z", age: 2 },
    phone: "(835)-586-6028",
    cell: "(785)-333-8264",
    id: { name: "SSN", value: "375-57-5719" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/69.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "آوینا", last: "سلطانی نژاد" },
    location: {
      street: { number: 4565, name: "جمال الدین اسدآبادی" },
      city: "نیشابور",
      state: "همدان",
      country: "Iran",
      postcode: 66423,
      coordinates: { latitude: "7.6396", longitude: "-26.9170" },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "awyn.sltnynjd@example.com",
    login: {
      uuid: "35c17a14-aca2-4e5b-809e-4d584b6c8afb",
      username: "happymouse901",
      password: "volley",
      salt: "4GaA9vmi",
      md5: "4369efbcffb725fc93f1a39a60224fe7",
      sha1: "90e772aa793414317e73f48503407ac8106fac3d",
      sha256:
        "59ded3802fdc89e715be5897d9d2fedd796116afad17246622ebac7dac81c51c",
    },
    dob: { date: "1994-08-26T17:01:22.484Z", age: 27 },
    registered: { date: "2002-09-15T22:51:41.849Z", age: 19 },
    phone: "006-79317326",
    cell: "0933-736-0107",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Oscar", last: "Dupont" },
    location: {
      street: { number: 840, name: "Rue des Abbesses" },
      city: "Grenoble",
      state: "Aveyron",
      country: "France",
      postcode: 27916,
      coordinates: { latitude: "32.9637", longitude: "-78.6173" },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "oscar.dupont@example.com",
    login: {
      uuid: "f63b14a9-eb5b-49df-9d14-c7952bba796c",
      username: "yellowlion842",
      password: "fidelio",
      salt: "v67TjEoo",
      md5: "3493ea20f78ddb18d48cb1bb2e43e45c",
      sha1: "ea17bc4ab74eb6b4c3eb8e5e9f50023d6d79102b",
      sha256:
        "fe3b701891414a35555a6533568f4e42c77dc6468155d2307fc448c1161ad745",
    },
    dob: { date: "1951-01-16T07:15:43.883Z", age: 70 },
    registered: { date: "2018-02-06T23:18:42.902Z", age: 3 },
    phone: "03-39-75-54-47",
    cell: "06-34-62-64-22",
    id: { name: "INSEE", value: "1NNaN65034787 26" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/42.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "مهدیس", last: "مرادی" },
    location: {
      street: { number: 8015, name: "اقبال لاهوری" },
      city: "ارومیه",
      state: "فارس",
      country: "Iran",
      postcode: 84580,
      coordinates: { latitude: "45.7509", longitude: "75.8284" },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "mhdys.mrdy@example.com",
    login: {
      uuid: "c86e5023-1cf1-44cb-be17-00fba5549406",
      username: "ticklishsnake554",
      password: "desert",
      salt: "AIpc3CRG",
      md5: "a537cd446b7a2d7592fda1daef2e3873",
      sha1: "54c4e3b9aed08ea6e0dfe4358e409ff09fd97fcd",
      sha256:
        "858df72b0659b1088adaf205d56481c3282d135b5952a5d7b5ba2861c18bf51c",
    },
    dob: { date: "1952-10-04T09:02:09.900Z", age: 69 },
    registered: { date: "2017-01-28T08:19:39.128Z", age: 4 },
    phone: "015-09271245",
    cell: "0963-783-7898",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/24.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Monsieur", first: "Noa", last: "Bertrand" },
    location: {
      street: { number: 467, name: "Avenue Debourg" },
      city: "Reiden",
      state: "Schwyz",
      country: "Switzerland",
      postcode: 9703,
      coordinates: { latitude: "-74.4969", longitude: "-152.0049" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "noa.bertrand@example.com",
    login: {
      uuid: "785327a1-a9ac-4429-b1cb-a0dcda8dfdc9",
      username: "greenzebra806",
      password: "gangsta",
      salt: "0xsZ0i7n",
      md5: "14cf58c9941cc1ed89082e7fd282ded3",
      sha1: "c0d64d0927dac2176e84cf503340b4cf9d1132a2",
      sha256:
        "b679bc42d9ebeb5fc83d69b64026fa8b4ecdbc067ea7b9063454492452c68dd5",
    },
    dob: { date: "1955-10-20T18:03:04.151Z", age: 66 },
    registered: { date: "2009-04-09T15:03:27.897Z", age: 12 },
    phone: "078 301 62 63",
    cell: "076 790 14 61",
    id: { name: "AVS", value: "756.7424.4611.08" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Jerrold", last: "Kliphuis" },
    location: {
      street: { number: 8784, name: "Dollehoedsdijk" },
      city: "Rheezerveen",
      state: "Noord-Holland",
      country: "Netherlands",
      postcode: 76283,
      coordinates: { latitude: "48.2285", longitude: "-79.7590" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "jerrold.kliphuis@example.com",
    login: {
      uuid: "62ca7333-77fe-458b-ac39-6726e0ff5e7d",
      username: "orangezebra667",
      password: "1963",
      salt: "lgOQIEsH",
      md5: "575a107564d44d3007a71f36ca3e28bb",
      sha1: "bb3dd6b7835ce6463f566965a2115fe099889626",
      sha256:
        "dd43e16eee0e602fb3a5f81519ccb86289d3e24be9815747874ecdc2fb88a12c",
    },
    dob: { date: "1968-03-24T06:29:47.075Z", age: 53 },
    registered: { date: "2018-11-17T04:05:37.968Z", age: 3 },
    phone: "(018)-382-5902",
    cell: "(525)-312-6737",
    id: { name: "BSN", value: "84507586" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/74.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Beatrice", last: "Bergeron" },
    location: {
      street: { number: 7415, name: "Concession Road 23" },
      city: "Sutton",
      state: "Alberta",
      country: "Canada",
      postcode: "G1J 5T2",
      coordinates: { latitude: "68.0346", longitude: "165.2673" },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "beatrice.bergeron@example.com",
    login: {
      uuid: "fae403f2-abcd-46b7-8d83-6fa801716a0b",
      username: "silverduck228",
      password: "power",
      salt: "kRid01Jp",
      md5: "26c51167258036712e53cdb3e4b4527a",
      sha1: "aa172ab04334cf476dd4e45ab32860277bfa14f3",
      sha256:
        "fc83c35b5cb37092b6792608918e5dd5ae7c663d3b0133dc1e8ccae1392fb5c4",
    },
    dob: { date: "1957-01-28T03:46:41.370Z", age: 64 },
    registered: { date: "2006-06-27T02:48:40.902Z", age: 15 },
    phone: "338-732-2677",
    cell: "515-034-9015",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Lucas", last: "Kristensen" },
    location: {
      street: { number: 6520, name: "Kærgårdsvej" },
      city: "Allinge",
      state: "Sjælland",
      country: "Denmark",
      postcode: 94452,
      coordinates: { latitude: "-74.1864", longitude: "23.5624" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
    },
    email: "lucas.kristensen@example.com",
    login: {
      uuid: "58d3ac9b-fa52-4acc-a927-9addbad675f7",
      username: "whiteostrich725",
      password: "wert",
      salt: "BWctBJbm",
      md5: "540243341a680d81c1995dabca0c566a",
      sha1: "eef6cc50708da1dfc1a05608e724b1e5c30faa1d",
      sha256:
        "cc2186a6fef73a6d7a9db62b8ce8c9e57ee438d66874ae0a9fbc9bdabae34adc",
    },
    dob: { date: "1983-03-31T14:04:35.291Z", age: 38 },
    registered: { date: "2015-07-21T12:15:44.422Z", age: 6 },
    phone: "67399596",
    cell: "44075198",
    id: { name: "CPR", value: "310383-9581" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Eugene", last: "Kuhn" },
    location: {
      street: { number: 9964, name: "Mockingbird Ln" },
      city: "St. Petersburg",
      state: "Florida",
      country: "United States",
      postcode: 11620,
      coordinates: { latitude: "41.6479", longitude: "-79.9292" },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "eugene.kuhn@example.com",
    login: {
      uuid: "1eca798a-f42e-4afe-94bb-68a3386c5d56",
      username: "purplesnake606",
      password: "vader",
      salt: "zA7j5CJN",
      md5: "27d97d936b04d8ec99087435636ea944",
      sha1: "28472de692fb40540e9cf8bb079e554ff81f0b1f",
      sha256:
        "4c0299deadd958e06146b5462d764ba3ad32eab08fd5c77a2e34f7a1735fc313",
    },
    dob: { date: "1957-12-04T07:34:06.971Z", age: 64 },
    registered: { date: "2011-11-11T03:44:23.638Z", age: 10 },
    phone: "(903)-380-2376",
    cell: "(662)-846-5285",
    id: { name: "SSN", value: "891-26-1846" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
    },
    nat: "US",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Frederikke", last: "Sørensen" },
    location: {
      street: { number: 8965, name: "Fredericiagade" },
      city: "Sønder Stenderup",
      state: "Sjælland",
      country: "Denmark",
      postcode: 18668,
      coordinates: { latitude: "-69.4969", longitude: "-146.2993" },
      timezone: { offset: "+5:45", description: "Kathmandu" },
    },
    email: "frederikke.sorensen@example.com",
    login: {
      uuid: "ed6569e4-55e8-4a9e-b69b-ed58706ef8b8",
      username: "biglion400",
      password: "mister",
      salt: "jv0s7gjk",
      md5: "1b2b4eef1e0b0a42efa960f27af88543",
      sha1: "b61161b5051582160fa61f39c839b08dbb5121ad",
      sha256:
        "a517be74d9ab98c1a5b882833854ff194d6ac38904f7371c66e80ad405723b8d",
    },
    dob: { date: "1964-03-23T21:11:35.935Z", age: 57 },
    registered: { date: "2016-10-04T15:35:40.856Z", age: 5 },
    phone: "07190090",
    cell: "43723773",
    id: { name: "CPR", value: "230364-8018" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Matteo", last: "Lecomte" },
    location: {
      street: { number: 5524, name: "Place des 44 Enfants D'Izieu" },
      city: "Courbevoie",
      state: "Charente",
      country: "France",
      postcode: 89507,
      coordinates: { latitude: "89.1833", longitude: "-4.8202" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
    },
    email: "dasdasdsadasd@gmai.com",
    login: {
      uuid: "33c3897b-3b6e-41b5-8f39-db5f243381f1",
      username: "whitemouse281",
      password: "maurice",
      salt: "CWtVrf4X",
      md5: "e97a39582afa2fe7c346ff5a5bd000dc",
      sha1: "4e71030cdca26242919cd4d8ce02f8237b26f218",
      sha256:
        "357c1e37e82d92c7ca54bbb67e47690b213ff2baead598499daccaf0ca32269b",
    },
    dob: { date: "1948-05-30T04:28:42.593Z", age: 73 },
    registered: { date: "2010-11-06T17:46:12.923Z", age: 11 },
    phone: "02-33-67-58-40",
    cell: "06-71-31-98-30",
    id: { name: "INSEE", value: "1NNaN84707229 61" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    },
    nat: "FR",
  },
];

const changeObjStructure = (obj = {}) => {
  return {
    gender: obj.gender,
    title: obj.name?.title,
    full_name: `${obj.name?.first} ${obj.name?.last}`,
    city: obj.location?.city,
    state: obj.location?.state,
    country: obj.location?.country,
    postcode: obj.location?.postcode,
    coordinates: obj.location?.coordinates,
    timezone: obj.location?.timezone,
    email: obj?.email,
    b_date: obj.dob?.date,
    age: obj.dob?.age,
    phone: obj?.phone,
    picture_large: obj.picture?.large,
    picture_thumbnail: obj.picture?.thumbnail,
  };
};

const courses = [
  "Mathematics",
  "Physics",
  "English",
  "Computer Science",
  "Dancing",
  "Chess",
  "Biology",
  "Chemistry",
  "Law",
  "Art",
  "Medicine",
  "Statistics",
];

const addNewPropertiesToObj = (obj) => {
  return {
    ...obj,
    id: null,
    favorite: null,
    course: courses[Math.floor(Math.random() * 10)],
    bg_color: null,
    note: null,
  };
};

function prepareObject(arrayOfObjects = []) {
  let newArrayOfObjects = arrayOfObjects.map((obj) => changeObjStructure(obj));

  let addNewFieldsToObj = newArrayOfObjects.map(addNewPropertiesToObj);

  return addNewFieldsToObj;
}

const filteredUsers = prepareObject(randomUserMock);

// const teacherContainerDiv = document.getElementById("teacher_content");
const teacherContainerDiv = document.getElementById("teachers");

const addTeacher = (name, avatar, course, country) => {
  return `<div class="teacher_profile" id="teacher${name}">
    <div class="teacher_image">
      <img
        src="${avatar}"
        alt=""
      />
    </div>
    <h1>${name}</h1>
    <span class="hobby">${course}</span><br>
    <span>${country}</span>
    </div>`;
};

const addTeacherCreated = (name, course, country) => {
  return `<div class="teacher_profile">
    <div class="teacher_image active">
      <span>${name[0]}.</span>
    </div>
    <h1>${name}</h1>
    <span class="hobby">${course}</span><br>
    <span>${country}</span>
    </div>`;
};

const teacherPopupWindow = (
  index,
  name,
  avatar,
  course,
  city,
  country,
  age,
  gender,
  email,
  phone
) => {
  return ` <div class="teacher-modal-content" id="modall${index}">
      <div class="header">
        <span>Teacher Info</span>
        <span id="closeModal${index}" class="closssss">&times;</span>
      </div>
      <div class="teacher_content">
        <div class="teacher_profile_image avatar">
          <img src="${avatar}" alt="" />
        </div>
        <div class="teacher_info">
          <h1 class="fullname">
            <span> ${name} </span>
            <span class="star" id="f${index}" onclick="addFavorites('${name}');">&star;</span>
          </h1>
          <b class="teacher_hobby">${course}</b>
          <span class="country">${city}. ${country}</span>
          <span class="sex">${age},${gender}</span>
          <span class="email">${email}</span>
          <span class="number">${phone}</span>
        </div>
      </div>
      <p class="teacher_description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        laudantium eligendi non soluta necessitatibus magni temporibus, quas
        dignissimos nam rerum.
      </p>
      <a href="#" class="map">toggle map</a>
    </div>`;
};

const renderTeachers = (teacherArray) => {
  teacherArray.forEach((teacher, index) => {
    return teacherContainerDiv.insertAdjacentHTML(
      "beforeend",
      addTeacher(
        teacher.full_name,
        teacher.picture_large,
        teacher.course,
        teacher.country,
      )
    );
  });
};

renderTeachers(filteredUsers); //Render teachers

const modal1 = document.getElementById("teacherM");
filteredUsers.forEach((teacher, index) => {
  teacher.favorite = false;

  modal1.insertAdjacentHTML(
    "beforeend",
    teacherPopupWindow(
      index,
      teacher.full_name,
      teacher.picture_large,
      teacher.course,
      teacher.city,
      teacher.country,
      teacher.age,
      teacher.gender,
      teacher.email,
      teacher.phone
    )
  );

  document.getElementById(`teacher${teacher.full_name}`).onclick = function () {
    modal1.style.display = "block";

    modal1.insertAdjacentHTML(
      "beforeend",
      teacherPopupWindow(
        index,
        teacher.full_name,
        teacher.picture_large,
        teacher.course,
        teacher.city,
        teacher.country,
        teacher.age,
        teacher.gender,
        teacher.email,
        teacher.phone
      )
    );
  };

  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };
});

const favorites1 = document.getElementById("favorites1");
const favArr = [];
const addFavorites = (name) => {
  let newArr = [];
  const filterGender = filteredUsers.filter(
    (teacher) => teacher.full_name === name
  );

  if (filterGender[0].favorite === true) {
    return;
  }
  filterGender[0].favorite = true;

  newArr.push(filterGender[0]);

  newArr.forEach((teacher, index) => {
    if (teacher.favorite) {
      favorites1.insertAdjacentHTML(
        "beforeend",
        addTeacher(
          teacher.favorite,
          teacher.full_name,
          teacher.picture_large,
          teacher.hobby,
          teacher.country,
          index
        )
      );
    }
  });
  newArr = [];
  console.log(filteredUsers);
};
// ЗАВДАННЯ 2 -------
// Фільтрація по only favorites

document.getElementById("favorites").addEventListener("click", () => {
  console.log(document.getElementById("favorites").checked);
  if (document.getElementById("favorites").checked) {
    
    filteredUsers.forEach((item, index) => {
      document.getElementById(`teacher${item.full_name}`).style.display =
        "none";
    });
    filteredUsers.forEach((teacher, index) => {
      if (teacher.favorite) {
        teacherContainerDiv.insertAdjacentHTML(
          "beforeend",
          addTeacher(
            teacher.favorite,
            teacher.full_name,
            teacher.picture_large,
            teacher.course,
            teacher.country,
            index
          )
        );
      }
      filteredUsers[index].favorite = false;
      document.getElementById(`teacher${teacher.full_name}`).style.display =
        "none";
    });
  } else {
    filteredUsers.forEach(
      (item, index) =>
        (document.getElementById(`teacher${item.full_name}`).style.display =
          "block")
    );
  }
});

// Фільтрація по фото
document.getElementById("photo").addEventListener("photo", () => {
  if (document.getElementById("photo").checked) {

    filteredUsers.forEach((item, index) => {
      document.getElementById(`teacher${teacher.full_name}`).style.display =
        "none";
    });
    filteredUsers.forEach((teacher, index) => {
      if (teacher.picture_large) {
        teacherContainerDiv.insertAdjacentHTML(
          "beforeend",
          addTeacher(
            teacher.favorite,
            teacher.full_name,
            teacher.picture_large,
            teacher.course,
            teacher.country,
            index
          )
        );
      }
    });
  } else {
    filteredUsers.forEach(
      (item, index) =>
        (document.getElementById(`teacher${teacher.full_name}`).style.display =
          "block")
    );
  }
});

// Фільтрація по male/female

var select = document.getElementById("sex");

select.addEventListener("change", () => {
  teacherContainerDiv.innerHTML = "";
  var value = select.value;
  console.log(value);
  const maleOrFemale = filteredUsers.filter((teacher) => {
    return teacher.gender === value;
  });

  renderTeachers(maleOrFemale);

  maleOrFemale.forEach((teacher, index) => {
    modal1.insertAdjacentHTML(
      "beforeend",
      teacherPopupWindow(
        index,
        teacher.full_name,
        teacher.picture_large,
        teacher.course,
        teacher.city,
        teacher.country,
        teacher.age,
        teacher.gender,
        teacher.email,
        teacher.phone
      )
    );

    document.getElementById(`teacher${teacher.full_name}`).onclick =
      function () {
        modal1.style.display = "block";

        modal1.insertAdjacentHTML(
          "beforeend",
          teacherPopupWindow(
            index,
            teacher.full_name,
            teacher.picture_large,
            teacher.course,
            teacher.city,
            teacher.country,
            teacher.age,
            teacher.gender,
            teacher.email,
            teacher.phone
          )
        );
      };

    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    };
  });
});

// Фільтрація по країнам
var select2 = document.getElementById("region");

select2.addEventListener("change", () => {
  teacherContainerDiv.innerHTML = "";
  var value = select2.value;
  console.log(value);
  const filterByCountry = filteredUsers.filter((teacher) => {
    return teacher.country === value;
  });

  console.log(filterByCountry);

  renderTeachers(filterByCountry);

  filterByCountry.forEach((teacher, index) => {
    modal1.insertAdjacentHTML(
      "beforeend",
      teacherPopupWindow(
        index,
        teacher.full_name,
        teacher.picture_large,
        teacher.course,
        teacher.city,
        teacher.country,
        teacher.age,
        teacher.gender,
        teacher.email,
        teacher.phone
      )
    );

    document.getElementById(`teacher${teacher.full_name}`).onclick =
      function () {
        modal1.style.display = "block";

        modal1.insertAdjacentHTML(
          "beforeend",
          teacherPopupWindow(
            index,
            teacher.full_name,
            teacher.picture_large,
            teacher.course,
            teacher.city,
            teacher.country,
            teacher.age,
            teacher.gender,
            teacher.email,
            teacher.phone
          )
        );
      };

    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    };
  });
});

var select3 = document.getElementById("ageUser");

select3.addEventListener("change", () => {
  teacherContainerDiv.innerHTML = "";
  var age = select3.value;
  const filterByAge = filteredUsers.filter((teacher) => {
    return teacher.age < age;
  });
  console.log(age);

  console.log(filterByAge);

  renderTeachers(filterByAge);

  filterByAge.forEach((teacher, index) => {
    modal1.insertAdjacentHTML(
      "beforeend",
      teacherPopupWindow(
        index,
        teacher.full_name,
        teacher.picture_large,
        teacher.course,
        teacher.city,
        teacher.country,
        teacher.age,
        teacher.gender,
        teacher.email,
        teacher.phone
      )
    );

    document.getElementById(`teacher${teacher.full_name}`).onclick =
      function () {
        modal1.style.display = "block";

        modal1.insertAdjacentHTML(
          "beforeend",
          teacherPopupWindow(
            index,
            teacher.full_name,
            teacher.picture_large,
            teacher.course,
            teacher.city,
            teacher.country,
            teacher.age,
            teacher.gender,
            teacher.email,
            teacher.phone
          )
        );
      };

    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    };
  });
});

// ЗАВДАНЯ 3
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// Завдання 4
const searchInput = document.getElementById("searchInput");
const btn_search = document.getElementById("btn_search");

btn_search.addEventListener("click", () => {
  filteredUsers.forEach((item, index) => {
    document.getElementById(`teacher${item.full_name}`).style.display = "none";
  });
  console.log(parseInt(searchInput.value) + 1 > parseInt(searchInput.value));
  let filteredArrayOfTeachers;
  if (parseInt(searchInput.value) + 1 > parseInt(searchInput.value)) {
    filteredArrayOfTeachers = filteredUsers.filter((teacher) => {
      return teacher.age === parseInt(searchInput.value);
    });
  } else {
    filteredArrayOfTeachers = filteredUsers.filter((teacher) => {
      return teacher.full_name === searchInput.value;
    });
  }
  console.log(filteredArrayOfTeachers);
  renderTeachers(filteredArrayOfTeachers);
});

// Завдання 5

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("fname");
  const speciality = document.getElementById("speciality");
  const country = document.getElementById("fcountry");
  const city = document.getElementById("fcity");
  const email = document.getElementById("femail");
  const phone = document.getElementById("fphone");
  const birthday = document.getElementById("birthday");
  const radios = document.getElementsByName("gender");

  const notes = document.getElementById("myTextarea");
  let genderChoose = "";
  for (var radio of radios) {
    if (radio.checked) {
      genderChoose = radio.value;
    }
  }
  console.log(notes.value);
  const obj = {};

  (obj.gender = genderChoose),
    (obj.course = speciality.value),
    (obj.full_name = name.value),
    (obj.city = city.value),
    (obj.country = country.value),
    (obj.email = email.value),
    (obj.b_date = birthday.value),
    (obj.phone = phone.value),
    console.log(obj);

  document
    .getElementById("teachers_created")
    .insertAdjacentHTML(
      "beforeend",
      addTeacherCreated(name.value, speciality.value, country.value, 1)
    );
  renderTeachers(filteredUsers);
});

var schema = {
  full_name: function (value) {
    console.log("Full Name:", value);
    return /^([A-Z][a-z\-]* )+[A-Z][a-z\-]*( \w+\.?)?$/.test(value);
  },
  gender: function (value) {
    console.log("Gender:", value);
    return /[a-z]/.test(value);
  },
  note: function (value) {
    console.log("Note:", value);
    return /[A-Z]/.test(value);
  },
  state: function (value) {
    console.log("State:", value);
    return /[A-Z]/.test(value);
  },
  city: function (value) {
    console.log("City:", value);
    return /[A-Z]/.test(value);
  },
  country: function (value) {
    console.log("Country:", value);
    return /[A-Z]/.test(value);
  },
  age: function (value) {
    console.log("Age:", value);
    return !isNaN(value) && parseInt(value) == value && value >= 18;
  },
  phone: function (value) {
    console.log("Phone:", value);
    return /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/.test(value);
  },
  email: function (value) {
    console.log("Email:", value);
    console.log("-----------------");

    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  },
};

function validate(object, schema) {
  var errors = Object.keys(schema)
    .filter(function (key) {
      return !schema[key](object[key]);
    })
    .map(function (key, index) {
      return new Error(key + " is invalid.");
    });

  if (errors.length > 0) {
    errors.forEach(function (error) {
      console.log(error.message);
    });
  } else if (errors.length < 0) {
    console.log("info is valid");
  }
  console.log("--------------------------------------");
}

filteredUsers.forEach((user) => validate(user, schema));

// Завдання 3

const userParameter = {
  sex: "Male",
};

const users = filteredUsers.filter((item) => {
  for (var key in userParameter) {
    if (item[key] === undefined || item[key] != userParameter[key])
      return false;
  }
  return true;
});

// Завдання 4

const sortUserArray = (array, parameter, asc = true) => {
  array.sort(function (a, b) {
    if (asc) {
      // Сортуємо за зростанням
      if (a[parameter] < b[parameter]) return -1;

      if (a[parameter] > b[parameter]) return 1;
    } else {
      // Сортуємо за спаданням
      if (a[parameter] > b[parameter]) return -1;

      if (a[parameter] < b[parameter]) return 1;
    }

    return 0;
  });
  return filteredUsers;
};
// true - за зростанням
// false - за спаданням
console.log(sortUserArray(filteredUsers, "country", true));
console.log("------------");

function findUserByParameter(full_name = null, note = null, age = null) {
  if (arguments.length !== 1) {
    console.log("Use one argument");
    return;
  }
  const arr = ["full_name", "note", "age"];
  const filterValueIndex = Object.values(arguments)
    .slice(0, 3)
    .findIndex((el, i) => el !== "undefined");

  return filteredUsers.filter(
    (x) => x[arr[filterValueIndex]] === arguments[filterValueIndex]
  );
}

console.log(findUserByParameter("Jordan Vidal"));

const percentageOfTheTotalNumberOfUsers = (objs, condition) =>
  (objs.filter(condition).length * 100) / objs.length + "%";

console.log(
  percentageOfTheTotalNumberOfUsers(filteredUsers, (obj) => obj.age >= 70)
  );

// Завдання 1. Відобразити масив об’єктів викладачів отриманий у лабораторній роботі No3 на html сторінці з лабораторної роботи
// No2 та реалізувати функціональність перегляду інформації про викладача та додавання у список вибраних (favorites).

// Завдання 2. Додати на html сторінку можливість фільтрації викладачів на сторінці по країні, віку,
// статі та тих, що є у списку вибраних (country, age, gender, favorite.

// Завдання 3. Додати на html сторінку до блоку статистики можливість сортування за ім’ям, спеціальністю,
//  країною, та віком (full_name, course, age, b_day, country). Змінювати сортування по кліку на заголовок таблиці.

// Завдання 4 Додати на html сторінку функціональність пошуку по викладачах за параметрами:
// ім’я, коментар та вік (name, note, age)

// Завдання 5. Реалізувати функціонал форми додавання викладача (teach_add_popup)
