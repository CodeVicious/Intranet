import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of } from 'rxjs';

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


export class UserSectorsComponent {

  nestedTreeControl: NestedTreeControl<SectorNode>;
  nestedDataSource: MatTreeNestedDataSource<SectorNode>;
  dataChange: BehaviorSubject<SectorNode[]> = new BehaviorSubject<SectorNode[]>([]);

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<SectorNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        sector: 'folder',
        hasChildren: true,
        children: [
          {
            sector: 'test3',
            children: [],
            hasChildren: false
          }
        ],
      },
      {
        sector: 'test2',
        hasChildren: false,
        children: [],
      },
    ]);
  }

  private _getChildren = (node: SectorNode) => of(node.children);

  hasNestedChild = (_: number, nodeData: SectorNode) => (nodeData.hasChildren);
}
