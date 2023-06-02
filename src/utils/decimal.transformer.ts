import { ValueTransformer } from 'typeorm';
import Decimal from 'decimal.js';

export class DecimalTransformer implements ValueTransformer {
  to(value: Decimal): string {
    return value.toString();
  }

  from(value: string): Decimal {
    return new Decimal(value);
  }
}
