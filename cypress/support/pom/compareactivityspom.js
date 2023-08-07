/// <reference types="Cypress"/>



class learn{

    getUrl(){
      cy.fixture('learn').then((data1)=>{
        cy.visit(data1.url)

      // cy.get('#accept_cookie').click();
      // cy.get('#close > span').click();
      })
    }
    getExtra(){
      cy.get('#close > span').click();
    }
    getUsernamepassword(){
        cy.fixture('learn').then((data)=>{
           
           cy.get('h2').should('be.visible') 
           cy.get('[id="txtUsername"]').type(data.UserName)
            cy.get('#txtPassword').type(data.PassWord)
            
        })
    }
    getClick(){
        
        cy.get('#btnLogin').click();
        cy.wait(5000)
    }
    getHalopage(){
      cy.wait(5000)
       cy.url().should('eq','https://halo.learnship.com/')
        cy.get('.desktop_header').should('be.visible')
    }
    getContinue(){
      cy.get('.allHeaders > .headeralign',{timeout:10000}).should('be.visible')
        cy.get('span').contains('Continue learning').click();

        }
getHome(){
    cy.wait(2000)
    cy.get('.activeItem > a').should('be.visible')
    cy.url().should('eq','https://sprint.learnship.com/businessenglish')

  
  
}
getCompareactivity(){
 cy.wait(5000)

    cy.get(':nth-child(1) > .course_part_title').then(($home)=>{
       let text1 = cy.log($home.text());

    })
   
    cy.get('#levelIndex > a').click();
    cy.get('[class="active"]').then(($level)=>{
        let text2=cy.log($level.text());
        })
}
    getCompare1(){
        let text0;
        let home;
        let level;
    cy.get('[data-rb-event-key="home"]').click()
    cy.get(':nth-child(1) > .course_part_title').invoke('text').then((text) => {
        text0 = text;
        const arr=text.split(" ")

        
      home= arr[0]
      cy.log(home)
      
      });

 
    cy.get('#levelIndex > a').click()
    cy.get('[class="active"]').invoke('text').then((text) => {
        level = text;
        cy.log(level);
        if (home === level) {
            cy.log('the unit title both home and level is same');
          } else {
            cy.log('the unit title both home and level is not same ');
           
          }
    })

    }
    //check the units name
    getLevevlindex(){
      cy.wait(2000)
        cy.get('.Index_wrapper > h1').should('be.visible');
    }
    getUnit1(){
        cy.get(':nth-child(1) > .unitList-overview > .selected-unit > .MuiAccordionSummary-content > .MuiTypography-root').then(($title1)=>{
       cy.log($title1.text());
        })
        cy.get('[data-rb-event-key="home"]').click();
        cy.get('.UnitTitle > p').then(($title2)=>{
         cy.log($title2.text())
         
        })
     
    }
    getUnitTitle(){
      let titlehome;
      let titlelevel;
        let title1;
        let title2;
       
        cy.get('#levelIndex').click();
        cy.get(':nth-child(1) > .unitList-overview > .selected-unit > .MuiAccordionSummary-content > .MuiTypography-root').invoke('text').then((text)=>{
             titlehome=text;
             const arrtitle=text.split(" ");
title1=arrtitle[2];
            cy.log(title1);
      
              
             })
             cy.get('[data-rb-event-key="home"]').click();
             cy.get('.UnitTitle > p').invoke('text').then((text)=>{
             titlelevel=text;
             const arrtitle1=text.split(" ");
             title2=arrtitle1[2];
            cy.log(title2);
           if(title1===title2){
            cy.log("the unit name is same")
           }
           else{
            cy.log("the unit name is not same")
           }
        
             })
    }
   //unit2
  getHomePage(){
    cy.get('.content_section > span').should('be.visible');
  }
  getVolu(){
    let volconcept1;
     let volconcept2;
     let home1;
    cy.get('.sub_unit_details > :nth-child(1)').invoke('text').then((text)=>{
        volconcept1=text;
        cy.log(volconcept1)

    })
    cy.get('#levelIndex > a').click();
    cy.get(':nth-child(1) > .unitList-overview > .selected-unit > .MuiAccordionSummary-content > .description-container > :nth-child(1) > li').invoke('text').then((text)=>{
        home1=text;
        cy.log(home1)
        const arr=text.split(/[:]/)

        
        volconcept2= arr[0]
        cy.log(volconcept2)
      
    })
  }
    getConceptCompare(){
     let  volconcept1 ;
     let volconcept2;
        if(volconcept1===volconcept2){
            cy.log('concepts are same')
           }
           else{
            cy.log('concepts are not same')
           }
    }
   //user check the activiti in level index page
   getVocabulary(){
    let Vocabularytext1;
    let countlevel;
    let counthome;
    
        cy.get(':nth-child(1) > .unitList-overview')
  .within(() => {
    cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion > :nth-child(1) > .MuiAccordionSummary-root').click();
    
cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > .card-body > :nth-child(1) > .preWork-section > .activityList').invoke('text').then((text)=>{
    Vocabularytext1=text;
    cy.log(Vocabularytext1);

      
})
        
  })
  
   
    }
   getVocabularyText(){
    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li').each(($li, index) => {
   
        let  elementlist= $li.text().trim();
    
        cy.log(elementlist);
        
        
        cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
            .its('length')
            .then((count1) => {
              cy.log('Element count:', count1);
             let countlevel=count1;
    cy.log(countlevel);
            })
        
      });
    
      cy.get('[data-rb-event-key="home"] > a').click();
      cy.get('p').contains('19').invoke('text').then((text)=>{
    cy.log(text)
    const ar2=text.split(" ")
    
            
    let count2= ar2[3]
    cy.log(count2)
      })
   }
   getVocabularyTextCounut(){
   let count1;
   let count2;
   if(count1===count2){
    cy.log("the activity count same")

   }
   else{
    cy.log("the activity count not same")
   }
   
   }
   getComletedActivity(){
    cy.get('[data-rb-event-key="home"] > a').click();
    cy.get('p').contains('19').invoke('text').then((text)=>{
  cy.log(text)
  const ar2=text.split(" ")
  let count2= ar2[1]
  cy.log(count2)
    })
    cy.get('#levelIndex').click();
   cy.get(':nth-child(1) > .unitList-overview')
    .within(() => {
      cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion > :nth-child(1) > .MuiAccordionSummary-root').click();
    })  
    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li[class="completed"]')
      .its('length')
            .then((counts) => {
              cy.log('Element count:', counts);
             let comletedactivitys=counts;
    cy.log(comletedactivitys);
            })
   
  
   }
   getComletedActivityText(){
    let count2;
    let comletedactivitys;
    let complete;
    let uncomplete;
    if(count2===comletedactivitys){
      cy.log('the completed activity count is same')
      cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li[class="completed"]')
      .invoke('text').then((complete)=>{
cy.log(complete);
      })
    }
   else{
    cy.log('the completed activity count is not same')
    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li[class]')
    .invoke('text').then((uncomplete)=>{
cy.log(uncomplete);
    })
   }
   
   }
   getUnit1Activity(){
    
 
  cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div')
  .children().find('li[class="completed"]').invoke('text').then((text)=>{
    cy.log(text)
  
  
 })
       
         
   }
getGrammar(){
  cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion > :nth-child(2) > .MuiAccordionSummary-root').click();
}
getGrammarPart(){
  cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > .card-body > :nth-child(1) > .preWork-section > .activityList').should('be.visible')
}
getGrammarPartCount(){
  cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul')
  .find('li').its('length').then((counts) => {
    cy.log('grammarpart activity count:'+ counts);
   let grammarpartcount=counts;
cy.log("grammarpartcount in level index:"+grammarpartcount);
  })
}
getGrammarPartName(){
  cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul')
  .find('li').invoke('text').then((text)=>{
    let grammarpartname=text;
    cy.log("grammarpart activities name:"+grammarpartname);
  })
}
getGrammarPartCountComparing(){
  this.grammarpartcount();
  cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul')
     .find('li[class="completed"]').its('length').then((counts) => {
      cy.log('grammarpart completed activity count:'+ counts);
     let grammarpartcompletedcount=counts;
  cy.log("grammarpart completed count in level index:"+ grammarpartcompletedcount);
     })
}
getComparedActivities(){
  let grammarpartcount;
  let grammarpartcompletedcount;
  if(grammarpartcount!=grammarpartcompletedcount){
cy.log('not')
  }
  else{
    cy.log('same')
  }
}
getLogout(){
  cy.get('.burger-menu > #basic-nav-dropdown').click({force:true});
  cy.get('#logout').click({force:true});
}
getLogoutSuccess(){
  cy.url().should('eq','https://login.learnship.com/')
}
}
export default  learn;