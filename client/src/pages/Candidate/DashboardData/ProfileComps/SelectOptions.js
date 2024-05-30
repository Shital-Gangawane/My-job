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

export const qualificationOptions = [
  { label: "Certificate", value: "certificate" },
  { label: "Associate Degree", value: "associate_degree" },
  { label: "Bachelor Degree", value: "bachelor_degree" },
  { label: "Master's Degree", value: "masters_degree" },
  { label: "Doctorate Degree", value: "doctorate_degree" },
  { label: "Diploma", value: "diploma" },
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

export const categoriesoptions = [
  { label: "Advertising", value: "option1" },
  { label: " Application", value: "option2" },
  { label: "Customer ", value: "option3" },
  { label: "Design", value: "option4" },
  { label: "Developer", value: "option5" },
];

export const showprofileoptions = [
  { label: "Show", value: true },
  { label: "Hide", value: false },

  // Add more options as needed
];

function SelectOptions() {
  return <div></div>;
}

export default SelectOptions;
