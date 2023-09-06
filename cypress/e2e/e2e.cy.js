describe('app works correctly with routes', function() {
  beforeEach(()=> {
    cy.visit('http://localhost:3000');
});
    

  it('should open todos by default', function() {
    cy.contains('todos');
  });

  it('should open active after click on active button', function() {
    cy.get('button').contains('Active').click();
    cy.contains('Здесь будут актуальные задачи');
  });

  it('should open completed after click on completed button', function() {
    cy.get('button').contains('Completed').click();
    cy.contains('Здесь будут выполненные задачи');
  });

  it ('should add, complete and delete todo', function() {
    cy.get('input[type="text"]').type('Test App{enter}');
    cy.contains('Test App');
    cy.get('label').click(); 
    cy.get('button').contains('Completed').click(); 
    cy.contains('Test App');
    cy.get('button').contains('Clear completed').click(); 
    cy.contains('Здесь будут выполненные задачи');
  })

 
  
});