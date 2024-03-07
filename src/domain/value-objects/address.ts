class Address {
  constructor(
    public street: string,
    public city: string,
    public zipCode: string,
    public country: string,
    public addressLine1: string,
    public state?: string,
    public addressLine2?: string,
  ) {}
}

export { Address };
