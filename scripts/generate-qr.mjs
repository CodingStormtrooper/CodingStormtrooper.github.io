import QRCode from 'qrcode';
import { writeFileSync } from 'fs';

const url = 'https://codingstormtrooper.github.io/baby-shower/';
const output = 'src/assets/baby-shower-qr.svg';

const svg = await QRCode.toString(url, {
  type: 'svg',
  color: { dark: '#27272a', light: '#ffffff' },
  margin: 2,
  width: 256,
});

writeFileSync(output, svg);
console.log(`QR code written to ${output}`);
