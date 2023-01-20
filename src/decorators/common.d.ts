declare module '@code-oss-org/watermelondb/decorators/common' {
  import { ColumnName } from '@code-oss-org/watermelondb'

  export function ensureDecoratorUsedProperly(
    columnName: ColumnName,
    target: Object,
    key: string,
    descriptor: Object,
  ): void
}
