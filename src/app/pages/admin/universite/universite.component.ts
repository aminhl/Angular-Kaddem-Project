import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUniversites();
  }

  universites!: any;

  getUniversites() {
    this.apiService
      .get('getUniversites')
      .subscribe((universites) => (this.universites = universites));
  }

  deleteUniversite(elementId: number) {
    this.apiService.delete('deleteUniversite', elementId).subscribe(() => null);
    location.reload();
  }

  openAddUniversiteDialog() {
    this.dialog.open(AddUniversiteComponent, { width: '40%' });
  }

  openEditUniversiteDialog(universite: Object) {
    this.dialog.open(EditUniversiteComponent, {
      width: '40%',
      data: { universite },
    });
  }

}