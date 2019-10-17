import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Victor',
        lastName: 'Lo',
        course: 'IS51',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Anderson',
        course: 'IS51',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Alucard',
        lastName: 'Dracula',
        course: 'IS51',
        editMode: false
      }
    ];
  }

  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }

  removeStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;

    this.sort();
  }

sort() {
  this.studentArray.sort((a: IStudent, b: IStudent) => {
    return a.id < b.id ? -1 : 1;
  });
}

}

