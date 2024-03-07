// TODO: most likely will be enum
type ParcelStatus =
  | 'pending'
  | 'picked-up'
  | 'delivering'
  | 'delivered'
  | 'returned';

type ParcelSize = {
  width: number;
  height: number;
  length: number;
};

class Parcel {
  private id: string;
  private weight: number;
  private size: ParcelSize;
  private status: ParcelStatus;

  constructor(
    id: string,
    weight: number,
    size: ParcelSize,
    status: ParcelStatus,
  ) {
    this.id = id;
    this.weight = weight;
    this.size = size;
    this.status = status;
  }
}

export { Parcel };
export type { ParcelStatus, ParcelSize };
