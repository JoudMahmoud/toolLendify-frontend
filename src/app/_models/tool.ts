export interface Tool {
  name: string;
  description: string;
  image: string;
  model: number;
  PricePerDay: number;
  isAvailable: boolean;
  ownerId: string;
  caregoryName: string;

  styleAvailable: boolean;
  availableMessage: string;
}
