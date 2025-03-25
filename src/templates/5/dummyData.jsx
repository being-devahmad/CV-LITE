const template10_data = {
  Contact: {
    type: "contact",
    data: [
      {
        type: "name_header",
        data: "John Doe",
      },
      {
        type: "info_section",
        data: [
          {
            title: "Date of birth",
            info: "01/01/1980",
          },
          {
            title: "Nationality",
            info: "Scottish",
          },
          {
            title: "Address",
            info: "1600 Street, 95043 Block, USA",
          },
          {
            title: "Email address",
            info: "hello@email.com",
            link: "mailto:hello@email.com",
          },
          {
            title: "Web",
            info: "www.website.com",
            link: "http://www.website.com",
          },
        ],
      },
    ],
  },
  About: {
    type: "data_section",
    position: "right",
    data: {
      header: "About",
      content: [
        [
          {
            type: "content",
            data: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
        ],
      ],
    },
  },
  Education: {
    type: "data_section",
    position: "right",

    data: {
      header: "Education",
      content: [
        [
          {
            type: "title_header",
            data: `BS in Computer Science`,
            size: "md",
          },
          {
            type: "title_header",
            data: `Oxford University`,
            size: "sm",
          },
          {
            type: "key_elements",
            data: ["2015 – 2017", "UK"],
            elType: "secondary",
          },

          {
            type: "content",
            data: "GPA: 3.98 (Top 7% of the Program)",
          },
          {
            type: "content",
            data: "The 2016 Academic Excellence Award winner",
          },
        ],
      ],
    },
  },
  Experience: {
    type: "data_section",
    position: "right",

    data: {
      header: "Work Experience",
      content: [
        [
          {
            type: "title_header",
            data: `Company `,
            size: "md",
          },
          {
            type: "title_header",
            data: `Senior Developer `,
            size: "sm",
          },
          {
            type: "key_elements",
            data: ["(2017 – 2020", "MOUNT PLEAASANT"],
            elType: "secondary",
          },
          {
            type: "list",
            data: [
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
              `Maecenas nec nibh vel felis condimentum vulputate.`,
              `Nulla in tortor molestie, aliquam neque sed, ullamcorper lacus.`,
            ],
          },
        ],
        [
          {
            type: "title_header",
            data: `Company `,
            size: "md",
          },
          {
            type: "title_header",
            data: `Senior Developer `,
            size: "sm",
          },
          {
            type: "key_elements",
            data: ["(2020 – Present", "MOUNT PLEAASANT"],
            elType: "secondary",
          },
          {
            type: "list",
            data: [
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
              `Maecenas nec nibh vel felis condimentum vulputate.`,
              `Nulla in tortor molestie, aliquam neque sed, ullamcorper lacus.`,
            ],
          },
        ],
      ],
    },
  },

  Skills: {
    type: "data_section",
    position: "right",

    data: {
      header: "Skills",
      content: [
        [
          {
            type: "title_header",
            data: `Software`,
            size: "sm",
          },
          {
            type: "progress",
            data: [
              { label: "JavaScript", progress: 90 },
              { label: "React", progress: 70 },
              { label: "Python", progress: 80 },
              { label: "App Development", progress: 95 },
            ],
          },
        ],
      ],
    },
  },
  Languages: {
    type: "data_section",
    position: "left",

    data: {
      header: "Languages",
      content: [
        [
          {
            type: "circular_progress",
            data: [
              { label: "English", progress: 90 },
              { label: "French", progress: 60 },
            ],
          },
        ],
      ],
    },
  },
  Strengths: {
    type: "data_section",
    position: "left",
    data: {
      header: "Strengths",
      content: [
        [
          {
            type: "key_elements",
            data: [
              "Quick learning",
              "Delegating tasks",
              "Reliability",
              "Precision",
            ],
          },
        ],
      ],
    },
  },
};

export default template10_data;
