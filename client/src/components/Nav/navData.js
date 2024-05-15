export const navigationLinks = [
  {
    label: "Home",
    url: "/",
    hasDropdown: true,
    dropdownOptions: [
      {
        label: "Option 1",
        url: "#",
      },
      {
        label: "Option 2",
        url: "#",
      },
      // Add more options as needed
    ],
  },
  {
    label: "Find Jobs",
    url: "/job/search-results",
    hasDropdown: true,
    dropdownOptions: [
      {
        label: "Option 1",
        url: "#",
      },
      {
        label: "Option 2",
        url: "#",
      },
      // Add more options as needed
    ],
  },
  {
    label: "Employers",
    url: "/employer/dashboard",
    hasDropdown: true,
    dropdownOptions: [
      {
        options: [
          { label: "Employers-List", url: "#" },
          { label: "Employers-Grid", url: "#" },
          { label: "Employers-Top Map", url: "#" },
        ],
        label: "Employers Style",
      },
      {
        label: "Employers Single",
        url: "#",
        options: [{ label: "Login/Register", url: "/login" }],
      },
      // Add more options as needed
    ],
  },
  // {
  //   label: "Candidates",
  //   url: "/candidate/dashboard",
  //   hasDropdown: true,
  //   dropdownOptions: [
  //     {
  //       options: [
  //         { label: "Job List", url: "#" },
  //         { label: "Courses", url: "#" },
  //         { label: "Learn", url: "#" },
  //         { label: "Read", url: "#" },
  //       ],
  //       label: "Candidates Style",
  //     },
  //     {
  //       label: "Candidates Single",
  //       url: "#",
  //       options: [
  //         { label: "Login/Register", url: "/login" },
  //         { label: "Register Candidate", url: "#" },
  //         { label: "Interview Tips", url: "#" },
  //       ],
  //     },
  //     // Add more options as needed
  //   ],
  // },
  {
    label: "Pages",
    url: "",
    hasDropdown: true,
    dropdownOptions: [
      {
        label: "",
        options: [
          {
            label: "Blog",
            url: "#",
          },
          {
            label: "About Us",
            url: "#",
          },
          {
            label: "Contact",
            url: "#",
          },
          {
            label: "FAQs",
            url: "#",
          },
        ],
      },
    ],
  },
];
