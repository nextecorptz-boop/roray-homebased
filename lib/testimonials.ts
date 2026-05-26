export interface Testimonial {
  lang: 'en' | 'sw';
  quote: string;
  name: string;
  location: string;
  service: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    lang: 'en',
    quote: 'The nurse arrived within two hours of our call. My father received attentive, professional care throughout his recovery. We are deeply grateful for the Roray team.',
    name: 'J. Mwakyusa',
    location: 'Dodoma',
    service: 'Post-Surgery Recovery',
  },
  {
    lang: 'en',
    quote: 'Roray gave our family peace of mind during a very difficult time. The care provided to our elderly mother was compassionate and thoroughly professional.',
    name: 'C. Mwangoka',
    location: 'Dodoma',
    service: 'Elderly Care',
  },
  {
    lang: 'sw',
    quote: 'Huduma ya nyumbani iliyotolewa na Roray ilikuwa ya hali ya juu sana. Muuguzi alikuja kwa wakati na akamhudumia mama yangu kwa upole na weledi mkubwa.',
    name: 'A. Msangi',
    location: 'Dodoma',
    service: 'Uuguzi wa Nyumbani',
  },
  {
    lang: 'sw',
    quote: 'Nilipopiga simu usiku wa manane, timu ya Roray ilijibu haraka na msaada ulifika ndani ya saa moja. Ninashukuru sana kwa huduma hii ya dharura.',
    name: 'S. Mwakifuna',
    location: 'Dodoma',
    service: 'Msaada wa Dharura',
  },
];
