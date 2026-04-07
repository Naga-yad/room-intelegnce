export interface Room {
  id: string;
  number: string;
  type: 'Suite' | 'Deluxe' | 'Standard' | 'Executive';
  status: 'Available' | 'Occupied' | 'Maintenance';
  guestName?: string;
  duration?: string;
  floor: number;
  devices: {
    temperature: number;
    lights: boolean;
    motion: 'Active' | 'Idle';
    ac: {
      temp: number;
      status: 'Cooling' | 'Heating' | 'Off';
    };
  };
  connectivity: 'online' | 'offline' | 'warning';
}

export const ROOMS_DATA: Room[] = [
  {
    id: '1',
    number: '401',
    type: 'Suite',
    status: 'Occupied',
    guestName: 'Alexander Wright',
    duration: '3 nights',
    floor: 4,
    devices: {
      temperature: 22.5,
      lights: true,
      motion: 'Active',
      ac: { temp: 21, status: 'Cooling' }
    },
    connectivity: 'online'
  },
  {
    id: '2',
    number: '402',
    type: 'Deluxe',
    status: 'Available',
    floor: 4,
    devices: {
      temperature: 24.0,
      lights: false,
      motion: 'Idle',
      ac: { temp: 24, status: 'Off' }
    },
    connectivity: 'online'
  },
  {
    id: '3',
    number: '305',
    type: 'Standard',
    status: 'Maintenance',
    floor: 3,
    devices: {
      temperature: 26.5,
      lights: true,
      motion: 'Active',
      ac: { temp: 20, status: 'Cooling' }
    },
    connectivity: 'warning'
  },
  {
    id: '4',
    number: '501',
    type: 'Executive',
    status: 'Occupied',
    guestName: 'Sophia Chen',
    duration: '5 nights',
    floor: 5,
    devices: {
      temperature: 21.8,
      lights: true,
      motion: 'Active',
      ac: { temp: 22, status: 'Cooling' }
    },
    connectivity: 'online'
  },
  {
    id: '5',
    number: '202',
    type: 'Deluxe',
    status: 'Occupied',
    guestName: 'Marcus Thorne',
    duration: '2 nights',
    floor: 2,
    devices: {
      temperature: 23.2,
      lights: false,
      motion: 'Idle',
      ac: { temp: 23, status: 'Off' }
    },
    connectivity: 'online'
  },
  {
    id: '6',
    number: '108',
    type: 'Standard',
    status: 'Available',
    floor: 1,
    devices: {
      temperature: 24.5,
      lights: false,
      motion: 'Idle',
      ac: { temp: 24, status: 'Off' }
    },
    connectivity: 'offline'
  }
];

export const OCCUPANCY_TREND = [
  { name: 'Day 1', value: 65 },
  { name: 'Day 5', value: 72 },
  { name: 'Day 10', value: 68 },
  { name: 'Day 15', value: 85 },
  { name: 'Day 20', value: 78 },
  { name: 'Day 25', value: 82 },
  { name: 'Day 30', value: 87 },
];

export const GUEST_FEEDBACK = [
  { name: 'Good', value: 124, color: '#22c55e' },
  { name: 'Medium', value: 45, color: '#eab308' },
  { name: 'Bad', value: 12, color: '#ef4444' },
];

export const EFFICIENCY_DATA = [
  { name: '00:00', value: 45 },
  { name: '04:00', value: 30 },
  { name: '08:00', value: 60 },
  { name: '12:00', value: 85 },
  { name: '16:00', value: 75 },
  { name: '20:00', value: 90 },
  { name: '23:59', value: 65 },
];
