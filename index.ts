interface Device {
  os: 'Android' | 'IOS';
  name: string;
  price: number;
}

const devices: Device[] = [
  {
    os: 'Android',
    name: 'Galaxy 22',
    price: 1000000
  },
  {
    os: 'IOS',
    name: 'I Phone 11',
    price: 2000000
  },
  {
    os: 'IOS',
    name: 'I Pad 5',
    price: 3000000
  }
];

console.log(devices.map(({price}) => price));
console.log(devices.filter(({os}) => os === 'IOS'));
