import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BunsService } from '@services/buns.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  count: FormControl;
  loading: boolean = false;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder,
    private bunsService: BunsService) {
    this.count = this.fb.control(0, Validators.required)
  }

  ngOnInit(): void {

  }

  start(): void{
    if (this.count.invalid && this.count.value <= 0) return;
    this.loading = true;
    this.bunsService.createBunsList(this.count.value)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((res) => {
      console.log(res);
      setTimeout(() => {
        this.loading = false;
      }, 10000);

    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
