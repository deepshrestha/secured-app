import { Component, OnInit, Input, Inject } from "@angular/core";
import * as $ from 'jquery';

/* document.addEventListener('click', function(event) {
    if(!(event.target instanceof HTMLButtonElement)) {
        return;
    }
    if(event.target.dataset.row) {
        console.log(JSON.parse(event.target.dataset.row));
        (<HTMLButtonElement>document.querySelector('.modal-body')).innerHTML = JSON.parse(event.target.dataset.row);
    }

    (<HTMLButtonElement>document.querySelector('#show')).style.display = "block";
    
}) */

/* $(document).on("click", ".select-row", function(event) {
    console.log(event)
    $("#show").css("display", "block");
    const selectProperty = $(this)
            .attr("id")
            .replace("showModal row-", "")
            .split("@");
    const action = selectProperty[0];
    const rowId = selectProperty[1];

    console.log(action, rowId);
    console.log($(this).data('row'));

    $('.modal-body').text(JSON.stringify($(this).data('row')))
}); */

@Component({
    selector: 'app-table',
    template: require('./table.component.html'),
})
export class TableComponent implements OnInit {

    @Input() tableHeaders: Object;
    @Input() tableData: Array<any>;
    @Input() paginationConfig: Object;
    @Input() modalTitle: String;

    tableColumns: String = '';
    tableDataColumns: String = '';
    tableHeadersKeyList = [];
    paginateData = [];

    onToggle() {
        console.log("asdasd");
        $('#show').show();
    }

    getTableData(tableData: any[]) : any[] {
        let indexOfFirstRecord = (this.paginationConfig["currentPage"] - 1) * this.paginationConfig["recordPerPage"];
        let indexOfLastRecord = this.paginationConfig["currentPage"] * this.paginationConfig["recordPerPage"];
        const data = tableData.slice(
            indexOfFirstRecord,
            indexOfLastRecord
        );

        console.log(data)

        return this.paginateData = data;
    }

    onClickHandler = e => {
        let column = e.target.dataset.column;
        let order = e.target.dataset.order;
        let newTableData = [...this.paginateData];
        
        if (order === "desc") {
            e.target.setAttribute("data-order", "asc");
            e.target.setAttribute("class", `headerSortDown table-${column}`);
            newTableData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
        } else {
            e.target.setAttribute("data-order", "desc");
            e.target.setAttribute("class", `headerSortUp table-${column}`);
            newTableData.sort((a, b) => (a[column] < b[column] ? 1 : -1));
        }
        this.paginateData = newTableData;
    };

    timeout = null;
    searchHandler = event => {
        const { value } = event.target;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            let data = this.tableData;
            console.log(data)
            let result = new RegExp(value, "ig");

            let searchKey = this.tableHeaders["searchFilter"];
            const search = data.filter(item => {
                for (let i = 0; i < searchKey.length; i++) {
                    if(item[searchKey[i]] !== null && item[searchKey[i]] !== undefined) {
                        if(item[searchKey[i]].length > 0) {
                            for (let j = 0; j < item[searchKey[i]].length; j++) {
                                if(result.test(item[searchKey[i]][j].name)) return true;
                            }
                        }
                        if (result.test(item[searchKey[i]])) return true;
                    }
                }
            });
            
            this.paginationConfig = {
                ...this.paginationConfig,
                data: search,
                currentPage: 1,
                totalRecordsCount: search.length
            }

            this.paginateData = this.getTableData(search);
        }, 500);
        
    }

    paginateHandler = () => {
        this.getTableData(this.paginationConfig["data"].length > 0 ? this.paginationConfig["data"] : this.tableData);
    }

    ngOnInit(): void {
        this.getTableData(this.tableData);
        this.tableHeadersKeyList = Object.keys(this.tableHeaders)
    }
    
}