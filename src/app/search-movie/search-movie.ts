import { inject, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { isRequiredValidator } from '../validators/id-or-title.validator';
import { rangeDateValidator } from '../validators/year-range.validator';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-search-movie',
  styleUrl: './search-movie.css',
  templateUrl: './search-movie.html',
})
export class SearchMovie {
  private fb = inject(FormBuilder);
  searchForm = this.fb.group({
    identification: this.fb.group(
    {
      id: [''],
      title: [''],
    },
    { validators: isRequiredValidator('id', 'title') }
  ),
  type: ['séries'],
  year: ['', [Validators.required, rangeDateValidator(1900, new Date().getFullYear())]],
  plot: [''],
})

  constructor() {
    this.searchForm.patchValue({ plot: 'courte'})
  }
  onSubmit(): void {
    console.log(this.searchForm.value);
  }
}
