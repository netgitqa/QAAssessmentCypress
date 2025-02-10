class LibraryPage {
  constructor() {
    this.weblocators = {

      dataSourcesBtn: 'button:contains("Data Sources")',
      templatesBtn: 'button:contains("Templates")',
      addFileBtn: 'button:contains("Add files")',
      removeFileBtn: 'button[aria-label="remove file"]',
      cancelBtn: 'button:contains("Cancel")',
      uploadBtn: 'button:contains("Upload")',
      deleteBtn: 'button:contains("Delete")'
    }
  }

  visit() {
    cy.visit('/library');
    return this;
  }

  clickAddButton() {
    cy.get(this.weblocators.addFileBtn).click()
    return this;
  }

  attachFile(value) {
    cy.get('.MuiBox-root.css-z14mjz').selectFile('cypress/attachements/pdf.pdf', { action: 'drag-drop' });
    return this;
  }

  clickUploadButton() {
    cy.get(this.weblocators.uploadBtn).click();
    return this;
  }




  // uploadFile(value) {
  //   cy.get(this.weblocators.addFileBtn).click()
    // cy.get('.MuiBox-root.css-z14mjz')
    //     .then(($dropArea) => {
    //       const dataTransfer = new DataTransfer();
    //       // Append the file to the dataTransfer object
    //       dataTransfer.items.add(new File([cy.readFile('/home/jnkoder/Downloads/')], 'pdf.pdf', { type: 'text/plain' }));
    //
    //       // Trigger the drop event
    //       $dropArea[0].dispatchEvent(new DragEvent('drop', {
    //         dataTransfer: dataTransfer,
    //       }));
    //     });

    // cy.get('.MuiBox-root.css-z14mjz').selectFile('/home/jnkoder/Downloads/pdf.pdf', { action: 'drag-drop' });


  // cy.fixture('pdf.pdf', 'binary').then((fileContent) => {
  // cy.get('.MuiBox-root.css-z14mjz').selectFile(
  //     {
  //       contents: fileContent,
  //       fileName: 'pdf.pdf',
  //       mimeType: 'application/pdf',
  //     },
  //     { action: 'drag-drop' }
  //   );
  // });

    // cy.get('input[type="file"]').attachFile('/home/jnkoder/Downloads/pdf.pdf');
    // cy.get(this.weblocators.addFileBtn).selectFile('/home/jnkoder/Downloads/pdf.pdf', { action: 'drag-drop' });
    // return this;
  // }
}

export default LibraryPage;