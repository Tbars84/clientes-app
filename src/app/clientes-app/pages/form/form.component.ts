import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  titulo = 'Crear Cliente';

  errores: string[];

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }

  create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(
        cliente => {
          console.log(cliente);
          this.router.navigate(['/clientes']);
          swal('Nuevo cliente', `El cliente ha sido creado con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  update(): void {
    this.clienteService.update(this.cliente)
      .subscribe(
        json => {
          this.router.navigate(['/clientes']);
          swal('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
