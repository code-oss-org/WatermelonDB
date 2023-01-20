declare module '@code-oss-org/watermelondb/decorators/lazy' {
  // Copied from lib.es5.d.ts, PropertyDecorator
  function lazy(target: Object, propertyKey: string | symbol): void
  function lazy(): PropertyDecorator
  export default lazy
}
