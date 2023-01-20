declare module '@code-oss-org/watermelondb/observation/observeCount' {
  import { Model, Query } from '@code-oss-org/watermelondb'
  import { Observable } from 'rxjs'

  export default function observeCount<Record extends Model>(
    query: Query<Record>,
    isThrottled: boolean,
  ): Observable<number>
}
