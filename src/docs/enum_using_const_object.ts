export const ENUM_OBJECT_CONFIG = {
  FOO: 'foo',
  BAR: 'bar',
  BAZ: 'baz',
} as const;

export type TypeofConstObject = typeof ENUM_OBJECT_CONFIG;
export type KeyofTypeofConstObject = keyof typeof ENUM_OBJECT_CONFIG;

export type EnumObjectConfig = typeof ENUM_OBJECT_CONFIG[keyof typeof ENUM_OBJECT_CONFIG];
