import { Component, OnInit, Input } from "@angular/core";

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
        action: "Action"
    };

    tableData: any = [];

    ngOnInit(): void {

        // call apiHandler to fetch data
        this.tableData.push(
            {
                id: 1,
                name: "Deep Shrestha",
                city: "Kumaripati, Lalitpur",
                email: "deepshrestha83@gmail.com",
                telephoneNo: "9851181046",
                createdAt: new Date()
            },
            {
                id: 2,
                name: "Deepak Shrestha",
                city: "Kupondole, Lalitpur",
                email: "deepak.shrestha@gmail.com",
                telephoneNo: "984123212",
                createdAt: new Date()
            },
            {
                id: 3,
                name: "Pranaya Bahadur Raghubanshi",
                city: "Kupondole, Lalitpur",
                email: "pranaya.raghubanshi@gmail.com",
                telephoneNo: "9841323423",
                createdAt: new Date()
            }
        )
    }
    
}