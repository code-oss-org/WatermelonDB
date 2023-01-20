declare module '@code-oss-org/watermelondb/observation/observeQuery' {
  import { Model, Query } from '@code-oss-org/watermelondb'
  import { Observable } from 'rxjs'

  export default function observeQuery<Record extends Model>(
    query: Query<Record>,
  ): Observable<Record[]>
}
