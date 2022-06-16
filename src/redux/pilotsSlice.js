import { createSlice } from "@reduxjs/toolkit";
import photo from "../public/images/stockPhoto.jpeg";

const initialState = {
  pilots: [
    {
      id: 1,
      airline: "AA",
      photo: photo,
      seat: "CPT",
      fleet: "737",
      domicile: "GEG",
      nameFirst: "John",
      nameLast: "Smith",
      trainingFacility: "Riviera State 32/106",
      company: "American Airlines",
      address1: "795 Folsom Ave",
      address2: " Suite 600",
      city: "San Fransisco,",
      state: "CA",
      postalCode: "94107",
      areaCode: "(123)",
      prefix: "456",
      suffix: "7890",
    },
    {
      id: 2,
      airline: "AA",
      photo: photo,
      seat: "DET",
      fleet: "420",
      domicile: "LCY",
      nameFirst: "Sherlock",
      nameLast: "Holmes",
      trainingFacility: "Scottland Yard",
      company: "American Airlines",
      address1: "Baker St",
      address2: "221B",
      city: "East London,",
      state: "London",
      postalCode: "5208",
      areaCode: "(519)",
      prefix: "555",
      suffix: "9374",
    },
    {
      id: 3,
      airline: "AA",
      photo: photo,
      seat: "DR",
      fleet: "010",
      domicile: "SPC",
      nameFirst: "The Doctor",
      nameLast: "",
      trainingFacility: "The Tardis",
      company: "American Airlines",
      address1: "232 Earls Ct Rd",
      address2: "",
      city: "Earl's Court,",
      state: "London",
      postalCode: "SW5 9RD",
      areaCode: "",
      prefix: "",
      suffix: "07700 900461",
    },
    {
      id: 4,
      airline: "AA",
      photo: photo,
      seat: "KNG",
      fleet: "300",
      domicile: "PRD",
      nameFirst: "King",
      nameLast: "Simba",
      trainingFacility: "Pride Rock",
      company: "American Airlines",
      address1: "Everything The",
      address2: "Light Touches",
      city: "Somewhere,",
      state: "Africa",
      postalCode: "99999",
      areaCode: "(800)",
      prefix: "975",
      suffix: "1042",
    },
    {
      id: 5,
      airline: "AA",
      photo: photo,
      seat: "CPT",
      fleet: "728",
      domicile: "SEA",
      nameFirst: "Amanda",
      nameLast: "James",
      trainingFacility: "Atlanta Flights 2020",
      company: "American Airlines",
      address1: "123 right St",
      address2: "STE 4",
      city: "Atlanta,",
      state: "Georgia",
      postalCode: "30301",
      areaCode: "(404)",
      prefix: "0890",
      suffix: "3546",
    },
    {
      id: 6,
      airline: "AA",
      photo: photo,
      seat: "FLC",
      fleet: "013",
      domicile: "HNL",
      nameFirst: "Peter",
      nameLast: "Brecken",
      trainingFacility: "Spokane Aviation Club",
      company: "American Airlines",
      address1: "1620 E Main St",
      address2: "",
      city: "Spokane",
      state: "WA",
      postalCode: "99216",
      areaCode: "(509)",
      prefix: "755",
      suffix: "8839",
    },
    {
      id: 7,
      airline: "AS",
      photo: photo,
      seat: "CPT",
      fleet: "560",
      domicile: "DUA",
      nameFirst: "Kevin",
      nameLast: "Stacy",
      trainingFacility: "Hotchins State 06/202",
      company: "Alaska Airlines",
      address1: "420 E Broad Ave",
      address2: "",
      city: "Spokane",
      state: "WA",
      postalCode: "99208",
      areaCode: "(509)",
      prefix: "590",
      suffix: "3118",
    },
    {
      id: 8,
      airline: "AS",
      photo: photo,
      seat: "CPT",
      fleet: "444",
      domicile: "TIA",
      nameFirst: "Nicholas",
      nameLast: "Adams",
      trainingFacility: "Over the Rainbow",
      company: "Alaska Airlines",
      address1: "123 Yellowbrick Rd",
      address2: "Unit #5",
      city: "Austin",
      state: "TX",
      postalCode: "73301",
      areaCode: "(999)",
      prefix: "888",
      suffix: "7777",
    },
    {
      id: 9,
      airline: "AS",
      photo: photo,
      seat: "CPT",
      fleet: "321",
      domicile: "BTR",
      nameFirst: "Jaime",
      nameLast: "Sanches",
      trainingFacility: "1143 Flight 4 Lyfe",
      company: "Alaska Airlines",
      address1: "444 W Oakwood Blvd",
      address2: "APT 202",
      city: "Coeur 'D Alene",
      state: "ID",
      postalCode: "83815",
      areaCode: "(208)",
      prefix: "995",
      suffix: "8147",
    },
    {
      id: 10,
      airline: "AS",
      photo: photo,
      seat: "ORG",
      fleet: "019",
      domicile: "PEG",
      nameFirst: "Larry",
      nameLast: "Cable",
      trainingFacility: "Learning to Fly",
      company: "Alaska Airlines",
      address1: "900 Skyline Ave",
      address2: "#1450",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      areaCode: "(460)",
      prefix: "755",
      suffix: "9375",
    },
    {
      id: 10,
      airline: "AS",
      photo: photo,
      seat: "VRM",
      fleet: "212",
      domicile: "LAX",
      nameFirst: "Santana",
      nameLast: "Gomez",
      trainingFacility: "Blvd of Broken Dreams",
      company: "Alaska Airlines",
      address1: "100 Hollywood Ln",
      address2: "Apt 5",
      city: "Beverly Hills",
      state: "CA",
      postalCode: "90210",
      areaCode: "(259)",
      prefix: "099",
      suffix: "0666",
    },
    {
      id: 11,
      airline: "FA",
      photo: photo,
      seat: "HRO",
      fleet: "900",
      domicile: "TNA",
      nameFirst: "Izuku",
      nameLast: "Midoria",
      trainingFacility: "That one Ramen Shop",
      company: "Frontier Airlines",
      address1: "1 Plus Ultra Cir",
      address2: "STE 600",
      city: "Tokyo",
      state: "JP",
      postalCode: "8312Z",
      areaCode: "(101)",
      prefix: "010",
      suffix: "1101",
    },
    {
      id: 12,
      airline: "FA",
      photo: photo,
      seat: "TRY",
      fleet: "000",
      domicile: "BRR",
      nameFirst: "Icy",
      nameLast: "Jones",
      trainingFacility: "The Freezer",
      company: "Frontier Airlines",
      address1: "666 Evil Ct",
      address2: "",
      city: "Antartica",
      state: "AT",
      postalCode: "69777",
      areaCode: "(002)",
      prefix: "777",
      suffix: "0000",
    },
    {
      id: 13,
      airline: "FA",
      photo: photo,
      seat: "WAL",
      fleet: "421",
      domicile: "ACH",
      nameFirst: "Tom",
      nameLast: "Nook",
      trainingFacility: "Nooks Cranny",
      company: "Frontier Airlines",
      address1: "123 Idk Rd",
      address2: "",
      city: "Liberty Lake",
      state: "WA",
      postalCode: "99027",
      areaCode: "(305)",
      prefix: "951",
      suffix: "9175",
    },
    {
      id: 14,
      airline: "FA",
      photo: photo,
      seat: "CRY",
      fleet: "101",
      domicile: "GEG",
      nameFirst: "Walter",
      nameLast: "Brooks",
      trainingFacility: "400 Brimmington 09/78",
      company: "Frontier Airlines",
      address1: "505 S Marnie Ave",
      address2: "",
      city: "Mead",
      state: "WA",
      postalCode: "00854",
      areaCode: "(509)",
      prefix: "019",
      suffix: "1947",
    },
    {
      id: 15,
      airline: "UP",
      photo: photo,
      seat: "CPT",
      fleet: "777",
      domicile: "JKL",
      nameFirst: "Amy",
      nameLast: "Stone",
      trainingFacility: "1001 Stone Arch",
      company: "UPS",
      address1: "505 S Marnie Ave",
      address2: "Plot 20",
      city: "Worley",
      state: "ID",
      postalCode: "83830",
      areaCode: "(208)",
      prefix: "991",
      suffix: "0765",
    },
    {
      id: 16,
      airline: "UP",
      photo: photo,
      seat: "YTR",
      fleet: "007",
      domicile: "JFK",
      nameFirst: "James",
      nameLast: "Bond",
      trainingFacility: "MI6",
      company: "UPS",
      address1: "12 Casino Royale Rd",
      address2: "",
      city: "London",
      state: "UK",
      postalCode: "5020",
      areaCode: "(111)",
      prefix: "703",
      suffix: "2020",
    },
    {
      id: 17,
      airline: "UP",
      photo: photo,
      seat: "EXP",
      fleet: "626",
      domicile: "LIH",
      nameFirst: "Stitch",
      nameLast: "Pelekai",
      trainingFacility: "A Seaside Cliff",
      company: "UPS",
      address1: "2245 Road Ln",
      address2: "",
      city: "Kokaua",
      state: "HI",
      postalCode: "02931",
      areaCode: "(754)",
      prefix: "8901",
      suffix: "8833",
    },
  ],
};

export const pilotsSlice = createSlice({
  name: "pilots",
  initialState,
  reducers: {},
});

export const selectPilots = (state) => state.pilots.pilots;

export default pilotsSlice.reducer;
