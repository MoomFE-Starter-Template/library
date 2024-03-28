import type { E } from '@/index';
import { C, a, b } from '@/index';

describe('test', () => {
  test('should be ok', () => {
    expect(a).toBe(1);

    expect(b).toBeTypeOf('function');
    expect(b()).toBe(2);

    expect(C).toBeTypeOf('function');
    expect(new C().d).toBe(3);

    expectTypeOf<E>().toEqualTypeOf<{ e: number }>();
  });
});
