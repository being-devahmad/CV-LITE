import Template1 from "@/templates/1";
import Template2 from "@/templates/2";
import Template3 from "@/templates/3";
import Template4 from "@/templates/4";
import Template5 from "@/templates/5";
import Template6 from "@/templates/6";
import Template7 from "@/templates/7";
import Template8 from "@/templates/8";
import Template9 from "@/templates/9";
import Template10 from "@/templates/10";

import template1_data from "@/templates/1/dummyData";
import template2_data from "@/templates/2/dummyData";
import template3_data from "@/templates/3/dummyData";
import template4_data from "@/templates/4/dummyData";
import template5_data from "@/templates/5/dummyData";
import template6_data from "@/templates/6/dummyData";
import template7_data from "@/templates/7/dummyData";
import template8_data from "@/templates/8/dummyData";
import template9_data from "@/templates/9/dummyData";
import template10_data from "@/templates/10/dummyData";

import london from "@/assets/resumes/london.jpg";
import paris from "@/assets/resumes/paris.jpg";
import copenhagan from "@/assets/resumes/copenhagen.jpg";
import stockholm from "@/assets/resumes/stockholm.png";
import chicago from "@/assets/resumes/chicago.jpg";
import rotterdam from "@/assets/resumes/rotterdam.jpg";
import zurich from "@/assets/resumes/zurich.png";
import oslo from "@/assets/resumes/960.png";
import berlin from "@/assets/resumes/2560.png";
import madrid from "@/assets/resumes/image.jpg";

// Mapping for template components and images
export const templateMapping: any = {
  London: {
    id: 0,
    Template: Template1,
    data: template1_data,
    image: london,
  },
  Paris: {
    id: 1,
    Template: Template2,
    data: template2_data,
    image: paris,
    type: "leftRight",
  },
  Oslo: {
    id: 2,
    Template: Template3,
    data: template3_data,
    image: oslo,
  },
  Berlin: {
    id: 3,
    Template: Template4,
    data: template4_data,
    image: berlin,
  },
  Chicago: {
    id: 4,
    Template: Template5,
    data: template5_data,
    image: chicago,
  },
  Rotterdam: {
    id: 5,
    Template: Template6,
    data: template6_data,
    image: rotterdam,
    type: "leftRight",
  },
  Madrid: {
    id: 6,
    Template: Template7,
    data: template7_data,
    image: madrid,
    type: "leftRight",
  },
  Copenhagen: {
    id: 7,
    Template: Template8,
    data: template8_data,
    image: copenhagan,
    type: "leftRight",
  },
  Stockholm: {
    id: 8,
    Template: Template9,
    data: template9_data,
    image: stockholm,
    type: "leftRight",
  },
  Zurich: {
    id: 9,
    Template: Template10,
    data: template10_data,
    image: zurich,
    type: "leftRight",
  },
};
