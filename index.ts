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

let devices: Device[] = [Galaxy22, IPhone11, IPad5];

const prevDevices = devices;
devices.push(Galaxy22);

console.log(prevDevices === devices);

devices = devices.concat(Galaxy22);

console.log(prevDevices === devices);
