import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  addPropertyFrom: any
  propertyList: any = [];
  constructor(private fb: FormBuilder, private propertyService: PropertyService) {
    this.addPropertyFrom = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.listPropertRecord()
  }
  submit() {
    if (this.addPropertyFrom?.invalid) {
      return
    }
    alert('Are you sure want to add this data!');
    this.propertyService.addRecord(this.addPropertyFrom.value).subscribe(res => {
      this.addPropertyFrom.reset();
      alert('Data saved successfully!');
      this.listPropertRecord();
    })
  }
  
  get f() {
    return this.addPropertyFrom.controls;
  }
  //list
  listPropertRecord() {
    this.propertyService.allRecord().subscribe(res => {
      this.propertyList = res.data;
    })
  }
  //delete
  deletePropertyRecord(id: any) {
    this.propertyService.deleteRecord(id).subscribe(res => {
      this.listPropertRecord();
      alert('Deleted successfully!');
    })
  }

}
