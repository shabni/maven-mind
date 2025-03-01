import { Component } from '@angular/core';

interface Document {
  name: string;
  createdAt: string;
  createdBy: string;
  updatedBy: string;
  file: string;
}

interface DocumentCategory {
  id: string;
  name: string;
  documents: Document[];
}

@Component({
  selector: 'app-dependants',
  templateUrl: './dependants.component.html',
  styleUrls: ['./dependants.component.scss']
})
export class DependantsComponent {
  documentCategories: DocumentCategory[] = [
    {
      id: 'category1',
      name: 'Category 1',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category2',
      name: 'Category 2',
      documents: [
        { name: 'Doc A', createdAt: '2024-02-26', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category3',
      name: 'Category 3',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category4',
      name: 'Category 4',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category5',
      name: 'Category 5',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category6',
      name: 'Category 6',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category7',
      name: 'Category 7',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category8',
      name: 'Category 8',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category9',
      name: 'Category 9',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category10',
      name: 'Category 10',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category11',
      name: 'Category 11',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category12',
      name: 'Category 12',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
    {
      id: 'category13',
      name: 'Category 13',
      documents: [
        { name: 'Doc 1', createdAt: '2024-02-28', createdBy: 'Admin', updatedBy: 'Editor', file: 'assets/sample.pdf' },
        { name: 'Doc 2', createdAt: '2024-02-27', createdBy: 'User', updatedBy: 'Admin', file: 'assets/sample.pdf' }
      ]
    },
  ];

  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Created At', prop: 'createdAt' },
    { name: 'Created By', prop: 'createdBy' },
    { name: 'Updated By', prop: 'updatedBy' },
    { name: 'Action' }
  ];

  previewUrl: string | null = null;

  previewDocument(file: string): void {
    this.previewUrl = file;
  }

  deleteDocument(category: DocumentCategory, document: Document): void {
    category.documents = category.documents.filter(doc => doc !== document);
  }
}