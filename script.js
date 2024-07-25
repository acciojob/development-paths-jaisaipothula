cy.get('li').should('have.length', 5);

const paths = ['Cloud', 'Desktop', 'Video Game', 'Mobile', 'Web']; // corrected 'Video Sport' to 'Video Game'
for (let index = 0; index < paths.length; index++) {
  cy.get('li').eq(index).should('have.text', `${paths[index]} development`);
}
