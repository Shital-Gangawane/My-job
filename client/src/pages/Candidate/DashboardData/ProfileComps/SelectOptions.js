import React from "react";

export const genderoption = [
  { label: "Male", value: "option1" },
  { label: "Female", value: "option2" },
  { label: "Other ", value: "option3" },
  // Add more options as needed
];

export const ageoptions = [
  { label: "18-20", value: "option1" },
  { label: "20-25", value: "option2" },
  { label: "25-30", value: "option3" },
  { label: "30-45", value: "option4" },
  { label: "45-50", value: "option5" },
];

// export const qualificationOptions = [
//   { label: "B.Tech", value: "btech" },
//   { label: "B.Sc", value: "bsc" },
//   { label: "M.Tech", value: "mtech" },
//   { label: "M.Sc", value: "msc" },
//   { label: "MBA", value: "mba" },
//   { label: "Ph.D", value: "phd" },
//   { label: "Diploma", value: "diploma" },
//   { label: "Certificate", value: "certificate" },
//   { label: "Associate Degree", value: "associate_degree" },
//   { label: "Bachelor of Arts", value: "ba" },
//   { label: "Master of Arts", value: "ma" },
//   { label: "Doctor of Philosophy", value: "dphil" },
//   { label: "B.Com", value: "bcom" },
//   { label: "M.Com", value: "mcom" },
//   { label: "BBA", value: "bba" },
//   { label: "LLB", value: "llb" },
//   { label: "LLM", value: "llm" },
//   { label: "MD", value: "md" },
//   { label: "MBBS", value: "mbbs" },
//   { label: "BDS", value: "bds" },
//   { label: "MDS", value: "mds" },
//   { label: "B.Pharm", value: "bpharm" },
//   { label: "M.Pharm", value: "mpharm" },
//   { label: "BCA", value: "bca" },
//   { label: "MCA", value: "mca" },
//   { label: "BE", value: "be" },
//   { label: "ME", value: "me" },
//   { label: "B.Arch", value: "barch" },
//   { label: "M.Arch", value: "march" },
//   { label: "BFA", value: "bfa" },
//   { label: "MFA", value: "mfa" },
//   { label: "B.Ed", value: "bed" },
//   { label: "M.Ed", value: "med" },
//   { label: "B.Lit", value: "blit" },
//   { label: "M.Lit", value: "mlit" },
// ];

export const qualifications = [
  {
    label: "B.Tech",
    value: "btech",
    specializations: [
      { label: "Computer Science and Engineering", value: "cse" },
      { label: "Information Technology", value: "it" },
      { label: "Electrical Engineering", value: "ee" },
      { label: "Mechanical Engineering", value: "me" },
      { label: "Civil Engineering", value: "ce" },
      { label: "Electronics and Communication Engineering", value: "ece" },
      { label: "Chemical Engineering", value: "chem_eng" },
      { label: "Aerospace Engineering", value: "aero_eng" },
      { label: "Biotechnology", value: "biotech" },
    ],
  },
  {
    label: "B.Sc",
    value: "bsc",
    specializations: [
      { label: "Physics", value: "physics" },
      { label: "Chemistry", value: "chemistry" },
      { label: "Mathematics", value: "math" },
      { label: "Biology", value: "biology" },
      { label: "Environmental Science", value: "env_sci" },
      { label: "Computer Science", value: "cs" },
      { label: "Zoology", value: "zoology" },
      { label: "Botany", value: "botany" },
    ],
  },
  {
    label: "M.Tech",
    value: "mtech",
    specializations: [
      { label: "Computer Science and Engineering", value: "cse" },
      { label: "Information Technology", value: "it" },
      { label: "Electrical Engineering", value: "ee" },
      { label: "Mechanical Engineering", value: "me" },
      { label: "Civil Engineering", value: "ce" },
      { label: "Electronics and Communication Engineering", value: "ece" },
      { label: "Chemical Engineering", value: "chem_eng" },
      { label: "Aerospace Engineering", value: "aero_eng" },
      { label: "Biotechnology", value: "biotech" },
    ],
  },
  {
    label: "MBA",
    value: "mba",
    specializations: [
      { label: "Finance", value: "finance" },
      { label: "Marketing", value: "marketing" },
      { label: "Human Resources", value: "hr" },
      { label: "Operations Management", value: "operations" },
      { label: "Information Technology", value: "it" },
      { label: "International Business", value: "intl_business" },
      { label: "Supply Chain Management", value: "supply_chain" },
      { label: "Entrepreneurship", value: "entrepreneurship" },
    ],
  },
  {
    label: "Ph.D",
    value: "phd",
    specializations: [
      { label: "Physics", value: "physics" },
      { label: "Chemistry", value: "chemistry" },
      { label: "Mathematics", value: "math" },
      { label: "Biology", value: "biology" },
      { label: "Computer Science", value: "cs" },
      { label: "Engineering", value: "engineering" },
      { label: "Economics", value: "economics" },
      { label: "Psychology", value: "psychology" },
    ],
  },
  {
    label: "Diploma",
    value: "diploma",
    specializations: [
      { label: "Electrical Engineering", value: "ee" },
      { label: "Mechanical Engineering", value: "me" },
      { label: "Civil Engineering", value: "ce" },
      { label: "Computer Science", value: "cs" },
      { label: "Automobile Engineering", value: "auto_eng" },
      { label: "Hotel Management", value: "hotel_mgmt" },
      { label: "Fashion Designing", value: "fashion_design" },
      { label: "Graphic Designing", value: "graphic_design" },
    ],
  },
  {
    label: "B.Com",
    value: "bcom",
    specializations: [
      { label: "Accounting", value: "accounting" },
      { label: "Finance", value: "finance" },
      { label: "Marketing", value: "marketing" },
      { label: "Human Resources", value: "hr" },
      { label: "Economics", value: "economics" },
      { label: "Taxation", value: "taxation" },
      { label: "Business Administration", value: "bus_admin" },
      { label: "International Business", value: "intl_business" },
    ],
  },
  {
    label: "M.Com",
    value: "mcom",
    specializations: [
      { label: "Accounting", value: "accounting" },
      { label: "Finance", value: "finance" },
      { label: "Marketing", value: "marketing" },
      { label: "Human Resources", value: "hr" },
      { label: "Economics", value: "economics" },
      { label: "Taxation", value: "taxation" },
      { label: "Business Administration", value: "bus_admin" },
      { label: "International Business", value: "intl_business" },
    ],
  },
  {
    label: "BBA",
    value: "bba",
    specializations: [
      { label: "Finance", value: "finance" },
      { label: "Marketing", value: "marketing" },
      { label: "Human Resources", value: "hr" },
      { label: "Operations Management", value: "operations" },
      { label: "Information Technology", value: "it" },
      { label: "International Business", value: "intl_business" },
      { label: "Supply Chain Management", value: "supply_chain" },
      { label: "Entrepreneurship", value: "entrepreneurship" },
    ],
  },
  {
    label: "LLB",
    value: "llb",
    specializations: [
      { label: "Corporate Law", value: "corporate_law" },
      { label: "Criminal Law", value: "criminal_law" },
      { label: "Family Law", value: "family_law" },
      { label: "Tax Law", value: "tax_law" },
      { label: "Intellectual Property Law", value: "ip_law" },
      { label: "Environmental Law", value: "env_law" },
      { label: "International Law", value: "intl_law" },
      { label: "Human Rights Law", value: "hr_law" },
    ],
  },
  {
    label: "LLM",
    value: "llm",
    specializations: [
      { label: "Corporate Law", value: "corporate_law" },
      { label: "Criminal Law", value: "criminal_law" },
      { label: "Family Law", value: "family_law" },
      { label: "Tax Law", value: "tax_law" },
      { label: "Intellectual Property Law", value: "ip_law" },
      { label: "Environmental Law", value: "env_law" },
      { label: "International Law", value: "intl_law" },
      { label: "Human Rights Law", value: "hr_law" },
    ],
  },
  {
    label: "MD",
    value: "md",
    specializations: [
      { label: "General Medicine", value: "gen_medicine" },
      { label: "Pediatrics", value: "pediatrics" },
      { label: "Dermatology", value: "dermatology" },
      { label: "Psychiatry", value: "psychiatry" },
      { label: "Cardiology", value: "cardiology" },
      { label: "Neurology", value: "neurology" },
      { label: "Radiology", value: "radiology" },
      { label: "Anesthesiology", value: "anesthesiology" },
    ],
  },
  {
    label: "MBBS",
    value: "mbbs",
    specializations: [
      { label: "General Medicine", value: "gen_medicine" },
      { label: "Pediatrics", value: "pediatrics" },
      { label: "Dermatology", value: "dermatology" },
      { label: "Psychiatry", value: "psychiatry" },
      { label: "Cardiology", value: "cardiology" },
      { label: "Neurology", value: "neurology" },
      { label: "Radiology", value: "radiology" },
      { label: "Anesthesiology", value: "anesthesiology" },
    ],
  },
  {
    label: "BDS",
    value: "bds",
    specializations: [
      { label: "Orthodontics", value: "orthodontics" },
      { label: "Periodontics", value: "periodontics" },
      { label: "Prosthodontics", value: "prosthodontics" },
    ],
  },
];

export const coursesAndSpecializations = {
  certificate: [
    { label: "Web Development", value: "web_development" },
    { label: "Data Science", value: "data_science" },
  ],
  associate_degree: [
    { label: "Business Administration", value: "business_administration" },
    { label: "Information Technology", value: "information_technology" },
  ],
  bachelor_degree: [
    { label: "Computer Science", value: "computer_science" },
    { label: "Mechanical Engineering", value: "mechanical_engineering" },
    { label: "Civil Engineering", value: "civil_engineering" },
    { label: "Electrical Engineering", value: "electrical_engineering" },
  ],
  masters_degree: [
    { label: "MBA", value: "mba" },
    { label: "M.Tech", value: "mtech" },
    { label: "M.Sc in Data Science", value: "msc_data_science" },
  ],
  doctorate_degree: [
    { label: "PhD in Computer Science", value: "phd_computer_science" },
    { label: "PhD in Physics", value: "phd_physics" },
  ],
  diploma: [
    { label: "Graphic Design", value: "graphic_design" },
    { label: "Network Administration", value: "network_administration" },
  ],
};

export const experienceoptions = [
  { label: "Fresher", value: "option0" },
  { label: "1 Year", value: "option1" },
  { label: " 2 Year", value: "option2" },
  { label: "3 Year ", value: "option3" },
  { label: "4 Year", value: "option4" },
  { label: "5 Year", value: "option5" },
  { label: "6 Year", value: "option6" },
  { label: "7 Year ", value: "option7" },
  { label: "8 Year", value: "option8" },
  { label: "9 Year", value: "option9" },
  { label: "10 Year", value: "option10" },
];

export const salaryoptions = [
  { label: "Hourly", value: "option1" },
  { label: " Daily", value: "option2" },
  { label: "Monthly ", value: "option3" },
  { label: "Yearly", value: "option4" },
];

export const industryOptions = [
  { label: "Information Technology", value: "it" },
  { label: "Finance", value: "finance" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Retail", value: "retail" },
  { label: "Construction", value: "construction" },
  { label: "Transportation", value: "transportation" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Hospitality", value: "hospitality" },
];

export const showprofileoptions = [
  { label: "Show", value: true },
  { label: "Hide", value: false },

  // Add more options as needed
];

export const alertoptions = [
  { label: " Daily", value: "option1" },
  { label: "Weekly", value: "option2" },
  { label: "Monthly ", value: "option3" },
];

function SelectOptions() {
  return <div></div>;
}

export default SelectOptions;
