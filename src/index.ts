type FieldsNonNullable<T> = {
  [P in keyof T]: NonNullable<T[P]>
}

export function letIf<N extends unknown[], R>(
  ...args: [...N, (...args: FieldsNonNullable<N>) => R]
): R | undefined {
  const callback = args.pop() as (...args: FieldsNonNullable<N>) => R
  if (args.every($0 => $0 !== undefined && $0 !== null)) {
    const requiredArgs = args as FieldsNonNullable<N>
    return callback.call(null, ...requiredArgs)
  }
  return undefined
}
