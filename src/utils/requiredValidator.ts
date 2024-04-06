import { ValidationResult } from '../components/TextField';

export default function requiredValidator(value: string): ValidationResult {
  return !value ? { isValid: false, error: '필수값입니다.' } : { isValid: true };
}
