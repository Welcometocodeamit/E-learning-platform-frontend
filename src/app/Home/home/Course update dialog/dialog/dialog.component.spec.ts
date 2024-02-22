import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';

// describe('DialogComponent', () => {
//   let component: DialogComponent;
//   let fixture: ComponentFixture<DialogComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [DialogComponent],
//       imports:[MatDialogModule, MatSnackBarModule, HttpClientTestingModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
//       providers: [
//         { provide: MatDialogRef, useValue: {} },
//         { provide: MAT_DIALOG_DATA, useValue: {} },
//         { provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) },
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               paramMap: convertToParamMap({ id: 'your-test-id' }) // Provide any required paramMap values
//             }
//           }
//         }
//       ]
//     });
//     fixture = TestBed.createComponent(DialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
