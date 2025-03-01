import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      name: "",
      description:""
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      console.log('Form Submitted:', this.commentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm() {}
}
