import { Component, OnInit, Input } from "@angular/core";
import { formatDate } from "@angular/common";

@Component({
    selector: "app-publisher-list",
    template: require("./publisher-list.component.html")
})
export class PublisherListComponent implements OnInit {

    @Input() isLoggedIn: Boolean;
    constructor(){}

    tableHeaders = {
        id: "#",
        name: "Full Name",
        city: "City",
        email: "Email",
        telephoneNo: "Telephone No",
        createdAt: "Created At",
        action: "Action",
        searchFilter: ["name", "city", "email", "telephoneNo"]
    };

    paginationConfig = {
        data: [],
        currentPage: 1,
        recordPerPage: 3,
        totalRecordsCount: 0,
    }; 

    tableData: any = [];

    ngOnInit(): void {

        // call apiHandler to fetch data

        this.paginationConfig = {
            ...this.paginationConfig,
            totalRecordsCount: 6
        }

        this.tableData.push(
            {
                id: 1,
                name: "Deep Shrestha",
                city: "Kumaripati, Lalitpur",
                email: "deepshrestha83@gmail.com",
                telephoneNo: "9851181046",
                createdAt:  formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US')
            },
            {
                id: 2,
                name: "Deepak Shrestha",
                city: "Kalimati, Kathmandu",
                email: "deepak.shrestha@gmail.com",
                telephoneNo: "984123212",
                createdAt: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US')
            },
            {
                id: 3,
                name: "Pranaya Bahadur Raghubanshi",
                city: "Kupondole, Lalitpur",
                email: "pranaya.raghubanshi@gmail.com",
                telephoneNo: "9841323423",
                createdAt: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US')
            },
            {
                id: 4,
                name: "Kamlesh Shrestha",
                city: "Dholahiti, Lalitpur",
                email: "kamlesh.shrestha@gmail.com",
                telephoneNo: "9851090920",
                createdAt:  formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US')
            },
            {
                id: 5,
                name: "Deepa Dawadi",
                city: "Imadole, Lalitpur",
                email: "deepa.dawadi@gmail.com",
                telephoneNo: "9841567289",
                createdAt: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US')
            },
            {
                id: 6,
                name: "Bikesh Rajbanshi",
                city: "Samakhushi, Kathmandu",
                email: "bikesh.rajbanshi@gmail.com",
                telephoneNo: "9841672389",
                createdAt: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US')
            }
        )
    }
    
}