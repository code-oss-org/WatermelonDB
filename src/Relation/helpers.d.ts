declare module '@code-oss-org/watermelondb/Relation/helpers' {
  import { Model, Relation } from '@code-oss-org/watermelondb'
  import { Observable } from 'rxjs'

  export function getImmutableObservable<T extends Model>(
    relation: Relation<T>,
  ): Observable<T | undefined>

  export function getObservable<T extends Model>(relation: Relation<T>): Observable<T | undefined>

  export function createObservable<T extends Model>(
    relation: Relation<T>,
  ): Observable<T | undefined>
}
