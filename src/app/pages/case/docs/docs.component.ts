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
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
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