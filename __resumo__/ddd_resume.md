## Chapter 1:

### Subdomains:

#### Core Subdomain (Subdomínio Principal):

- This is the most critical part of the system that provides a unique competitive advantage.

#### example:

in a fraud detection sistem that the evaluation is made manualy buy employees, the work done by the employees is the principal, the software is a suporte subdomain

#### Generic Subdomain:

- A common reusable domain that does not provide competitive advantage
- Can be replaced with a third-party services

#### example:

- Authentication & Authorization in most applications is generic because it's not unique to the business.
- Payment processing (if using a third-party like Stripe) can be considered generic.

#### Supporting Subdomain:

- Important for the business but not the main competitive advantage.
- It supports the core subdomain but does not need to be as optimized.

#### example:

In an e-commerce system, the customer support ticket system is important but does not give a unique market advantage.

## Chapter 3:

### Value object vs Entites

#### 5 years old explanation

An entity is like your favorite teddy bear. Even if there are other teddy bears that look exactly the same, you can IDENTIFY yours.
A value object is like a balloon. If you have a red balloon and I give you another red balloon, you don’t care if it’s the exact same balloon. They are the same thing because their color and size are what matter, not their identity.

#### Value Object:

A Value Object is defined by its attributes rather than a unique identity. They are immutable and used for representing concepts like Money, Address, or Date Range.

#### Example:

```typescript
class CPF {
  private constructor(private readonly value: string) {
    if (!CPF.isValid(value)) {
      throw new Error("Invalid CPF");
    }
  }

  static create(value: string): CPF {
    return new CPF(CPF.clean(value));
  }

  static isValid(value: string): boolean {
    return /^\d{11}$/.test(CPF.clean(value));
  }

  static clean(value: string): string {
    return value.replace(/\D/g, "");
  }

  static format(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  equals(other: CPF): boolean {
    return this.value === other.value;
  }
}
```

#### Entities:

An Entity is an object that is defined by a unique identity rather than just its attributes. Entities typically represent domain concepts like Users, Orders, or Products.

#### Example:

```typescript
class User {
  constructor(
    public readonly id: string,
    public name: string,
    public cpf: CPF,
    private isActive: boolean = true
  ) {}

  deactivate(): void {
    this.isActive = false;
  }

  activate(): void {
    this.isActive = true;
  }

  status(): string {
    return this.isActive ? "Active" : "Inactive";
  }

  equals(other: User): boolean {
    return this.id === other.id;
  }
}

// Example usage:
const cpf = CPF.create("123.456.789-09");
const user = new User("1", "John Doe", cpf);

console.log(user.status()); // "Active"
user.deactivate();
console.log(user.status()); // "Inactive"
```

### Bounded Context:
