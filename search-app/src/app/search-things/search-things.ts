import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap, catchError, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-things',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-things.html',
  styleUrl: './search-things.scss'
})
export class SearchThings implements OnInit {
  searchControl = new FormControl<string>('', { nonNullable: true });
  sugestions: string[] = [];

  // private http = inject(HttpClient);

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      filter(value => value.length >= 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value =>
        this.fakeSearch(value)
      )
    ).subscribe(results => {
      this.sugestions = results;
      console.log(this.sugestions,"here");
    });
  }

  fakeSearch(query: string): Observable<string[]> {
    const items = ['apple', 'banana', 'cherry', 'mulberry', 'guavava'];
    const filtered = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filtered);
    return of(filtered);
  }
}