import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {WarehouseService} from "../service/warehouse.service";

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  displayedColumns = ['id', 'productName', 'rackId', 'warehouseName', 'orderNumber', 'notes', 'quantity', 'size', 'inTime', 'outTime'];
  dataSource: any;
  pageIndex = 0;
  pageSize = 10;
  length = 0;
  search: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: WarehouseService) {

  }

  onSearch() {
    this.loadSearch();
  }

  loadSearch() {
    if (this.search !== null && this.search !== '') {
      this.service.searchProducts(this.search, this.pageIndex, this.pageSize).subscribe((data: any) => {
          this.dataSource = new MatTableDataSource(data.products);
          this.length = data.totalRecords;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadSearch();
  }


}



