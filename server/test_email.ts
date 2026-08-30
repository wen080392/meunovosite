import { sendLeadEmail } from './src/mailer'; sendLeadEmail({name: 'Test', email: 'vibetechvibe92@gmail.com', source: 'contact'}, 'contact').then(() => console.log('Done')).catch(console.error);
