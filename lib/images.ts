export const IMAGES = {
  // Original images
  hero: '/images/pexels-ninthgrid-2149521550-30677591.jpg',
  consultation: '/images/pexels-ninthgrid-2149521550-30677597.jpg',
  examRoom: '/images/pexels-ninthgrid-2149521550-30678208.jpg',
  community: '/images/pexels-adamu-galadima-2157072733-37285163.jpg',
  clinical: '/images/pexels-xtrovarts-16903231.jpg',
  outreach: '/images/pexels-mk_photoz-2149411980-33132346.jpg',
  stethoscope: '/images/pexels-anntarazevich-7904481.jpg',
  equipment: '/images/pexels-skylight-views-2151863365-33795605.jpg',

  // Production images (from previous batch)
  heroMain: '/images/pexels-kampus-7551681.jpg',
  heroMobile: '/images/pexels-ai25studioai-7345456.jpg',
  elderlyCare: '/images/pexels-kampus-7551684.jpg',
  nursingCare: '/images/pexels-thirdman-5327862.jpg',
  elderlyHero: '/images/pexels-kampus-7551649.jpg',
  postSurgery: '/images/pexels-jsme-mila-523821574-29372733.jpg',
  palliativeCare: '/images/pexels-kampus-7551672.jpg',
  nutritionCare: '/images/pexels-kampus-7551594.jpg',
  chronicCare: '/images/pexels-ai25studioai-7345459.jpg',
  careExplanation: '/images/pexels-ai25studioai-7345450.jpg',
  drMande: '/images/dr-mande.jpg',

  // New images (from Desktop new-pics)
  doctorExam: '/images/new-pics/pexels-ivan-s-4989149.jpg',
  communityWork: '/images/new-pics/pexels-lagosfoodbank-8248433.jpg',
  emergencyBg: '/images/new-pics/pexels-roger-brown-3435524-5149759.jpg',
  clinicalAlt: '/images/new-pics/pexels-ninthgrid-2149521550-30688589.jpg',

  logo: '/images/logo-roray.png',
} as const;

export type ImageKey = keyof typeof IMAGES;
