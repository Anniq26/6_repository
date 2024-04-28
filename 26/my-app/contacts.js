const NUM_CONTACTS = 100;

const firstNams = [
"Anna",
"Emma",
"Olivia",
"Ava",
"Mia",
"Isabella",
"Sophia",
"Charlotte",
"Amelia",
"Harper",
"Evelyn",
"Abigail",
"Emily",
"Elizabeth",
"Sofia",
"Madison",
"Avery",
"Ella",
"Scarlett",
"Grace",
"Chloe",
"Victoria",
"Riley",
"Aria",
"Lily",
"Aubrey",
"Zoey",
"Penelope",
"Lillian",
"Addison",
"Layla",
"Natalie",
"Lucy",
"Brooklyn",
"Savannah",
"Leah",
"Zoe",
"Audrey",
"Claire",
"Eleanor",
"Skylar",
"Hailey",
"Paisley",
"Ellie",
"Samantha",
"Stella",
"Violet",
"Maya",
"Aurora",
"Natalie",
"Sarah",
"Caroline",
"Genesis",
"Kennedy",
"Sadie",
"Gabriella",
"Madelyn",
"Adeline",
"Hannah",
"Makayla",
"Evelyn",
"Allison",
"Samantha",
"Gabrielle",
"Claire",
"Arianna",
"Savannah",
"Sophie",
"Jordyn",
"Brooklyn",
"Taylor",
"Bella",
"Kaylee",
"Alexis",
"Peyton",
"Leah",
"Mackenzie",
"Bella",
"Kennedy",
"Peyton",
"Mackenzie",
"Peyton",
"Aaliyah",
"Charlotte",
"Ellie",
"Paisley",
"Brynlee",
"Faith",
"Naomi",
"Sarah",
"Hailey",
"Kaylee",
"Lyla",
"Eliana",
"Penelope",
"Aubree",
"Addison"
]


const lastNames = [
    "Smith",
"Johnson",
"Williams",
"Brown",
"Jones",
"Garcia",
"Miller",
"Davis",
"Rodriguez",
"Martinez",
"Hernandez",
"Lopez",
"Gonzalez",
"Wilson",
"Anderson",
"Thomas",
"Taylor",
"Moore",
"Jackson",
"Martin",
"Lee",
"Perez",
"Thompson",
"White",
"Harris",
"Sanchez",
"Clark",
"Ramirez",
"Lewis",
"Robinson",
"Walker",
"Young",
"Allen",
"King",
"Wright",
"Scott",
"Torres",
"Nguyen",
"Hill",
"Flores",
"Green",
"Adams",
"Nelson",
"Baker",
"Hall",
"Rivera",
"Campbell",
"Mitchell",
"Carter",
"Roberts",
"Gomez",
"Phillips",
"Evans",
"Turner",
"Diaz",
"Parker",
"Cruz",
"Edwards",
"Collins",
"Reyes",
"Stewart",
"Morris",
"Morales",
"Murphy",
"Cook",
"Rogers",
"Gutierrez",
"Ortiz",
"Morgan",
"Cooper",
"Peters",
"Gray",
"Reed",
"Kelly",
"Howard",
"Ramos",
"Kim",
"Cox",
"Ward",
"Richardson",
"Watson",
"Brooks",
"Chavez",
"Wood",
"James",
"Bennett",
"Grayson",
"Montgomery",
"Owens",
"Harper",
"Wagner",
"Stone",
"Ellis",
"Harrison",
"Long",
"Fisher",
"Price",
"Daniels",
"Hicks",
"Berry",
"Perkins",
"Hoffman"
];




const rand = (max, min = 0) => 
Math.floor(Math.random() * (max-min +1)) + min; //random number within max and minimum generate

const generateName = () => 
`${firstNams[rand(firstNams.length - 1)]}${lastNames[rand(lastNames.length - 1)]
}`;

const generatePhone = () => `+995-${rand(599-500)}-${String(rand(99)).padStart(2,"0")}-${String(rand(99)).padStart(2,"0")}-${String(rand(99)).padStart(2,"0")}`;

const createContact = () => ({
    name: generateName(),
    phone: generatePhone(),
});
export const compareNames = (contact1, contact2) => 
contact1.name.localeCompare(contact2.name);

const addKeys = (val, key) => ({ key, ...val });

export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys);