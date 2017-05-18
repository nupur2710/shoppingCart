import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
        firebase.initializeApp({
            'apiKey': "AIzaSyD2hMDm_3hqsE0Jp2onRovmbaxu0XAP68E",
            'authDomain': "ng-recipe-book-14c67.firebaseapp.com"
        });
    }

}