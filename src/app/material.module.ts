import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatTabsModule, 
      MatInputModule,
      MatDividerModule
],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule, 
    MatInputModule,MatDividerModule]
})
export class MaterialModule { }
