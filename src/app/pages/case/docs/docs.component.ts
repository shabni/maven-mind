import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var bootstrap: any;
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
export class DocsComponent implements AfterViewInit {
  previewUrl: SafeResourceUrl | null = null;

  documentCategories: DocumentCategory[] = [
    {
      id: 'passportDocs',
      name: 'Passport',
      documents: [
        { name: 'passport_doc_1.pdf', createdAt: '2023-10-01', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/studentFiles/passport_doc_1.pdf' },
        { name: 'passport_doc_2.pdf', createdAt: '2023-10-02', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/studentFiles/passport_doc_2.pdf' }
      ]
    },
    {
      id: 'brpDocs',
      name: 'BRP',
      documents: [
        { name: 'brp_doc_1.pdf', createdAt: '2023-10-03', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/studentFiles/brp_doc_1.pdf' }
      ]
    },
    {
      id: 'financialDocs',
      name: 'Financial Statement',
      documents: [
        { name: 'financial_statement_1.pdf', createdAt: '2023-10-04', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/studentFiles/financial_statement_1.pdf' },
        { name: 'financial_statement_2.pdf', createdAt: '2023-10-05', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/studentFiles/financial_statement_2.pdf' },
        { name: 'financial_statement_3.pdf', createdAt: '2023-10-06', createdBy: 'Admin', updatedBy: 'Admin', file: 'assets/studentFiles/financial_statement_3.pdf' }
      ]
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltip => new bootstrap.Tooltip(tooltip));
  }

  previewDocument(file: string) {
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(file);
  }

  deleteDocument(category: DocumentCategory, doc: Document) {
    category.documents = category.documents.filter(d => d !== doc);
  }
}
