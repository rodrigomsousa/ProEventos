import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  get f(): any { return this.form.controls; }

  public validation(): void {
    console.log("teste");
    this.form = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', Validators.required],
      dataEvento: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      //lote: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imagemURL: ['', Validators.required]
    });
  }

  public resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();
  }

}
