declare module '@code-oss-org/watermelondb/Query/helpers' {
  import { QueryDescription } from '@code-oss-org/watermelondb/QueryDescription'
  import { TableName } from '@code-oss-org/watermelondb'
  import { AssociationInfo, Associations } from '@code-oss-org/watermelondb/Model'

  export const getSecondaryTables: QueryDescription

  export const getAssociations: (
    table: TableName<any>[],
    associations: Associations,
  ) => [TableName<any>, AssociationInfo][]
}
