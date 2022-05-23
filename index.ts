interface Device {
  os: 'Android' | 'IOS';
  name: string;
  price: number;
}

const Galaxy22: Device = {
  os: 'Android',
  name: 'Galaxy 22',
  price: 1000000
};

const IPhone11: Device = {
  os: 'IOS',
  name: 'I Phone 11',
  price: 2000000
};

const IPad5: Device = {
  os: 'IOS',
  name: 'I Pad 5',
  price: 3000000
};

const devices: Device[] = [Galaxy22, IPhone11, IPad5];

const sales = devices.reduce((a, b) => {
  return a.concat({...b, price: b.price / 2});
}, [] as Device[]);

console.log(sales);
