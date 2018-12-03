import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of } from 'rxjs';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { SectorsService } from '../../../services/sectors.service';
import { MessageService } from '../../../services/message.service';
import { HttpClient } from '@angular/common/http';

export class SectorNode {
  children: SectorNode[];
  sector: string;
  hasChildren: boolean;
}

@Component({
  selector: 'app-userSectors',
  templateUrl: './userSectors.component.html',
  styleUrls: ['./userSectors.component.scss']
})


export class UserSectorsComponent implements OnInit {
  ngOnInit(): void {

  }
  @ViewChild('myTree') myTree: jqxTreeComponent;
 
  dataAdapter: any;
  records: any;
  // prepare the data
  source: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private sectorService: SectorsService
  ) { }
 
  ngAfterViewInit(): void {
    this.sectorService.getSectors().subscribe(data => {
      this.source = {
        datatype: 'json',
        datafields: [
          { name: 'id' },
          { name: 'parentid' },
          { name: 'sector' }
        ],
        id: 'id',
        localdata: data
      };
      
      
      console.log(this.source.localdata);
      // create data adapter & perform Data Binding.
      this.dataAdapter = new jqx.dataAdapter(this.source, { autoBind: true });
      // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
      // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
      // specifies the mapping between the 'text' and 'label' fields.  
      this.records = this.dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', 
      [{ name: 'sector', map: 'label' }]);
      console.log(this.records);
    });

    }


  DragEnd($event) {
        console.log(this.myTree.getItems());
      }
}
