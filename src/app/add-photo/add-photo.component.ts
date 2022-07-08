import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.viewGallery().subscribe(

      (response)=>{

        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
data:any=[
  
    
]
}
