import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-image-comparision',
  templateUrl: './image-comparision.component.html',
  styleUrls: ['./image-comparision.component.css']
})
export class ImageComparisionComponent implements OnInit {
  result: any = [];
  tableData: any = []
  page : number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData()
      .subscribe((data: any) => {
        this.result = data.filter(function(res:any) {          
          return res;
        });
      });
  }

  public addItem(item:any): void { 
    alert("Data Added Successfully in Table")   
    this.tableData.push({
        id: item.id,
        title: item.title,
        url: item.url,
        thumbnailUrl: item.thumbnailUrl
    })
  }

  deleteRow(item:any){
    alert("Are you sure you want to delete")
    const index = this.tableData.indexOf(item);
    this.tableData.splice(index, 1);
  }

}
