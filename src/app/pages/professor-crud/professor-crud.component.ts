import { Component } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';
import { MenuComponent } from "../../components/menu/menu.component";
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-professor-crud',
  standalone: true,
  imports: [MenuComponent, MatFormField, MatInputModule, MatIconModule, MatPaginatorModule, MatTableModule],
  templateUrl: './professor-crud.component.html',
  styleUrl: './professor-crud.component.scss'
})
export class ProfessorCrudComponent {
  constructor(private professorService: ProfessorService) { }

  displayedColumns: string[] = ['id', 'nome', 'cep', 'logradouro', 'numero'];

  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  //-----

  listarProfessores() {
      this.professorService.listar().subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
      }
    });
  }
}
