import { Component, OnInit } from "angular2/core";
import { FormBuilder, ControlGroup, Validators } from "angular2/common";
import { FirebaseService } from "../shared/firebase.service";
import { Router } from "angular2/router";
@Component({
    selector: "arc-new-item",
    template: `
    <form (ngSubmit)="onSubmit(myForm)" [ngFormModel]="myForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input [ngFormControl]="myForm.controls['title']" type="text" class="form-control" id="title" placeholder="title">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input [ngFormControl]="myForm.controls['description']" type="text" class="form-control" id="description" placeholder="description">
      </div>
      <div class="form-group">
        <label for="resource-url">Resource URL</label>
        <input [ngFormControl]="myForm.controls['resourceUrl']" type="text" class="form-control" id="resource-url" placeholder="resource url">
      </div>
      <div class="form-group">
        <label for="tag">Tag</label>
        <select [ngFormControl]="myForm.controls['tag']">
            <option>Tutorial</option>
            <option>Resource</option>
        </select>
      </div>

      <button type="submit" [disabled]="!myForm.valid" class="btn btn-default">Submit</button>
    </form>
    <p> {{ response }} </p>
    `,
    providers: [FirebaseService]

})

export class ArcNewItemComponent implements OnInit {
  response: string;
  id: number;

  myForm: ControlGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): any {
    this.myForm = this._formBuilder.group({
      "title": ["", Validators.required],
      "description": ["", Validators.required],
      "resourceUrl": ["", Validators.required],
      "tag": ["", Validators.required]
    });
  }

  onSubmit(form: ControlGroup) {
    this.id = Date.now();

    this._firebaseService.setResource(this.id, form.value.title, form.value.description, form.value.resourceUrl, form.value.tag).subscribe(
      resource => this.response = JSON.stringify(resource),
      error => console.log(error)
    );

    this.router.navigate(["Root"]);
  }
}
