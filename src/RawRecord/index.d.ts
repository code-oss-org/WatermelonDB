declare module '@code-oss-org/watermelondb/RawRecord' {
  import { ColumnName, ColumnSchema, RecordId, TableSchema } from '@code-oss-org/watermelondb'
  import { SyncStatus } from '@code-oss-org/watermelondb/Model'

  export type DirtyRaw = { [id: string]: any }

  export interface RawRecord {
    id: RecordId
    _status: SyncStatus
    _changed: string
    last_modified: number | null
  }

  export function sanitizedRaw(dirtyRaw: DirtyRaw, tableSchema: TableSchema): RawRecord

  export function setRawSanitized(
    rawRecord: RawRecord,
    columnName: ColumnName,
    value: any,
    columnSchema: ColumnSchema,
  ): void
}
